var path = require('path');
var userController = require('./controllers/userController.js');

module.exports = function(app, express) {
  app.post('/user/register', userController.register);
  app.get('/user/:username', userController.getUser);
};