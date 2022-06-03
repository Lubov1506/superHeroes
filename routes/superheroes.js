const {Router} = require('express');
const superHeroesController = require('../controllers/superhero.controller');

const heroRouter = Router();

heroRouter.post('/', superHeroesController.createSuperHero);
heroRouter.get('/:id', superHeroesController.getSuperHero);

module.exports = heroRouter;