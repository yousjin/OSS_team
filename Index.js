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

rtm.on('message', (message) => {
  const { channel } = message;
  const { text } = message;

  if (text === 'hello') { rtm.sendMessage('hi', channel); } else { rtm.sendMessage('what?', channel); }
});
