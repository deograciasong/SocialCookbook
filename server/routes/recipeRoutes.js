const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController')

// create routes 
router.get('/', recipeController.getRecipes);
router.post('/', recipeController.createRecipe);
router.put('/', recipeController.updateRecipe);
router.delete('/', recipeController.deleteRecipe);

module.exports = router;