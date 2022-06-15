const routes = require('express').Router();

const get = require('../../../controllers/usuarios/get');

routes.get('/', get);

module.exports = routes;