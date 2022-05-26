const PetController = require("../controllers/pet.controller")


module.exports = app => {
    // TEST
    app.get("/api/test", PetController.test)
    // CREATE
    app.post("/api/pets/new", PetController.create)
    // READ ALL
    app.get("/api/pets", PetController.allPets)
    // READ ONE
    app.get("/api/pets/:pet_id", PetController.onePet)
    // UPDATE
    app.put("/api/pets/:pet_id", PetController.updatePet)
    // DELETE
    app.delete("/api/pets/:pet_id", PetController.deletePet)
}