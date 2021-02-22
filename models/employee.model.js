const mongoose = require('mongoose');
const {Schema} = mongoose;
const moment = require('moment');

let vacanteModel = require('./vacantes.model')
let documentsModel = require('./documents.model')
let bankModel = require('./bank.model')

const dealerModel = new Schema({
    status: {
        type: Number
    },

    name: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: String
    },
     vacancy: {
        type: Schema.Types.ObjectId,
        ref: vacanteModel
    },
    type_employee: {
        required: true,
        type: Number
    },
    
    address: {
        
        type: String
    },
    profile_img:{
        type: String
    },   
    email: {
        type: String
    },   
    lat_lng: {
        type: String
    },
    date_birthday:{
        type: String
    },   
    
    documents:[{
        type: Schema.Types.ObjectId,
        ref: documentsModel
    }],
   bank_id:{
    type: Schema.Types.ObjectId,
    ref: bankModel
},
clabe_account: {
    type: String
},   
emergency_phone:
{
    type: String
},   
is_driver:{
    type: Boolean
},   
base_salary:{
    type: String
},
country:{
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

module.exports = mongoose.model('employee', dealerModel );