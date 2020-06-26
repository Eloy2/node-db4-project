
exports.seed = async function(knex) {
  await knex('steps_table').insert([
    {step_number: 1, instructions: 'add Salmon', recipe_id: 1},
    {step_number: 2, instructions: 'add Salt', recipe_id: 1},
    {step_number: 3, instructions: 'add Garlic', recipe_id: 1},
    {step_number: 4, instructions: 'add Butter', recipe_id: 1},
    {step_number: 1, instructions: 'add Eggs', recipe_id: 2},
    {step_number: 2, instructions: 'add Salt', recipe_id: 2},
    {step_number: 3, instructions: 'add Butter', recipe_id: 2},
    {step_number: 1, instructions: 'add Chicken', recipe_id: 3},
    {step_number: 2, instructions: 'add Salt', recipe_id: 3},
    {step_number: 3, instructions: 'add Garlic', recipe_id: 3},
  ]);
};
