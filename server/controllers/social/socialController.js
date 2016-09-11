var api = {};

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
};

module.exports =  api;