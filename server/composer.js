var externals = {};
externals.reddit = require('./controllers/market/controllers/redditController.js');
externals.market = require('./controllers/market/marketController.js');
externals.social = require('./controllers/social/socialController.js');
externals.twitter = require('./controllers/social/controllers/twitterController.js');
var db = require('./controllers/util/dbController.js');


function update(username, field){
  return new Promise(resolve, reject){
    db.getLogin(username, field).then((login)=>{
      externals[field].updateScore(login);
    });
  }
}

