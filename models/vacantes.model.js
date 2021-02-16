const mongoose = require('mongoose');
const {Schema} = mongoose;
const moment = require('moment');

let countryModel = require('./country.model')

const vacancysModel = new Schema({
    status: {
        type: Number
    },
/*     country: {
        type: Schema.Types.ObjectId,
        ref: countryModel
    }, */
    country: {
        type: String
    },
    created_by:{
        type: String
    },
    url_psicometrico:{
        type:String
    },
    title_job: {
        required: true,
        type: String
    },
    subtitle_job: {
        required: true,
        type: String
    },
    description_job: {
        required: true,
        type: String
    },
    location_job: {
        type: String
    },
    zone_job: {
        type: String
    },
    type_job: {
        type: Number
    },
    ageRange: {
        type: String
    },
    payment: {
        type: String
    },
    payment_type: {
        type: String
    },
    experience_job: {
        type: String
    },
    working_hours: {
        type: String
    },
    project: {
        type: String
    },    
    isDelivery : {
        type: Boolean
    },    
    hiringDate: {
        type: String
    },    
    requirements: {
        type: String
    },    
    documents: {
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

module.exports = mongoose.model('vacancy', vacancysModel);