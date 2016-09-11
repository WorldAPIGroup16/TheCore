var request = require('request');
var api = require('../keyStore.js');
var graph = require('fbgraph');

/* Helper Requests go here */
module.exports = {

  getFacebookPosts: function(user, res){
    console.log('Inside getFacebookPosts');

    graph.setAccessToken(184780581946920);

    // get authorization url 
    var authUrl = graph.getOauthUrl({
        "client_id":     api.key
      , "redirect_uri":  api.redirect_uri
    });
 
    // shows dialog 
    //res.redirect(authUrl);
 
    // after user click, auth `code` will be set 
    // we'll send that and get the access token 
    graph.authorize({
        "client_id":      api.key
      , "redirect_uri":   api.redirect_uri
      , "client_secret":  api.secret
    }, function (err, facebookRes) {
      res.redirect('/loggedIn');
    });

    var options = {
        timeout:  3000
      , pool:     { maxSockets:  Infinity }
      , headers:  { connection:  "keep-alive" }
    };
     
    graph
      .setOptions(options)
      .get("zuck", function(err, res) {
        console.log(res); // { id: '4', name: 'Mark Zuckerberg'... } 

        // res.send('End Response');
    });

    res.send('End Response');

    // request('https://graph.facebook.com/alex.paczynski.3?access_token=184780581946920', function(error, response, body){
    //   if(error){
    //     console.log('Error: ', error);
    //   }
    //   console.log('Reponse! ', body);

    //   res.send('End Response');
    // });

    // FB.setAccessToken('184780581946920');
     
    // var body = 'My first post using facebook-node-sdk';

    // FB.api('me/feed', 'post', { message: body }, function (res) {
    //   if(!res || res.error) {
    //     console.log(!res ? 'error occurred' : res.error);
    //     return;
    //   }
    //   console.log('Post Id: ' + res.id);
    // });


    // FB.api('4', function (res) {
    //   if(!res || res.error) {
    //    console.log(!res ? 'error occurred' : res.error);
    //    return;
    //   }
    //   console.log('res.id: ', res.id);
    //   console.log('res.name: ', res.name);
    // });

  }

};