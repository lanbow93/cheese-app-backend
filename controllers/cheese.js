const Cheese = require("../models/cheese")
const router = require("express").Router()

// Index route for Cheeses
router.get("/", async (request, response) => {
    try {
        response.json(await Cheese.find({}))
    } catch (error) {
        response.status(400).json(error);
    }
})

// Destroy route for Cheeses
router.delete("/:id", async (request, response) => {
    try {
        response.json(await Cheese.findByIdAndDelete(request.params.id))
    } catch (error) {
        response.status(400).json(error)
    }
})

// Update route for Cheeses
router.put("/:id", async (request, response) => {
    try {
        response.json(await Cheese.findByIdAndUpdate(request.params.id, request.body));
    } catch(error) {
        response.status(400).json(error);
    }
})

// Create route for Cheeses
router.post("/", async (request, response) => {
    try {
        response.json(await Cheese.create(request.body))
    } catch (error) {
        response.status(400).json(error)
    }
})

// Show route for Cheeses
router.get("/:id", async (request, response) => {
    try {
        response.json(await Cheese.findById(request.params.id))
    } catch (error) {
        response.status(400).json(error)
    }
})

module.exports = router