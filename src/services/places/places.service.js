// Initializes the `places` service on path `/places`
const createService = require('./places.class.js');
const hooks = require('./places.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    name: 'places',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/places', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('places');

  service.hooks(hooks);
};
