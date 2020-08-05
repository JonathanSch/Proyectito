const services = require('../services/userServices')

module.exports = {
    findUsers : async (req,res) =>{
        try {
        const users = await services.findUsers();
        res.send({users}).status(200) 
        } catch (error) {
            res.send({error}).status(409)
        }
    },
    findUserById : async (req,res) =>{
        try {
            const user = await services.findUserById(req.params.id)
            res.status(200).send({user})
        } catch (error) {
            res.send({error}).status(409)
        }
    },
    create : async (req,res) => {
        const user = req.body;
        try {
            await services.create(user);
            res.send({user}).status(201);
        } catch (error) {
            res.send({error}).status(409)
        }
    },
    modifyUser : async (req,res) => {
        try {
            const user = await services.findUserById(req.params.id)
            const modifiedUser = await services.modifyUser(user , req.body)
            res.send({modifiedUser}).status(201)
        } catch (error) {
            res.send({error}).status(409)
        }
    },
    deleteUser: async(req,res)=>{
        try {
            const user = await services.findUserById(req.params.id)
            const modifiedUser = await services.modifyUser(user , {is_active : false})
            res.send({message:'usuario más que eliminado'}).status(201)
        } catch (error) {
            res.send({error}).status(409)
        }
    }
}