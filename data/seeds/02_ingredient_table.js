
exports.seed = async function(knex) {
  await knex('ingredient_table').insert([
    {ingredient_name: 'Salmon'},
    {ingredient_name: 'Salt'},
    {ingredient_name: 'Eggs'},
    {ingredient_name: 'Garlic'},
    {ingredient_name: 'Butter'},
    {ingredient_name: 'Chicken'},
  ]);
};
