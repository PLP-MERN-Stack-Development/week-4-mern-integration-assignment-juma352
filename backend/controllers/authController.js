const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
    try{
        const {username, email, password} = req.body;
        const hashed = await bcrypt.hash(password, 10);
        const newUser = new User({username, email, password: hashed});
        const saved = await newUser.save();
        res.status(201).json({message: 'User Registered', user: saved.username});
        } catch (err) {
            res.status(500).json({error: err.message });
    }
};

exports.loginUser = async (req, res) => {
    try{
        const{email, password } = req.body;
        const user = await User.findOne({email});
        if(!user) return res.status(404).json({error: 'User not found'});
         const isMatch = await bcrypt.compare(password, user.password);
         if(!isMatch) return res.status(400).json({error: 'Invalid Password'});

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.status(200).json({token, user});
    }catch(err) {
      res.status(500).json({error: err.message });  
    }
    };

