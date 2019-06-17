const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "PATCH, PUT, POST, GET, DELETE, OPTIONS"
  );
  next();
});
// database imports
const userCtrl = require('./controllers/user-controller');

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

// serve index.html on the route '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// user controller 
// query all users for TEST
app.get('/api/users', userCtrl.testRoute);
// query a individual user 
app.get('/api/user/:id', userCtrl.queryUser);
// query a individual user's gift list
app.get('/giftlist/:id', userCtrl.sendUserGifts);
// creating a new user with giftlist and interests
app.post('/api/create', userCtrl.createUser);
// updating a user's giftlist
app.put('/user/:id', userCtrl.updateUserGiftList);
// add gift to user 
app.post('/user/:id', userCtrl.addGift);



// test routes
// app.get('/test', userCtrl.insertTestData);

app.listen(3000); //listens on port 3000 -> http://localhost:3000/
