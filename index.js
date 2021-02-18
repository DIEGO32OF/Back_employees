'use strict'
var app = require('./app');
let config = require('./config/general.config')
var mongoose = require('mongoose');
//require('./db')

var port=process.env.PORT||3977;

mongoose.connect('mongodb+srv://99minDeliveryRecord:99minDeliveryRecord1*@cluster0.xj7fk.mongodb.net/DbDeleveries', (err,res) => {
    if(err)
    {        
    throw err;
}
else
{
    console.log('Register Bd correct');
app.listen(port, function () {
    console.log('Server is run correct port:' + port);
})
}
});
