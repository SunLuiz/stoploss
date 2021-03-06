const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const empresa_id = request.headers.authorization;

        const leads  = await connection('leads')
        .where('empresa_id', empresa_id)
        .select('*');

        return response.json(leads);
    }
}