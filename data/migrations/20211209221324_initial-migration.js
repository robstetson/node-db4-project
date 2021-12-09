exports.up = async function(knex) {
  await knex.schema
  .createTable('recipes', recipes=>{
      recipes.increments('recipe_id')
      recipes.string('recipe_name', 123).notNullable().unique()
  })
  .createTable('ingredients', ingredients=>{
      ingredients.increments('ingredient_id')
      ingredients.string('ingredient_name', 123).notNullable().unique()
      ingredients.string('ingredient_unit', 123)
  })
  .createTable('steps', steps=>{
      steps.increments('step_id')
      steps.string('step_text',123).notNullable()
      steps.integer('step_number').notNullable()
      steps.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('recipe_id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT') 

  })
  .createTable('step-ingredients', table=>{
      table.increments('step_ingredient_id')
      table.float('quantity').notNullable()
      table.integer('step_id')
      .unsigned()
      .notNullable()
      .references('step_id')
      .inTable('steps')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT') 
      table.integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('ingredient_id')
      .inTable('ingredients')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT') 
  })
};

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('step-ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
   
};
0