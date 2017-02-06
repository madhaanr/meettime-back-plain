'use strict';

//add, edit, remove and list meeting time reservations
//First id is meeting id and second person id

module.exports = function (app, db) {
  app.get('/:id/list', function (req, res) {
    res.send('hello');
  });

  app.post('/:id/addReservation', function (req, res) {

  });

  app.delete('/:id/removeReservation/:id', function (req, res) {

  });

  app.put('/:id/editReservation/:id', function (req, res) {

  });
};
