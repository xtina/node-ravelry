module.exports = function (that) {
  var common = require('../utilities/commonCalls.js')(that);
  return {
    currentUser: function (session, cb, cache) {
      // currentUser([cb, cache])
      cache = cache || true;
      if (cache && session.user) return cb(null, session.user);
      common.get(session, '/current_user.json', cb);
    },
    colorFamilies: function (cb) {
      // colorFamilies([cb])
      common.get('/color_families.json', cb);
    },
    yarnWeights: function (cb) {
      // yarnWeights([cb])
      common.get('/yarn_weights.json', cb);
    }
  };
};
