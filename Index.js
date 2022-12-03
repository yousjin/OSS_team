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

var pattern = /^[a-zA-Z]/; //feature4 영문 확인 시 사용

rtm.on('message', (message) => {
  const { channel } = message;
  const { text } = message;

  if (!isNaN(text)) {
    square(rtm, text, channel);
  } else {
    const str = text.toString(text);
    if (pattern.test(str)) {
      searchPlace(rtm, channel, str);
    } else {
      switch (text) {
        case 'hi':
          greeting(rtm, channel);
          break;
        case '오늘 밥 뭐야':
          todayMenu(rtm, channel);
          break;
        default:
          rtm.sendMessage('i m alive', channel);
      }
    }
  }
});
