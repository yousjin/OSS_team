require('dotenv').config();

const { RTMClient } = require('@slack/rtm-api');

const fs = require('fs');

const channel = 'D0486SZSPFS';

let token;

try {
  token = fs.readFileSync('SlackBot.token').toString('utf-8');
} catch (err) {
  console.error(err);
}

console.log(token);

const rtm = new RTMClient(token);

(async () => {
  await rtm.start().catch(console.error);
})();

const assert = require('assert');
const greeting = require('./greeting');

describe('테스트 시작', () => {
  it('greeting 함수 테스트', (done) => {
    assert.equal(greeting(rtm, channel), 'success');
    assert.equal(greeting(rtm, channel), 'success');
    assert.equal(greeting(rtm, channel), 'success');
    assert.equal(greeting(rtm, channel), 'success');
    assert.equal(greeting(rtm, channel), 'success');
    done();
  });
});
