const express = require('express');
const app = express();
const path = require('path');

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});
app.get('/dependencies', (req, res) => {
    res.json(path.join(__dirname, '../package.json'));
});

app.listen(3000); //listens on port 3000 -> http://localhost:3000/