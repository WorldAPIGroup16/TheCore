var haven = require('./../../util/havenController.js');
var Twitter = require('twitter');
var keys = require('./../../../../keyStore.js');
// var db = require('')
var api = {};

api.updateScore = function(user){
  return new Promise((resolve, reject)=>{
    getTwitterPosts().then((tweets) => {
      haven.analyseSentiment(tweets).then((sentiment)=>{
        resolve(sentiment);
        // db.set(sentiment);
      })
    })
  });
};

api.getScore = function(user){
  return new Promise((resolve, reject)=>{
    //db.getScore.then
    //resolve(gottenScore);
  });
};

//private function
function getTwitterPosts(username){
  var client = new Twitter({
    consumer_key: keys.twitter.consumer_key,
    consumer_secret: keys.twitter.consumer_secret,
    access_token_key: keys.twitter.access_token_key,
    access_token_secret: keys.twitter.access_token_secret
  });
  
  //TODO: replace hard-coded username with user-input
  var params = {
    screen_name: 'legendxry7',
    count: 200
  };

  return new Promise(function(resolve, reject) {
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (error) {
        reject(error);
      }

      var concatenatedTweets = '';

      tweets.forEach(function(tweetObj, key) {
        concatenatedTweets += tweetObj.text + ' ';
      });

      resolve(concatenatedTweets);
    });
  });
}


module.exports =  api;