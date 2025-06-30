const Post = require('../models/Post');

//Create posts 
exports.createPost = async (req, res) => {
    try{
        const newPostData = req.body;
        if (req.file) {
            newPostData.imageUrl = req.file.path;
        }
        const newPost = new Post(newPostData);
        const saved = await newPost.save();
        res.status(201).json(saved);
    }catch(err) {
        res.status(500).json({msg: err.message});
    }
};

//Read
exports.getPosts = async (req, res) => {
    try{
        const category = req.query.category;
        const posts = category
        ? await Post.find({category})
        : await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//Update
exports.updatePost = async (req,res) => {
    try{
        const updateData = req.body;
        if (req.file) {
            updateData.imageUrl = req.file.path;
        }
        const updated = await Post.findByIdAndUpdate(req.params.id, updateData, {new: true});
        res.json(updated);
    }catch (err) {
        res.status(500).json({msg: err.message});
    }
};

//Delete
exports.deletePost = async (req, res) => {
    try{
        await Post.findByIdAndDelete(req.params.id);
        res.json({message: "Post deleted"});
    } catch(err) {
       res.status(500).json({msg: err.message}); 
    }
};

