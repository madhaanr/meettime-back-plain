'use strict';
const meetingRoutes = require('./meeting');
const reservationRoutes = require('./reservation');

module.exports = function (app, db) {
  meetingRoutes(app, db);
  reservationRoutes(app, db);
};