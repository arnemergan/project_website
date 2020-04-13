const express = require('express');
const path = require('path');
const app = express();

// Serve static files....
app.use(express.static(__dirname + '/dist/project'));

// Send all requests to index.html
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/project/src/index.html'));
});
app.get('/home', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/project/src/index.html'));
});
app.get('/statistics', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/project/src/index.html'));
});
app.get('/dashboard', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/project/src/index.html'));
});
app.get('/callback', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/project/src/index.html'));
});
app.get('/signup', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/project/src/index.html'));
});
app.get('/invoice', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/project/src/index.html'));
});


// default Heroku PORT
app.listen(process.env.PORT || 3000);