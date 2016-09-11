var api = {};
var db = require('./../../util/dbController.js');
var request = require('request');

api.updateScore = function(user){
  return new Promise((resolve, reject)=>{
    getRedditKarma(user).then((karma)=>{
      getRedditNumPosts(user).then((numPosts)=>{
        resolve(karma / numPosts);
      });
    });
  });
};

api.getScore = function(user){
  return new Promise((resolve, reject)=>{
    db.getScore(user, 'reddit').then((score)=>{
      resolve(score);
    });
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
      resolve(JSON.parse(body).data.link_karma);
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
      resolve(JSON.parse(body).data.children.length);
    });
  });
}


module.exports =  api;