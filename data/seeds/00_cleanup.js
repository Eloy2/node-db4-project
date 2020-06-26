
exports.seed = async function(knex) {
  // truncate
  await knex('steps_table').truncate()
  await knex('recipe_ingredient').truncate()
  await knex('ingredient_table').truncate()
  await knex('recipe_table').truncate()
};
