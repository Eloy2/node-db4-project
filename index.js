const express = require("express")
const db = require("./recipe_model")

const server = express()

const port = process.env.PORT || 5000

server.use(express.json())

server.get("/", async (req, res) => {
    try {
        const recipes = await db.getRecipes()
        res.json(recipes)
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: "Something went wrong"})
    }
})

server.get("/shoppinglist/:id", async (req, res) => {
    try {
        const shoppinglist = await db.getShoppingList(req.params.id)
        res.json(shoppinglist)

    } catch(err) {
        console.log(err)
        res.status(500).json({ message: "Something went wrong"})
    }
})

server.get("/instructions/:id", async (req, res) => {
    try {
        const instructions = await db.getInstructions(req.params.id)
        res.json(instructions)

    } catch(err) {
        console.log(err)
        res.status(500).json({ message: "Something went wrong"})
    }
})

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})
