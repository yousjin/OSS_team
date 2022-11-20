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

const greeting = require('./greeting');
const square = require('./square');
const searchPlace = require('./searchPlace');

rtm.on('message', (message) => {
  const { channel } = message;
  const { text } = message;

  if (!isNaN(text)) {
    square(rtm, text, channel);
  } else {
    var str = text.toString(text);
    if (str.charAt(str.length-1) == '부') {
      searchPlace(rtm, channel, str);
    }
    else {
      switch (text) {
        case 'hi':
          greeting(rtm, channel);
          break;
        default:
          rtm.sendMessage('i m alive', channel);
      }
    }
  }
});