const { RTMClient } = require('@slack/rtm-api');

const fs = require('fs');

let token;

try {
  token = fs.readFileSync('SlackBot.token').toString('utf-8');
} catch (err) {
  console.error(err);
}

console.log(token);

const rtm = new RTMClient(token);
rtm.start();

var greeting = require('./greeting');
var square = require('./square');

rtm.on('message', function (message) {
    var channel = message.channel;
    var text = message.text;

    if (!isNaN(text)){
        square(rtm, text, channel);
    } else {
        switch (text){
            case 'hi' :
                greeting(rtm,channel);
                break;
            default:
                rtm.sendMessage('i m alive', channel);
        }
    }
});
