const {SuperHero} = require('../models');
// cconst createError = require('http-errors');

module.exports.createSuperHero = async (req,res,next)=>{
    try{
        const {body} = req;
        const createSuperHero = await SuperHero.create(body);
        res.status(201).send({data: createSuperHero});
    }catch(err){
        next(err)
    }
}
