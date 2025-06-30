const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {type:String, required:true},
    body: {type:String, required:true},
    author:{type: String, default: 'Anonymous'},
    imageUrl: {type: String, default: ''},
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    createdAt:{type:Date, default:Date.now}

});

module.exports = mongoose.model('Post', postSchema);
