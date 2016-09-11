var api = {};


api.getUser = function(username){
  return new Promise((resolve, reject)=>{
    //logic and resolve over user object
  });
};

api.setScore = function(username, field, score){
  return new Promise((resolve, reject)=>{
    //for the given user
      //find the "field" (market, facebook, whatever)
        //set the "Score" property to be "score"
          //resolve over (done) or whatever
  });
};

api.getScore = function(username, field){
  return new Promise((resolve, reject)=>{
    //for the given user
      //find the "field" 
        //resolve over field.score
  });
};

api.createUser = function(obj){
  // obj: {username: username, password: password, ebay: ebayloginname, facebook: facebookloginname, etc}
  return new Promise((resolve, reject)=>{
    //do the thing and create the obj like
    // {
    //   username:
    //   password:
    //   score:
    //   market:{
    //     score:
    //     ebay:{
    //       name:
    //       score:
    //     }
    //     yelp:{
    //       name:
    //       score:
    //     }
    //   }
    //   social:{
    //     score:
    //     facebook;{
    //       name:
    //       score:
    //     }
    //     twitter:{
    //       name:
    //       score:
    //     }
    //   }
    // }
  });
}

module.exports = api;