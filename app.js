'use strict'
var express = require('express');
var bodyparser = require('body-parser');

var app = express();
//cargar rutas

 var vacantes_route = require('./Routes/Vacantes.route');
 var country_route = require('./Routes/country.route');
 
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin','*');
//res.header('Access-Control-Allow-Headers','Authorization,X-API_KEY,Origin,X-Requested-With,Accept,Access-Control-Allow-Request-Method');
res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');
next();
});
//vacantes_route.initialize(app);

app.use('/api', vacantes_route);
app.use('/api', country_route);





module.exports = app;