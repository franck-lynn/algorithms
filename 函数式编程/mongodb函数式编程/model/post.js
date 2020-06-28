const mongoose = require('mongoose');

// Clear out mongoose's model cache to allow --watch to work for tests:
// https://github.com/Automattic/mongoose/issues/1251
mongoose.models = {};
mongoose.modelSchemas = {};

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });

const PostSchema = new mongoose.Schema({
    soID: {
        type: Number,
        required: true
    },
    parentID: Number,
    url: {
        type: String,
        required: true
    },
    title: String,
    body: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    tags: [String],
    acceptedAnswerID: Number,
    user: {
        soUserID: Number,
        name: String,
        reputation: Number,
    }
});
// 查询的是 posts 集合
module.exports = mongoose.model('Post', PostSchema);



















