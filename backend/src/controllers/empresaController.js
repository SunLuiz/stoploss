const crypto = require('crypto');
const connection  = require('../database/connection');
module.exports = {

    async index(request, response)
    {
        const empresas = await connection('empresas').select('*', request.body.id);
    
        return response.json(empresas);
    },

    async create(request, response)
    {
        const {name, email, whatsapp, city, uf}= request.body;
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('empresas').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
    })
    
    return response.json({ id });
    }
}