const places = require('./places/places.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(places);
};
