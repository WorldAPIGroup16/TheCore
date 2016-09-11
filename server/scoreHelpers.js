/* Helper Requests go here */
var Twitter = require('twitter');
var Promise = require('bluebird');
var keys = require('../keyStore.js');

module.exports = {
  twitter: function() {
    var client = new Twitter({
      consumer_key: keys.twitter.consumer_key,
      consumer_secret: keys.twitter.consumer_secret,
      access_token_key: keys.twitter.access_token_key,
      access_token_secret: keys.twitter.access_token_secret
    });
     
    var params = {
      screen_name: 'legendxry7',
      count: 200
    };

    return new Promise(function(resolve, reject) {
      client.get('statuses/user_timeline', params, function(error, tweets, response) {
        var concatenatedTweets = '';
        var justTweets = [];

        if (error) {
          console.log(error);
          return 'error';
        } 

        tweets.forEach(function(tweetObj, key) {
          concatenatedTweets += tweetObj.text;
          justTweets.push(tweetObj.text);
        });

        resolve(justTweets);
      });
    });
  }
};