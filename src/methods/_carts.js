module.exports = function (that) {
  var common = require('../utilities/commonCalls.js')(that);
  var obj = {
    add: function (id, params, cb) {
      // add(id, params[, cb])
      return common.postParams(`/carts/${id}/add.json`, params, cb);
    },
    create: function (params, cb) {
      // create(params[, cb])
      return common.postParams('/carts/create.json', params, cb);
    },
    externalCheckout: function (id, params, cb) {
      // externalCheckout (id[, params, cb])
      return common.postParams(`/carts/${id}/external_checkout.json`, params, cb);
    },
    loveknitting: {
      externalCheckout: function (id, params, cb) {
        // loveknitting.externalCheckout(id[, params, cb])
        return common.postParams(`/carts/loveknitting/${id}/external_checkout.json`, params, cb);
      }
    }
  };
  obj.loveknittingCheckout = obj.loveknitting.externalCheckout;

  return obj;
};
