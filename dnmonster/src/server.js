"use strict";

var express = require('express');
var monster = require('./monsterid.js');

var DEFAULT_SIZE = 20;

const app = express();

function respond(req, res) {

  var width = DEFAULT_SIZE;
  var height = DEFAULT_SIZE;

  if (req.query.size) {
      width = req.query.size;
      height = req.query.size;
  }
  if (req.query.width) {
      width = req.query.width;
  }
  if (req.query.height) {
      height = req.query.height;
  }

  console.log('Building avatar size %s by %s', width, height);
  var img = monster.getAvatar(req.params.name, width, height);
  res.setHeader('Content-Type', 'image/png');
  res.send(img);
}

app.get('/monster/:name', respond)
const port = 8080;

app.listen(port, () => {
    console.log('Server running on port %s', port);
});
