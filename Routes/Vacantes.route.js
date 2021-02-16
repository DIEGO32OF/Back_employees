'use strict'

var expres = require('express');
var vacantesControllers = require('../controllers/vacantes.controller');
var api = expres.Router();
var md_Auth = require('../middleware/auth.middleware');

api.get('/getVacantesByCountry', vacantesControllers.getAllElements);
api.post('/newvacancy',  vacantesControllers.createElement);
module.exports = api;
