const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        //const id = request.body.id;

        const empresa  = await connection('empresa')
        .where('id', request.body.id)
        .select('*');

        return response.json(empresa); 
    },

    async create(request, response){
        
        const {id} = request.body;

        const empresa = await connection('empresas')
        .where('id', id)
        .select('name');//.first();

        if(!empresa){
            return response.status(400).json({error: 'No Empresa found with this ID'});
        }
        return response.json(empresa);
    }
}