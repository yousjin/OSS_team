/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  // eslint-disable-next-line no-empty
  while (Date.now() < wakeUpTime) {}
}

require('dotenv').config();

const { RTMClient } = require('@slack/rtm-api');

const fs = require('fs');

let status = 0;

let token;

try {
  token = fs.readFileSync('TestBot.token').toString('utf-8');
} catch (err) {
  console.error(err);
}

token = token.trim();
const TestChannel = 'C04AVF9G6HF';
const TestUID = 'U047H43U7HR';

console.log(token);

const rtm = new RTMClient(token);

rtm.start();

rtm.on('ready', async () => {
  // const rdy1 = await rtm.sendMessage('테스트를 시작합니다.', TestChannel);
  console.log('테스트 루틴 시작되었습니다.');

  const rdy2 = await rtm.sendMessage('안녕', TestChannel);
  status += 1;
});

rtm.on('message', (message) => {
  const { text } = message;

  if (message.user === TestUID) {
    switch (status) {
      case 1:
        console.log('받은 메세지 : ', text);
        if (text === '안녕하세요!' || text === '좋은 하루입니다!' || text === '반가워요!') {
          console.log('인사 테스트 성공');
          status += 1;
        } else {
          console.log('인사 테스트 실패');
          process.exit(1);
        }
        console.log("학과 사무실 위치 테스트 시작");
        rtm.sendMessage("학과 안내", TestChannel);
        break;
      case 2:
        console.log('받은 메세지 :', text);
        rtm.sendMessage("Accounting", TestChannel);
        status += 1;
        break;
      case 3:
        console.log('받은 메세지 : ', text);
        if (text === ' College of Commerce 2, 9999') {
          console.log("학과 사무실 위치 테스트 성공");
        } else {
          console.log("학과 사무실 위치 테스트 실패");
          process.exit(1);
        }
        rtm.sendMessage("학사일정", TestChannel);
        console.log("학사일정 테스트 시작");
        status += 1;
        break;
      case 4:
        rtm.sendMessage("8/4", TestChannel);
        status += 1;
        break;
      case 5:
        console.log('받은 메세지 : ', text);
        if (text === '2학기 수강신청\n') {
          console.log("학사일정 테스트 성공");
        } else {
          console.log("학사일정 테스트 실패");
          process.exit(1);
        }
        rtm.sendMessage("오늘 밥 뭐야", TestChannel);
        status += 1;
        break;
      case 6:
        console.log('받은 메세지 : ', text);
        if (text !== []) {
          console.log("식단출력 테스트 성공");
        } else {
          console.log("식단출력 테스트 실패");
          process.exit(1);
        }
        sleep(3000);
        rtm.sendMessage("이번주 뭐 나와", TestChannel);
        status += 1;
        break;
      case 11:
        console.log('받은 메세지 : ', text);
        if (text === '월 : ★☆☆' || text === "월 : ★★☆" || text === '월 : ★★★') {
          console.log("주간 메뉴 평가 테스트 성공");
        } else {
          console.log('주간 메뉴 평가 테스트 실패');
          process.exit(1);
        }
        status += 1;
        break;
      default:
        status += 1;
        break;
    }
  } else {
    rtm.sendMessage("현재 테스트 중입니다...", TestChannel);
  }

  if (status === 12) {
    process.exit(0);
  }
});
