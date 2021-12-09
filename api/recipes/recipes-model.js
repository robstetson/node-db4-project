const database = require('../../data/db-config')


function getRecipeById(recipe_id){
    const recipeCollumns = database('recipes as r')
    .where('recipe_id', recipe_id)

    return recipeCollumns
}

module.exports = {getRecipeById}