'use strict'
/**
 * V1.0 Diego Rivas
 * Controller de catalogo de bancos
 * esta es el controler que permite CRUD de bancos
 */


let model_ = require('./../models/bank.model')
let basicCrudConstructorHelper = require('../helpers/basicCRUDConstructor.helper')

var validationObject = {
    name: 'string',
    pais: 'string,mandatory'
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