var request = require('request');

module.exports = {
  register: function(req, res){
    res.send('got post for user/register');
  },

  getUser: function(req, res){
    console.log('got request for');
    res.send(`got get request for user/${req.params.username}`);
  },

  getScore: function(req, res){
    res.send('got get request for users score');
  }
  
  
};