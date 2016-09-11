var api = {};
var db = require('./../../util/dbController.js');
var request = require('request');

api.updateScore = function(user){
  return new Promise((resolve, reject)=>{
    // private function getEbayScore.then((score)=>{
    //  
          //db.set(score);
          //resolve(score) for good measure
    // 
    // });
  });
};

api.getScore = function(user){
  return new Promise((resolve, reject)=>{
    //db.getScore.then
    //resolve(gottenScore);
  });
};

//private function
function getRedditKarma(username){
  return new Promise((resolve, reject)=>{
    var options = {
      url: `http://www.reddit.com/user/${username}/about.json`,
      method: 'GET'
    };
    request(options, (err, response, body)=>{
      resolve(body.data.link_karma);
    });
  });
}

function getRedditNumPosts(username){
  return new Promise((resolve, reject) => {
    var options = {
      url: `http://www.reddit.com/user/${username}/submitted.json`,
      method: 'GET'
    };
    request(options, (err, response, body) => {
      resolve(body.data.link_karma);
    });
  });
}


module.exports =  api;