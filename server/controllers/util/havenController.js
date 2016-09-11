var havenondemand = require('havenondemand')
var key = require('../../../keyStore.js').haven.key;
var client = new havenondemand.HODClient(key)
var api = {};
api.analyseSentiment = function(str) {
  return new Promise((resolve, reject)=>{
    var data = {text: str};
    client.post('analyzesentiment', data, function(err, resp, body) {
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    });
  });
};



module.exports = api;