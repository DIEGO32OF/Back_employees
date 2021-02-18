'use strict'

var expres = require('express');
var countriesControllers = require('../controllers/bank.controller');
var api = expres.Router();
var md_Auth = require('../middleware/auth.middleware');

api.get('/getBanks', countriesControllers.getAllElements);
api.post('/newBank',  countriesControllers.createElement);

module.exports = api;