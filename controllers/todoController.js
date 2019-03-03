/*here we will control the data and the routes on the application, also this is a module
because it will handle the todo module, wo we will created a moduel which will be used in the
app.js */


//this keeps the application modular
module.exports = function (app) {

    app.get('/todo', (req, res) => {
        res.render('todo');
    });
    app.post('/todo', (req, res) => {

    });
    app.delete('/todo', (req,res) => {

    });
}