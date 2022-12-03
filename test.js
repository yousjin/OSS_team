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

describe('searchPlace 함수 테스트', () => {
    it('장소 반환', () => {
      assert.equal(searchPlace(rtm, channel, 'architect ural En  gineering'), ' College of Engineering Building 1, 132');
      assert.equal(searchPlace(rtm, channel, 'mec hanical enginee ring'), ' College of Engineering Building 4, 212');
      assert.equal(searchPlace(rtm, channel, 'URBANENGINEERING'), ' College of Engineering Building 9, 917');
      assert.equal(searchPlace(rtm, channel, 'ElectronicEngineering'), ' College of Engineering Building 7, 224');
      assert.equal(searchPlace(rtm, channel, 'Computer Science and Engineering'), ' College of Engineering Building 7, 224');
    });
});