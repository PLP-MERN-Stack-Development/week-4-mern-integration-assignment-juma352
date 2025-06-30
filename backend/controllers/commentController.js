const Comment = require('../models/Comment');

// Create a comment
exports.createComment = async (req, res) => {
    try {
        const newComment = new Comment(req.body);
        const saved = await newComment.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

// Get comments for a post
exports.getCommentsByPost = async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.postId });
        res.json(comments);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

// Delete a comment
exports.deleteComment = async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.id);
        res.json({ message: "Comment deleted" });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};
