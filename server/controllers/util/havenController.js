var request = require('request');
var key = require('../../../keyStore.js').haven.key;

var api = {};

api.analyseSentiment = function(str){
  return new Promise((resolve, reject)=>{
    var options = {
      method: 'GET',
      url: `https://api.havenondemand.com/1/api/sync/analyzesentiment/v1?apikey=${key}&text=${str}`
    };

    request(options, (error, response, body)=>{
      if(error){
        reject(error);
      }
      resolve(body);
    });

  });
};

module.exports = api;