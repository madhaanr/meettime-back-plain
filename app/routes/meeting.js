'use strict';
let ObjectID = require('mongodb').ObjectID;

//add, edit, remove meetings.
module.exports = function (app, db) {
  app.post('/meeting', function (req, res) {
    const meeting = {
      'name': req.body.name,
      'meetingTimes': req.body.meetingTimes,
    };
    db.collection('meetings').insert(meeting, function (err, result) {
      if (err) {
        res.send({ 'error': 'Adding meeting' + req.body.name + 'failed' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  app.get('/meeting/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('meetings').findOne(details, (err, item) => {
      if (err) {
        res.send({ 'error': 'An error while getting meeting' });
      } else {
        res.send(item);
      }
    });
  });

  app.delete('/meeting/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('meetings').remove(details, (err, item) => {
      if (err) {
        res.send({ 'error': 'An error while deleting meeting' });
      } else {
        res.send('Meeting ' + id + ' deleted!');
      }
    });
  });

  app.put('/meeting/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const meeting = { 'name': req.body.name, 'meetingTimes': req.body.meetingTimes };
    db.collection('meetings').update(details, meeting, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error while updating meeting' });
      } else {
        res.send(meeting);
      }
    });
  });
  /*app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  /// error handler
  // will print stacktrace
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.sendFile('error.html', {
      root: __dirname + '/views',
      message: err.message,
      error: err
    });
    console.log(err);
  });*/
};


