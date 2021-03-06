module.exports = function (that) {
  var common = require('../utilities/commonCalls.js')(that);
  return {
    list: function (params, cb) {
      // list([params, cb])
      return common.getParams('/deliveries/list.json', params, cb);
    },
    renew: function (id, params, cb) {
      // renew(id, params[, cb])
      return common.postParams(`/deliveries/${id}/renew.json`, params, cb);
    }
  };
};
