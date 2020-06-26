
exports.up = async function(knex) {
  await knex.schema.createTable("recipe_table", (table) => {
      table.increments("id")
      table.text("recipe_name").notNull().unique()
  })
  .createTable("ingredient_table", (table) => {
      table.increments("id")
      table.text("ingredient_name").notNull().unique()
  })
  .createTable("recipe_ingredient", (table) => {
      // foreign key that points to recipe_table id
      table.integer("recipe_id")
        .unsigned()
        .notNull()
        .references("id")
        .inTable("recipe_table")
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      // foreign key that points to ingredient_id id
      table.integer("ingredient_id")
        .unsigned()
        .notNull()
        .references("id")
        .inTable("ingredient_table")
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.float("quantity_of_ingredients")
        .notNull()
  })
  .createTable("steps_table", (table) => {
    table.increments("id")
    table.integer("step_number").notNull()
    table.text("instructions")
    table.integer("recipe_id")
        .unsigned()
        .notNull()
        .references("id")
        .inTable("recipe_table")
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
  })
};

exports.down = async function(knex) {
  await knex.schema
        .dropTableIfExists("steps_table")
        .dropTableIfExists("recipe_ingredient")
        .dropTableIfExists("ingredient_table")
        .dropTableIfExists("recipe_table")
};
