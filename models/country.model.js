const mongoose = require('mongoose');
const {Schema} = mongoose;
const moment = require('moment');



const countryModel = new Schema({
    status: {
        type: Number
    },

    name: {
        required: true,
        type: String
    },
    short_name: {
        required: true,
        type: String
    },
    code: {
        required: true,
        type: Number
    },
    
    language: {
        
        type: String
    },
    flag: {
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

module.exports = mongoose.model('country', countryModel );