var path = require('path');
var userController = require('./userController');

module.exports = function(app, express) {
  app.post('/user/register', userController.register);
  app.get('/user/:username', userController.getUser);
};