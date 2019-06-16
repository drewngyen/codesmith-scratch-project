const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// database imports
const userCtrl = require('./controllers/user-controller');

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
app.get('/dependencies', (req, res) => {
  res.json(path.join(__dirname, '../package.json'));
});

// serve index.html on the route '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// user controller 
// query all users for test
app.get('/users', userCtrl.testRoute);
// query a individual user 
app.get('/user/:id', userCtrl.queryUser);
// query a individual user's gift list
app.get('/giftlist/:id', userCtrl.testRoute);
// query a individual user's interests
app.get('/interests/:id', userCtrl.testRoute);
// creating a new user with giftlist and interests
app.post('/create', userCtrl.createUser);
// updating a user's giftlist
app.put('/user/:id', userCtrl.testRoute);



// test routes
app.get('/test', userCtrl.insertTestData);
// app.post('/', userCtrl.testRoute ,(req, res) => {
//     res.redirect('/')
// });


app.listen(3000); //listens on port 3000 -> http://localhost:3000/
