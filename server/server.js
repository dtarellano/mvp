const express = require('express');
const bodyparser = require('body-parser');
const getMemes = require('./GetMemes.js');
const mongod = require('../database/mongod.js')

let app = express();

app.use(bodyparser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/memes', function(req, res) {
  console.log('successfuly responded to POST');
  getMemes.get(req.body.query)
});

app.get('/memes', function(req, res) {
  console.log('successfuly responded to GET')
  mongod.get().then(response => {
    res.send(response);
  });
});

let port = 1337;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
