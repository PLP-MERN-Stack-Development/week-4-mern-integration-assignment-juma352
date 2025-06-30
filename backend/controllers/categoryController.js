const Category = require('../models/Category')

//Create a new category
exports.createCategory = async (req, res) => {
    try{
        const newCat = new Category(req.body);
        const saved = await newCat.save();
        res.status(201).json({message: "Category created successfully", data: saved});
        } catch (err) {
            res.status(500).json({message: "Error creating category", error: err});
    }
};
//Get all Categories
exports.getCategories = async (req, res) => {
    try{
        const cats = await Category.find();
        res.json(cats);
        } catch (err) {
            res.status(500).json({message: "Error fetching categories", error: err});
    }
};