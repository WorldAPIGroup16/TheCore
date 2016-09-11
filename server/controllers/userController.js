var request = require('request');
var scoreHelpers = require('./scoreHelpers');

module.exports = {
  register: function(req, res){
    res.send('got post for user/register');
  },

  getUser: function(req, res){
    console.log('got request for');
    res.send(`got get request for user/${req.params.username}`);
  },

  getScore: function(req, res){
    scoreHelpers.twitter().then(tweets => {
      res.status(200).send(tweets);
    })
  }
};