var Twitter = require('twitter');
require('dotenv').config({silent: true});

var client = new Twitter({
  consumer_key: process.env.tw_consumer_key,
  consumer_secret: process.env.tw_consumer_secret,
  access_token_key: process.env.tw_token,
  access_token_secret: process.env.tw_token_secret
});

var fs = require('fs');
var index;
var currentWord;

fs.readFile('index.txt', 'utf8', function(err, data){
  index = +data.trim();

  fs.readFile('words.txt', 'utf8', function(err, data){
    currentWord = data.split("\n")[index];
    client.post('statuses/update', {status: "Steampunk " + currentWord.toLowerCase()}, function(error, tweet, response){
      if(!error){
        fs.writeFile('index.txt', index+1, 'utf8', function(err){
          if(err) throw err;
        });
      } else {
        console.log(error);
      }
    });
  });
});

