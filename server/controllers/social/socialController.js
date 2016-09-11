var api = {};
var twitter = require('./controllers/twitterController.js');

api.updateScore = function(user){
  return new Promise((resolve, reject)=>{
   twitter.getScore(user).then((score)=>{
     resolve(score);
   });
  });
};

api.getScore = function(user){
  return new Promise((resolve, reject)=>{
    //db.getSocialScore.then
    //resolve(gottenScore);
  });
};

module.exports =  api;