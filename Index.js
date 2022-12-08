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
const searchPlace = require('./searchPlace');
const todayMenu = require('./todayMenu');
const weeklyMenu = require('./weeklyMenu');

let Ishaksa = 0;
let randomNum = 0;
let randomNumFloor = 0;

let IsSearch = 0;
const pattern = /^[a-zA-Z]/; // feature4 영문 확인 시 사용

rtm.on('message', (message) => {
  const { channel } = message;
  const { text } = message;

  if (Ishaksa === 1) {
    schedule(rtm, text, channel);
    Ishaksa = 0;
    return;
  }

  if (!Number.isNaN((Number(text)))) {
    square(rtm, text, channel);
  } else {
    const str = text.toString(text);
    if (IsSearch === 1) {
      if (!(pattern.test(str))) {
        rtm.sendMessage('i m alive', channel);
        IsSearch = 0;
        return;
      }
      searchPlace(rtm, channel, str);
      IsSearch = 0;
    } else {
      switch (text) {
        case '안녕':
          randomNum = Math.random() * 3;
          randomNumFloor = Math.floor(randomNum);
          greeting(rtm, channel, randomNumFloor);
          break;
        case '오늘 밥 뭐야':
          todayMenu(rtm, channel);
          break;
        case '이번주 뭐 나와':
          weeklyMenu(rtm, channel);
          break;
        case '학사일정':
          Ishaksa = 1;
          rtm.sendMessage('안내 받을 날짜를 입력해주세요.', channel);
          break;
        case '학과 안내':
          IsSearch = 1;
          rtm.sendMessage('안내 받을 학과를 입력해주세요.', channel);
          break;
        default:
          rtm.sendMessage('i m alive', channel);
      }
    }
  }
});
