var path = require('path');


module.exports = function(app, express) {
  
  app.post('/user/register', userController.register);
  app.get('/user/:username', userController.getUser);

};