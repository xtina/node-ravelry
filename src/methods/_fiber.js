module.exports = function (that) {
  var common = require('../utilities/commonCalls.js')(that);
  return {
    create: function (FiberStash, cb) {
      // create(FiberStash[, cb])
      return common.postParams(`/people/${that.user.username}/fiber/create.json`, FiberStash, cb);
    },

    createPhoto: function (id, params, cb) {
      // createPhoto(id, params[, cb])
      return common.postParams(`/people/${that.user.username}/fiber/${id}/create_photo.json`, params, cb);
    },

    show: function (username, id, cb) {
      // show([username,] id[, cb])
      return common.getUserId('/people/', '/fiber/', '.json', username, id, cb);
    },

    update: function (id, FiberStash, cb) {
      // update(id, FiberStash[, cb])
      return common.postParams(`/people/${that.user.username}/fiber/${id}.json`, FiberStash, cb);
    }
  };
};
