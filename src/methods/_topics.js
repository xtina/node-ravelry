module.exports = function (that) {
  var common = require('../utilities/commonCalls.js')(that);
  return {
    create: function (params, cb) {
      // create(params[, cb])
      return common.postParams('/topics/create.json', params, cb);
    },
    posts: function (id, params, cb) {
      // posts(id[, params, cb])
      return common.getParams(`/topics/${id}/posts.json`, params, cb);
    },
    read: function (id, params, cb) {
      // read(id, params[, cb])
      return common.postParams(`/topics/${id}/read.json`, params, cb);
    },
    reply: function (id, params, cb) {
      // reply(id, params[, cb])
      return common.postParams(`/topics/${id}/reply.json`, params, cb);
    },
    show: function (id, cb) {
      // show(id[, cb])
      return common.get(`/topics/${id}.json`, cb);
    },
    update: function (id, params, cb) {
      // update(id, params[, cb])
      return common.postParams(`/topics/${id}.json`, params, cb);
    }
  };
};
