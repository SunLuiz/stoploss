const express = require('express');
const routes = express.Router();

const EmpresaController = require('./controllers/empresaController');
const LeadController = require('./controllers/leadController');
const ProfileController = require('./controllers/profileController');
const SessionController = require('./controllers/sessionController');

routes.get('/empresas', EmpresaController.index);
routes.post('/empresas',EmpresaController.create);

routes.get('/sessions', SessionController.index);
routes.post('/sessions', SessionController.create);
//routes.delete('/sessions', SessionController.delete);

routes.get('/profile', ProfileController.index);

routes.get('/leads',LeadController.index);
routes.post('/leads',LeadController.create);
routes.delete('/leads/:id',LeadController.delete);

module.exports = routes;