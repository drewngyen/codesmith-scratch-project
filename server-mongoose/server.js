const express = require('express');
const app = express();
const http = require('http');

const PORT = 3000;
const server = http.createServer(app);
const eventCtrl = require('./controllers/event-controller');

// app.get('/events', eventCtrl.index);
// app.get('/event/:id', eventCtrl.show);

server.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});

module.exports = server;
