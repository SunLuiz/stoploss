const connection = require ('../database/connection');

module.exports = {
async index(request, response)
{       
        const {page =1} = request.query;

        const [count] = await connection('leads').count();

        const leads = await connection('leads')
        .join('empresas', 'empresas.id', '=', 'leads.empresa_id')
        .limit(5)
        .offset((page -1) * 5)
        .select([
            'leads.*',
            'empresas.name',
            'empresas.email',
            'empresas.whatsapp',
            'empresas.city',
            'empresas.uf'
        ]);

        response.header('X-Total-Count' , count['count(*)']);
    
        return response.json(leads);
    },

    async create(request, response){
        
        const {title, description, whatsapp, value} = request.body;
        const empresa_id = request.headers.authorization;

    const [id] = await connection('leads').insert({
        title,
        description,
        whatsapp,
        value,
        empresa_id,
    });

    return response.json({id});
    },

    async delete(request, response){
        const {id}= request.params;
        const empresa_id = request.headers.authorization;

        const lead = await connection ('leads')
        .where('id', id)
        .select('empresa_id')
        .first();

        if (lead.empresa_id !== empresa_id){
            return response.status(401).json({error: 'Operation not permitted.'});
        }
        await connection('leads').where('id', id).delete();

        return response.status(204).send();
    }
};