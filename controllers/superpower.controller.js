const {SuperPower} = require('../models');

module.exports.createSuperPower = async(req,res,next)=>{

    try{
        const {body} = req;
        const createdSuperPower = await SuperPower.create(body);
        res.status(201).send({data: createdSuperPower})
    }catch(err){
        next(err)
    }
};

module.exports.updateSuperPower = async(req,res,next)=>{

    try{
        const {body, params: {id}} = req;
        const updatedSuperPower = await SuperPower.update(body, {
            where: {
                id:id
            },
            returning: 'super_power'
        });
        res.status(200).send({data: updatedSuperPower})
    }catch(err){
        next(err)
    }
};

module.exports.deleteSuperPower = async(req,res,next) => {
    const {
        params: {id}
    }=req;
    try{
        const deletedSuperPower = await SuperPower.destroy({
            where:{
                id:id
            }
        });
        res.status(200).send({data: deletedSuperPower})
    }catch(err){
        next(err)
    }
};