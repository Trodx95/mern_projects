const PetController = require('../controllers/pet.controller');
module.exports = function(app){
    app.get('/api', PetController.index);
    app.post('/api/Pets', PetController.createPet);
    app.get('/api/Pets', PetController.getAllPet);
    app.get('/api/Pets/:id', PetController.getPet);
    app.put('/api/Pets/:id', PetController.updatePet);
    app.delete('/api/Pets/:id', PetController.deletePet);
}
