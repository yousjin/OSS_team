/* eslint-disable no-restricted-globals */
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
const schedule = require('./schedule');

var Ishaksa = 0;

rtm.on('message', (message) => {
  const { channel } = message;
  const { text } = message;

  if (Ishaksa==1){
    schedule(rtm, text, channel);
    Ishaksa=0;
    return;
  }

  if (!isNaN(text)) {
    square(rtm, text, channel);
  } else {
    switch (text) {
      case 'hi':
        greeting(rtm, channel);
        break;
      case '학사일정':
        Ishaksa = 1;
        rtm.sendMessage('안내 받을 날짜를 입력해주세요.', channel);
        break;
      default:
        rtm.sendMessage('i m alive', channel);
    }
  }
});
