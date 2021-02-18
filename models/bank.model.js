const mongoose = require('mongoose');
const {Schema} = mongoose;
const moment = require('moment');



const bankModel = new Schema({
    status: {
        type: Number
    },

    name: {
        required: true,
        type: String
    },    
    pais: {
        type: String
    },         
    createdAt: {
        type: Date,
        required: true,
        default: moment().format()
    },
    updatedAt: {
        type: Date,
        required: true,
        default: moment().format()
    },
})

module.exports = mongoose.model('bank', bankModel );