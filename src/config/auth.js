/*
 * Esse middleware será o responsável por validar o token JWT para as routas
 * protegidas e garantir que a API esteja protegida.
 */
const jwt = require('jsonwebtoken');
const env = require('../.env');

module.exports = (req, res, next) => {
    // CORS preflight request
    if(req.method === 'OPTIONS') {
        next();
    } else {
        const token = req.headers['authorization'] || req.body.token || req.query.token;
        if(!token) {
            return res.status(403).send({errors: ['No token provided.']});
        }
        console.log(env.authSecret);
        jwt.verify(token, env.authSecret, function(err, decoded) {
            if(err) {
                return res.status(403).send({errors: ['Failed to authenticate token.']});
            } else {
                req.decoded = decoded;
                next();
            }
        });
    }

};