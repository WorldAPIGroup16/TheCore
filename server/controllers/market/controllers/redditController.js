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
function getRedditScore(username){
  return new Promise((resolve, reject)=>{
    //get the ebay score  and
    //resolve(score);
  });
}


module.exports =  api;