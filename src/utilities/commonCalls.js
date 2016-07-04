module.exports = function (that) {
  return {
    getUserIdParams: function (session, preUser, preId, postId, username, id, params, cb) {
      if (username && typeof username !== 'string') {
        cb = params;
        params = id;
        id = username;
        username = session.user.username;
      } else if (!username) username = session && session.user && session.user.username ? session.user.username : ''; // User may not be logged in
      if (id === -1) id = '';
      if (typeof params !== 'object') {
        cb = params;
        params = {};
      }
      if (!params) params = {};

      var endpoint = preUser + username + preId + id + postId;
      var promise = new Promise(function (resolve, reject) {
        that._get(session, endpoint, params, function (err, data) {
          if (err) return reject(err);
          resolve(JSON.parse(data));
        });
      });

      if (cb) {
        promise
        .then(function (res) { cb(null, res); })
        .catch(cb);
        return null;
      }
      return promise;
    },
    getUserParams: function (session, preUser, postUser, username, params, cb) {
      if (username && typeof username !== 'string') {
        cb = params;
        params = username;
        username = session.user.username;
      } else if (!username) username = session.user && session.user.username ? session.user.username : ''; // User may not be logged in
      if (params && typeof params !== 'object') {
        cb = params;
        params = {};
      } else if (!params) params = {};
      return this.getUserIdParams(session, preUser, postUser, '', username, -1, params, cb);
    },
    getUserId: function (preUser, preId, postId, username, id, cb) {
      if (username && typeof username !== 'string') {
        cb = id;
        id = username;
        username = session.user.username;
      } else if (!username) username = session.user && session.user.username ? session.user.username : ''; // User may not be logged in
      return this.getUserIdParams(preUser, preId, postId, username, id, null, cb);
    },
    getUser: function (preUser, postUser, username, cb) {
      if (username && typeof username !== 'string') {
        cb = username;
        username = session.user.username;
      } else if (!username) username = session.user && session.user.username ? session.user.username : ''; // User may not be logged in
      return this.getUserIdParams(preUser, postUser, '', username, -1, {}, cb);
    },
    getParams: function (endpoint, params, cb) {
      if (params && typeof params !== 'object') {
        cb = params;
        params = {};
      } else if (!params) params = {};
      return this.getUserIdParams(endpoint, '', '', '', -1, params, cb);
    },
    get: function (session, endpoint, cb) {
      return this.getUserIdParams(session, endpoint, '', '', '', -1, {}, cb);
    },
    postParams: function (endpoint, params, cb) {
      var promise = new Promise(function (resolve, reject) {
        that._post(endpoint, params, function (err, data) {
          if (err) return reject(err);
          resolve(JSON.parse(data));
        });
      });

      if (cb) {
        promise
        .then(function (res) { cb(null, res); })
        .catch(cb);
        return null;
      }
      return promise;
    },
    post: function (endpoint, cb) {
      this.postParams(endpoint, {}, cb);
    },
    putParams: function (endpoint, params, cb) {
      var promise = new Promise(function (resolve, reject) {
        that._put(endpoint, params, function (err, data) {
          if (err) return reject(err);
          resolve(JSON.parse(data));
        });
      });

      if (cb) {
        promise
        .then(function (res) { cb(null, res); })
        .catch(cb);
        return null;
      }
      return promise;
    },
    delete: function (endpoint, cb) {
      var promise = new Promise(function (resolve, reject) {
        that._delete(endpoint, function (err, data) {
          if (err) return reject(err);
          resolve(JSON.parse(data));
        });
      });

      if (cb) {
        promise
        .then(function (res) { cb(null, res); })
        .catch(cb);
        return null;
      }
      return promise;
    }
  };
};
