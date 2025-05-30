const Recipe = require('../models/Recipe');

// Get all recipes for a user
exports.getRecipes = async (req, res) => {

    try {
        const recipes = await Recipe.find({ userId: req.user.id });
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch recipes' });
    }
};

// Create a recipe
exports.createRecipe = async (req, res) => {
    try {
        const { title, ingredients, instructions, tags, image } = req.body;

        const recipe = new Recipe({
        title,
        ingredients,
        instructions,
        image,
        tags,
        userId: req.user.id,
        });

        await recipe.save();
        res.status(201).json(recipe);
    } catch (err) {
        res.status(400).json({ error: 'Error creating recipe' });
    }
};

// Update a recipe
exports.updateRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findOneAndUpdate(
        { _id: req.params.id, userId: req.user.id },
        req.body,
        { new: true }
        );
        if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
        res.json(recipe);
    } catch (err) {
        res.status(400).json({ error: 'Error updating recipe' });
    }
};

// Delete a recipe
exports.deleteRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findOneAndDelete({
        _id: req.params.id,
        userId: req.user.id,
        });
        if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
        res.json({ message: 'Recipe deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Error deleting recipe' });
    }
};