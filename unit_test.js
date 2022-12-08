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
const rating = require('./rating');
const getMenu = require('./getMenu');
const todayMenu = require('./todayMenu');
const weeklyMenu = require('./weeklyMenu');

let menu = [];
let rate = '';

describe('테스트 시작', () => {
  describe('greeting 함수 테스트', () => {
    it('인삿말 반환', () => {
      console.log('첫번째 패턴');
      assert.equal(greeting(rtm, channel, 0), '안녕하세요!');
      console.log('두번째 패턴');
      assert.equal(greeting(rtm, channel, 1), '좋은 하루입니다!');
      console.log('세번째 패턴');
      assert.equal(greeting(rtm, channel, 2), '반가워요!');
    });
  });

  describe('searchPlace 함수 테스트', () => {
    it('장소 반환', () => {
      console.log('올바른 입력');
      assert.equal(searchPlace(rtm, channel, 'Architectural Engineering', -1), ' College of Engineering Building 1, 132');
      console.log('4글자 이하로 틀린 입력');
      assert.equal(searchPlace(rtm, channel, 'Acouting', -1), 'Accounting 를 원하셨나요? 해당 위치는 College of Commerce 2, 9999 입니다.');
      console.log('대소문자 띄어쓰기 바꿔 입력');
      assert.equal(searchPlace(rtm, channel, 'ArchitecturalenGinEEring', -1), ' College of Engineering Building 1, 132');
    });
  });

  describe('schedule 함수 테스트', () => {
    it('일정 반환', () => {
      console.log('올바른 입력');
      assert.equal(schedule(rtm, '8/4', channel), '2학기 수강신청\r');
      console.log('정보가 없는 날짜');
      assert.equal(schedule(rtm, '8/5', channel), '해당 날짜에 대한 일정이 없습니다');
      console.log('잘못된 입력');
      assert.equal(schedule(rtm, 'a', channel), '날짜 양식에 맞게 입력해주세요. (ex.9/1)');
    });
  });

  describe('getMenu 함수 테스트', () => {
    it('메뉴 반환', () => {
      console.log('메뉴 반환 확인');
      menu = getMenu(rtm, channel);
      assert.ok(getMenu(rtm, channel) !== null);
    });
  });

  describe('rating 함수 테스트', () => {
    it('평가 반환', () => {
      console.log('평가 표시');
      rate = rating(menu);
      assert.ok(rating(menu), rate);
    });
  });

  describe('todayMenu 함수 테스트', () => {
    it('메뉴 반환', () => {
      console.log('식단 표시');
      assert.ok(todayMenu(rtm, channel), '오늘의 메뉴' || todayMenu(rtm, channel), '오늘은 주말입니다.');
    });
  });

  describe('weeklyMenu 함수 테스트', () => {
    it('메뉴,평가 반환', () => {
      console.log('주간 평가 표시');
      assert.equal(weeklyMenu(rtm, channel), 'success');
    });
  });
});
