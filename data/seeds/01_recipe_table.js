
exports.seed = async function(knex) {
      await knex('recipe_table').insert([
        {recipe_name: 'Garlic Butter Salmon'},
        {recipe_name: 'Scrambled Eggs'},
        {recipe_name: 'Garlic Chicken'}
      ]);
};
