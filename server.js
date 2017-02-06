'use strict';
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const app = express();
const port = 3005;

app.use(bodyParser.urlencoded({ 'extended': true }));

MongoClient.connect(db.url, function (err, database) {
  if (err) return console.log(err);
  require('./app/routes')(app, database);

  app.listen(port, function () {
    console.log('App listening on port: ' + port);
  });
});