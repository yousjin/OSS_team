const greeting = function (rtm, channel) {
  console.log('인사를 합니다.');

  const randomNum = Math.random() * 3;
  const randomNumFloor = Math.floor(randomNum);

  switch (randomNumFloor) {
    case 0:
      rtm.sendMessage('안녕하세요!', channel);
      return 'success';
    case 1:
      rtm.sendMessage('좋은 하루입니다!', channel);
      return 'success';
    case 2:
      rtm.sendMessage('반가워요!', channel);
      return 'success';
    default:
      return 'fail';
  }
};

module.exports = greeting;
