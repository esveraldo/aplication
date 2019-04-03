const express = require('express');
const consign = require('consign');
const app = express();

consign( {cwd: 'src', verbose: false} )
.include('./config/middleware.js')
.then('/routes')
.then('./config/routes.js')
.into(app)



app.get('/', (req, res, next) => {
    res.status(200).send();
});

/*
app.get('/users', (req, res, next) => {
    const users = [{
        name: 'John Doe',
        email: 'john@john.com',
    }];
    res.status(200).json(users);
});

app.post('/users', (req, res, next) => {
    res.status(201).json(req.body);
});
*/

module.exports = app;