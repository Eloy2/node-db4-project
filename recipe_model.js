const db = require("./config")

function getRecipes() {
    return db("recipe_table")
}

function getShoppingList(recipe_id) {
    return db("recipe_ingredient as ri")
            .innerJoin("ingredient_table as it", "it.id", "ri.ingredient_id")
            .where("ri.recipe_id", recipe_id)
            .select("it.ingredient_name", "ri.quantity_of_ingredients")
}

function getInstructions(recipe_id) {
    return db("steps_table")
            .where("recipe_id", recipe_id)
            .orderBy("step_number")
            .select("step_number", "instructions")
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}