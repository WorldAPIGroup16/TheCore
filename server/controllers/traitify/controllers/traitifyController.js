var api = {};
var traitify = require('traitify');
traitify.setHost("lvh.me");
traitify.setVersion("v1");
traitify.setSecretKey("dnpjjh0nd7ddqnm7oash2tp37v");
var deckId = "career-deck";
var assessmentId = "2a3716f6-d88f-495a-a261-c913a8fcabb9";

api.updateScore = function(user){
  return new Promise((resolve, reject)=>{
    //actually it'll probably be db.getLogin.then(loginname).then that stuff below
    // facebook.getScore.then((score)=>{
    //   //
    // });
    //chain off facebook  and twitter and then 
    //resolve(finalScore);
  });
};

  api.getScore = function(user){
    return new Promise((resolve, reject)=>{
      //db.getSocialScore.then
      //resolve(gottenScore);
    });

  api.doTraitify = function(userId){
    traitify.getSlides(assessmentId, function(assessment){
    //     // Use assessment here.
    //     console.log(assessment);
    });
  }
};

module.exports =  api;