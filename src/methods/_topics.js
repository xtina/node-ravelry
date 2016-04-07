module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    return {
        create: function(params, cb){
            return common.postParams('/topics/create.json', params, cb);
        },
        post: function(id, params, cb){
            return common.postParams(`/topics/${id}/posts.json`, params, cb);
        },
        read: function(id, params, cb){
            return common.postParams(`/topics/${id}/read.json`, params, cb);
        },
        reply: function(id, params, cb){
            return common.postParams(`/topics/${id}/reply.json`, params, cb);
        },
        show: function(id, cb){
            return common.get(`/topics/${id}.json`, cb);
        },
        update: function(id, params, cb){
            return common.postParams(`/topics/${id}.json`, params, cb);
        },
    };
};
