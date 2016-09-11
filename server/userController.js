var request = require('request');
var score = require('./scoreHelpers.js');

module.exports = {
  register: function(req, res){
    res.send('got post for user/register');
  },

  getUser: function(req, res){
    console.log('got request for');
    res.send(`got get request for user/${req.params.username}`);
  },

  getScore: function(req, res){
    console.log('hello, this is the getScore method :)');
    score.getFacebookPosts('', res);

    //res.send('got get request for users score');
  }

};