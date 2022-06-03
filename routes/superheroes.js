const {Router} = require('express');
const superHeroesController = require('../controllers/superhero.controller');
const pagination = require('../mw/pagination.mw')

const heroRouter = Router();

heroRouter.post('/', superHeroesController.createSuperHero);
heroRouter.get('/:id', superHeroesController.getSuperHero);
heroRouter.get('/', pagination, superHeroesController.getAllSuperHeroes);
heroRouter.put('/:id', superHeroesController.updateSuperHero);
heroRouter.delete('/:id', superHeroesController.deleteSuperHero);

module.exports = heroRouter;