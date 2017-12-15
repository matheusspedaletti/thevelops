'use strict';
module.exports = function(app) {
  var database = require('../controllers/Controller');

  // database Routes
  app.route('/users')
    .get(database.list_all_users)
    .post(database.create_a_user);

  app.route('/users/:id')
    .get(database.read_a_user)
    .put(database.update_a_user)
    .delete(database.delete_a_user);
};