//We need to first require express for the routing of the application 
const express = require('express'); 
const todoCtrl = require('./controllers/todoController'); //todo controller  
//variable app will inherit all the members of express proptotype 
var app = express();
//set up for our template/view  engine
app.set('view engine', 'ejs');
//set up static files for our styles , express middleware
app.use(express.static('assets'));
//set up the middleware for post request to return a body object 

//fire the function for the routing from the todoController for the routing
todoCtrl(app);


//listen to a port
app.listen(3000, '127.0.0.1', () => {
    console.log('Application has started');
});