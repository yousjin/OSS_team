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
const searchPlace = require('./searchPlace');

describe('searchPlace 함수 테스트', () => {
    it('장소 반환', () => {
      assert.equal(searchPlace(rtm, channel, 'architect ural En  gineering'), '  College of Engineering Building 1, 132');
      assert.equal(searchPlace(rtm, channel, 'Mechanical Engineeri'), 'Mechanical Engineering 를 원하셨나요? 해당 위치는  College of Engineering Building 4, 212 입니다.');
      assert.equal(searchPlace(rtm, channel, 'URBANENGINEERING'), ' College of Engineering Building 9, 917');
      assert.equal(searchPlace(rtm, channel, 'Elec  tronicEn gin eerin g'), ' College of Engineering Building 7, 224');
      assert.equal(searchPlace(rtm, channel, 'Computer Science and Engineering'), ' College of Engineering Building 7, 224');
    });
});
