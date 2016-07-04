# Ravelry API

**CURRENTLY IN DEVELOPMENT USE AT YOUR OWN RISK**

A way to make calls to all of the endpoints offered by the Ravelry API.
My edits are specific to using Express and storing OAuth tokens in the session rather than on the Ravelry variable. If someone has a more elegant solution to getting access to the session rather than passing it around, I'd love to hear it. I'm fairly new to Node/Express and would love help.

--------------------------------------------------------------------------------

## Getting Started

Setting it up is easy! Once you have all of your information from Ravelry, put it into the packages constructor function.

```
var Ravelry = require('ravelry');
var rav = new Ravelry(
  {
    ravAccessKey: xxxxxxxxxx,
    ravSecretKey: xxxxxxxxxx,
    ravPersonalKey: xxxxxxxxxx,
    callbackUrl: 'http://localhost:3000/callback' //after requesting an oauth token, go here to get access token
    responseUrl: 'http://localhost:3000/profile' //redirects here upon successful authentication
  },
  [
    'forum-write', 'message-write' //Permissions scope variables
  ]
);
```

To authenticate your app, get to log-in url by using the method `signInUrl()`. After the user arrives at the callback URL, the OAuth verifier will need to be set in the app. (Note: I am working on making this process easier. It may change in coming versions.)

```
var express = require('express');
var app = express();
app.get('/auth', function(req, res) { //visiting localhost:3000/auth will trigger authentication
    rav.signInUrl(function (err, url) {
      res.writeHead(302, {'Location': url} );
      res.end();
    });
});

//After the user successfully logged in they are sent here with their the OAuth verifier
app.get('/callback', function(req, res) {
    //Finish authentication of app. You will receive the user's info. You can access the authenticated API routes now.
    rav.authorize(req, res);
});

app.get('/profile', function(req,res) {
  res.writeHead(200, 'application/json');
  res.end(JSON.stringify(req.session.user) || '{"user": "undefined"}');
});
```

--------------------------------------------------------------------------------

## Using the methods

Every endpoint in the [Ravelry API Documentation](http://www.ravelry.com/api) is available.

### Endpoints

The methods (with a few exceptions) are named the same way as the endpoint title is in the documentation are:

[/favorites/list](http://www.ravelry.com/api#favorites_list) => `rav.favorites.list()`

[/messages/mark_read.json](http://www.ravelry.com/api#messages_mark_read) => `rav.messages.markRead()`

### Arguments

When the endpoint requires them, arguments must be supplied in the below order. If an argument is not necessary it may be omitted.

```
rav.someMethod(session, username, id, params, callback);
```
- **session** - REQUIRED. access through req.session.

- **username** - (type: String) If the request is for the authenticated user, this argument may be omitted. Request for other users' information is only available for GET requests. Ex: `rav.favorites.list('sfrieson')`

- **id** - (type: Number) Id of requested item. Ex: `rav.messages.show(22237804)`

- **params** - (type: Object) Either url queries for GET requests or the body content of a POST/PUT request. Ex: `comments.create({type: "pattern", commented_id:573, body: "Wow! What a wonderful pattern!"})`

- **callback** - (type: Function) Not required, but the callback function always should be supplied last. It will always send the err as the first argument and the data as the second. See next section for more about callbacks

### Responses

All methods can be used with callback functions. If a callback is not sent, it will return a promise.

```
rav.colorFamilies( function (err, response) {} );
```

or

```
rav.colorFamilies()
  .then( function (response) {} )
  .catch( function (err) {} );
```

## Please stay tuned for further documentation...

Help is appreciated.
