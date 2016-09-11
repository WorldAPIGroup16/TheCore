var request = require('request');

var api = {};

api.analyseSentiment = function(str, cb){
  var key = PROCESS.ENV.haven;
  var options = {
    method: 'GET',
    url: `	https://api.havenondemand.com/1/api/sync/analyzesentiment/v1?apikey=${key}&text=${str}`
  };

  request(options, (error, response, body)=>{
    if(error){

    }
    cb(body);
  });
};