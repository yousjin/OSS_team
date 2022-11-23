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

let Ishaksa = 0;
let randomNum = 0;
let randomNumFloor = 0;

const DeptEng = 'Architectural Engineering,Mechanical Engineering,Urban Engineering,Electronic Engineering,Computer Science and Engineering,Chemical Engineering,Accounting,International Trade,Korean Language and Literature,Library and Information Science';
const DeptEngArr = DeptEng.toString().split(',');

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
    const num = DeptEngArr.indexOf(str);
    if (num !== -1 || str.charAt(str.length - 1) === '부') {
      searchPlace(rtm, channel, str, num);
    } else {
      switch (text) {
        case '안녕':
          randomNum = Math.random() * 3;
          randomNumFloor = Math.floor(randomNum);
          greeting(rtm, channel, randomNumFloor);
          break;
        case '학사일정':
          Ishaksa = 1;
          rtm.sendMessage('안내 받을 날짜를 입력해주세요.', channel);
          break;
        default:
          rtm.sendMessage('i m alive', channel);
      }
    }
  }
});
