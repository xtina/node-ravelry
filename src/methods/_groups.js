module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    return {
        search: function(params, cb){
            common.getParams('/groups/search.json', params, cb);
        }
    };
};