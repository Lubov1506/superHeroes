const {Router} = require('express');
const superHeroesController = require('../controllers/superhero.controller');

const heroRouter = Router();

heroRouter.post('/', superHeroesController.createSuperHero);

module.exports = heroRouter;