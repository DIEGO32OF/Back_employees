const mongoose = require('mongoose');
const {Schema} = mongoose;
const moment = require('moment');


const documentModel = new Schema({
    status: {
        type: Number
    },

    name: {
        required: true,
        type: String
    },
   
url_file: {
    type: Number
},
type: {
    type: Number
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

module.exports = mongoose.model('documents', documentModel );