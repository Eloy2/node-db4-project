
exports.seed = async function(knex) {
  await knex('recipe_ingredient').insert([
    {recipe_id: 1, ingredient_id: 1, quantity_of_ingredients: 6.05},
    {recipe_id: 1, ingredient_id: 2, quantity_of_ingredients: 0.03},
    {recipe_id: 1, ingredient_id: 4, quantity_of_ingredients: 0.70},
    {recipe_id: 1, ingredient_id: 5, quantity_of_ingredients: 0.50},
    {recipe_id: 2, ingredient_id: 3, quantity_of_ingredients: 2.35},
    {recipe_id: 2, ingredient_id: 2, quantity_of_ingredients: 0.05},
    {recipe_id: 2, ingredient_id: 5, quantity_of_ingredients: 0.20},
    {recipe_id: 3, ingredient_id: 6, quantity_of_ingredients: 1.24},
    {recipe_id: 3, ingredient_id: 2, quantity_of_ingredients: 0.07},
    {recipe_id: 3, ingredient_id: 4, quantity_of_ingredients: 0.85},
  ]);
};
