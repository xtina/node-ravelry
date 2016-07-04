
module.exports = function (that) {
  var common = require('../utilities/commonCalls.js')(that);
  return {
    create: function (Bookmark, cb) {
      // create(Bookmark[, cb])
      return common.postParams(`/people/${session.user.username}/favorites/create.json`,
          Bookmark, cb);
    },
    delete: function (id, cb) {
      // delete(id[, cb])
      return common.deleteId(`/people/${session.user.username}/favorites/`, id, '.json', cb);
    },
    list: function (session, username, params, cb) {
      // list([username, params, cb])
      console.log(session);
      return common.getUserParams(session, '/people/', '/favorites/list.json', username, params, cb);
    },
    show: function (username, id, cb) {
      // show(username, id[, cb])
      return common.getUser('/people/', '/favorites/', '.json', username, id, cb);
    },
    update: function (id, Bookmark, cb) {
      // update(id, Bookmark[, cb])
      return common.postParams(`/people/${session.user.username}/favorites/${id}.json`, Bookmark, cb);
    },
    addToBundle: function (id, Bundle, cb) {
      // addToBundle(id, Bundle[, cb])
      return common.postParams(`/people/${session.user.username}/favorites/${id}/add_to_bundle.json`, Bundle, cb);
    },
    removeFromBundle: function (id, Bundle, cb) {
      // removeFromBundle(id, Bundle[, cb])
      return common.postParams(`/people/${session.user.username}/favorites/${id}/remove_from_bundle.json`, Bundle, cb);
    }
  };
};
