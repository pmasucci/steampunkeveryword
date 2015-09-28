var Twitter = require('twitter');

require('dotenv').config({silent: true});

var client = new Twitter({
  consumer_key: process.env.tw_consumer_key,
  consumer_secret: process.env.tw_consumer_secret,
  access_token_key: process.env.tw_token,
  access_token_secret: process.env.tw_token_secret
});

//client.post('statuses/update', {status: "It works!"}, function(error, tweet, response){
//  if(!error){
//    console.log(tweet);
//  }
//  console.log(response);
//});
