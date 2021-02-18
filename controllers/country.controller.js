'use strict'
/**
 * V1.0 Diego Rivas
 * Controller de catalogo de paises
 * esta es el controler que permite CRUD de paises
 */


let model_ = require('./../models/country.model')

let basicCrudConstructorHelper = require('../helpers/basicCrudConstructor.helper')

var validationObject = {
    name: 'string',
    short_name: 'string,mandatory'
};

let populate = false;

let fucntions = {
    createElement: basicCrudConstructorHelper.new(model_, validationObject),
    updateOrCreate: basicCrudConstructorHelper.updateOrCreate(model_, validationObject),
    getAllElements: basicCrudConstructorHelper.listAll(model_, populate),
    getElementById: basicCrudConstructorHelper.oneById(model_, populate),
    getOneElement: basicCrudConstructorHelper.oneBySearch(model_, populate),
    updateElementById: basicCrudConstructorHelper.idUpdate(model_, validationObject),
    findAndUpdateElement: basicCrudConstructorHelper.searchAndUpdate(model_, validationObject, populate),
    deleteElementById: basicCrudConstructorHelper.idDelete(model_),
}

module.exports = fucntions;