const connection = require('../database/connection.js');

module.exports = {
    async index(request, response) {
        const ong_id_auth = request.headers.authorization;
        const result = await connection('incidents').where('ong_id', ong_id_auth).select('*');

        return response.json(result);
    }
}