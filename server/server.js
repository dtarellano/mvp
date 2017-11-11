const express = require('express');
const bodyparser = require('body-parser');

let app = express();

app.use(bodyparser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/memes', function(req, res) {
  console.log('successfuly responded to POST');
});

app.get('/memes', function(req, res) {
  console.log('successfuly responded to GET')
});

let port = 1337;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
