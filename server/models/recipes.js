const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },

    ingredients: {
        type: [String],
        required: true
    },

    instructions:{
        type: [String],
        required: true
    },

    cookTime: {
        type: Number
    },

    tags: [String],

    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Recipe', recipeSchema);