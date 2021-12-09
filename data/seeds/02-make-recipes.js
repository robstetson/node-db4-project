const recipes = [
    {recipe_name: 'Chicken Parm'},
    {recipe_name: 'Tacos'},
    {recipe_name: 'Steak'},
]
const ingredients = [
    {ingredient_name: 'Chicken', ingredient_unit: 'lbs'},
    {ingredient_name: 'Steak', ingredient_unit: 'lbs'},
    {ingredient_name: 'Beef', ingredient_unit: 'lbs'},
    {ingredient_name: 'Cheese', ingredient_unit: 'lbs'},
    {ingredient_name: 'spices', ingredient_unit: 'tbs'},
]
const steps = [
    //Chicken Parm
    {step_text: 'Heat pan', step_number: 1, recipe_id: 1},
    {step_text: 'Add chicken', step_number: 2, recipe_id: 1},
    {step_text: 'Add sauce', step_number: 3, recipe_id: 1},
    {step_text: 'Add cheese', step_number: 4, recipe_id: 1},
    // Tacos
    {step_text: 'Heat pan', step_number: 1, recipe_id: 2},
    {step_text: 'Add beef', step_number: 2, recipe_id: 2},
    {step_text: 'Add spices', step_number: 3, recipe_id: 2},
    {step_text: 'Add cheese', step_number: 4, recipe_id: 2},
    // Steak
    {step_text: 'Heat pan', step_number: 1, recipe_id: 3},
    {step_text: 'Add steak', step_number: 2, recipe_id: 3},
    {step_text: 'Add spices', step_number: 3, recipe_id: 3},
]

exports.seed = async function(knex){
 await knex('recipes').insert(recipes)
 await knex('ingredients').insert(ingredients)
 await knex('steps').insert(steps)
 await knex('step_ingredients').insert('step_ingredients')

}