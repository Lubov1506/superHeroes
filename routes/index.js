const { Router } = require('express');
const heroRouter = require('./superheroes');
const powerRouter = require('./superpowers');

const router = Router();

router.use('/superheroes', heroRouter);
router.use('/superpowers', powerRouter);

module.exports = router;