const {Router} = require('express');
const superPowersController = require('../controllers/superpower.controller')

const powerRouter = Router();

powerRouter.post('/', superPowersController.createSuperPower);
powerRouter.put('/:id', superPowersController.updateSuperPower);
powerRouter.delete('/:id', superPowersController.deleteSuperPower)

module.exports = powerRouter;