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
};

module.exports.getSuperHero = async(req,res,next) => {
    const {params: {id}}= req;
    try{
        const returnedSuperHero = await SuperHero.findByPk(id);
        res.status(200).send({data: returnedSuperHero})
    }catch(err){
        next(err)
    }
};

module.exports.getAllSuperHeroes = async(req,res,next) => {
    try{
        const { pagination = {} } = req;
        const arraySuperHeroes = await SuperHero.findAll(
                        { ... pagination }
        );
        res.status(200).send({data: arraySuperHeroes})
    }catch(err){
        next(err)
    }
};

module.exports.updateSuperHero = async(req,res,next) => {
    const {
        body, 
        params: {id}
    }=req;
    try{
        const [rowCount, updatedSuperHeroes] = await SuperHero.update(body, {
            where: {
                id:id
            },
            returning : ['id', 'nick_name']
        });
        res.status(200).send({data: updatedSuperHeroes})
    }catch(err){
        next(err)
    }
};

module.exports.deleteSuperHero = async(req,res,next) => {
    const {
        params: {id}
    }=req;
    try{
        const deletedSuperHero = await SuperHero.destroy({
            where:{
                id:id
            }
        });
        res.status(200).send({data: deletedSuperHero})
    }catch(err){
        next(err)
    }
};