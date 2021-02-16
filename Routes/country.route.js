'use strict'

var expres = require('express');
var countriesControllers = require('../controllers/country.controller');
var api = expres.Router();
var md_Auth = require('../middleware/auth.middleware');

api.get('/getCountries', countriesControllers.getAllElements);
api.post('/newCountry',  countriesControllers.createElement);

module.exports = api;