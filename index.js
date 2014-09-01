'use strict';

var config = require('./config');
var FB = require('fb');

var fbDiary = function(cb){
  FB.api('oauth/access_token', {
    client_id: config.client_id,
    client_secret: config.client_secret,
    grant_type: 'client_credentials'
  }, function (res) {
    if(!res || res.error) {
      cb(!res ? 'error occurred' : res.error);
      return;
    }

    var accessToken = res.access_token;

    console.log(accessToken);
  });
};


module.exports = fbDiary;

fbDiary();
