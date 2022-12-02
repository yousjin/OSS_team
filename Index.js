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
const todayMenu = require('./todayMenu');

const DeptEng = 'Architectural Engineering,Mechanical Engineering,Urban Engineering,Electronic Engineering,Computer Science and Engineering,Chemical Engineering,Accounting,International Trade,Korean Language and Literature,Library and Information Science';
const DeptEngArr = DeptEng.toString().split(',');

rtm.on('message', (message) => {
  const { channel } = message;
  const { text } = message;

  if (!isNaN(text)) {
    square(rtm, text, channel);
  } else {
    var str = text.toString(text);
    var num = DeptEngArr.indexOf(str);
    if (num != -1 || str.charAt(str.length-1) == '부') {
      searchPlace(rtm, channel, str, num);
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
