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
const schedule = require('./schedule');
const searchPlace = require('./searchPlace');

describe('테스트 시작', () => {
  describe('greeting 함수 테스트', () => {
    it('인삿말 반환', () => {
      assert.equal(greeting(rtm, channel, 0), '안녕하세요!');
      assert.equal(greeting(rtm, channel, 1), '좋은 하루입니다!');
      assert.equal(greeting(rtm, channel, 2), '반가워요!');
    });
  });

  describe('searchPlace 함수 테스트', () => {
    it('장소 반환', () => {
      assert.equal(searchPlace(rtm, channel, '건축공학부', -1), ' College of Engineering Building 1, 132');
      assert.equal(searchPlace(rtm, channel, '기계공학부', -1), ' College of Engineering Building 4, 212');
      assert.equal(searchPlace(rtm, channel, '도시공학부', -1), ' College of Engineering Building 9, 917');
      assert.equal(searchPlace(rtm, channel, '전자공학부', -1), ' College of Engineering Building 7, 224');
      assert.equal(searchPlace(rtm, channel, '컴퓨터공학부', -1), ' College of Engineering Building 7, 224');
    });
  });

  describe('schedule 함수 테스트', () => {
    it('일정 반환', () => {
      assert.equal(schedule(rtm, '8/4', channel), '2학기 수강신청\r');
      assert.equal(schedule(rtm, '8/22', channel), '후기 학위수여식\r');
      assert.equal(schedule(rtm, '10/15', channel), '개교기념일\r');
      assert.equal(schedule(rtm, '12/21', channel), '종강\r');
      assert.equal(schedule(rtm, '8/4', channel), '2학기 수강신청\r');
      assert.equal(schedule(rtm, '8/5', channel), '해당 날짜에 대한 일정이 없습니다');
      assert.equal(schedule(rtm, 'a', channel), '날짜 양식에 맞게 입력해주세요. (ex.9/1)');
    });
  });
});
