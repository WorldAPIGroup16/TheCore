var Firebase = require('firebase');
var firebaseKey = require('./../../../keyStore.js');
var api = {};

var config = {
  apiKey: firebaseKey,
  authDomain: 'thecore-8664c.firebaseapp.com',
  databaseURL: 'https://thecore-8664c.firebaseio.com',
  storageBucket: 'thecore-8664c.appspot.com',
};
Firebase.initializeApp(config);

const database = Firebase.database();

api.getUserTraitify = function(username){
  return new Promise((resolve, reject)=>{
    database.ref('/Users/' + username + '/traitify').once('value').then((snapshot)=>{
      if (snapshot) {
        resolve(snapshot.val());
        return;
      }
      reject('Invalid snapshot');
    });
  });
};

api.getUser = function(username){
  return new Promise((resolve, reject)=>{
    //logic and resolve over user object
    database.ref('/Users/' + username).once('value').then((snapshot)=>{
      if (snapshot) {
        resolve(snapshot.val());
        return;
      }
      reject('Invalid snapshot');
    });
  });
};

api.getLogin = function(username, field){
  var branch;
  if (field == 'facebook' || field == 'twitter') {
    branch = 'social';
  }
  else {
    branch = 'market';
  }
  //get the "login name" for whatever field, ie user.market.ebay.name or user.social.facebook.name
  //resolve over that name string
  return new Promise((resolve, reject)=>{
    database.ref('/Users/' + username + '/' + branch + '/' + field + '/name').once('value').then((snapshot)=>{
      if (snapshot) {
        resolve(snapshot.val());
      }
      else {
        reject('Invalid snapshot');
      }
    });
  });
};

api.setScore = function(username, field, score){
  var branch;
  if (field == 'facebook' || field == 'twitter'){
    branch = 'social';
  }
  else {
    branch = 'market';
  }
  return new Promise((resolve, reject)=>{
    //for the given user
      //find the "field" (market, facebook, whatever)
        //set the "Score" property to be "score"
          //resolve over (done) or whatever
    database.ref('/Users/' + username + '/' + branch + '/' + field + '/score').set(score);
  });
};

api.getScore = function(username, field){
  var branch;
  if (field == 'facebook' || field == 'twitter') {
    branch = 'social';
  }
  else {
    branch = 'market';
  }
  return new Promise((resolve, reject)=>{
    //for the given user
      //find the "field" 
        //resolve over field.score
    database.ref('/Users/' + username + '/' + branch + '/' + field + '/score').once('value').then((snapshot)=>{
      if (snapshot) {
        resolve(snapshot.val());
        return;
      }
      reject('Invalid snapshot');
    })
  });
};

api.createUser = function(obj){
  // obj: {username: username, password: password, ebay: ebayloginname, facebook: facebookloginname, etc}
  return new Promise((resolve, reject)=>{
    if (obj.username){
      database.ref('/Users/' + obj.username).set(obj)
      resolve(obj.username, 'user created');
    }
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