const greeting = function (rtm, channel, GreetingRandom) {
  console.log('인사를 합니다.');

  switch (GreetingRandom) {
    case 0:
      rtm.sendMessage('안녕하세요!', channel);
      return '안녕하세요!';
    case 1:
      rtm.sendMessage('좋은 하루입니다!', channel);
      return '좋은 하루입니다!';
    case 2:
      rtm.sendMessage('반가워요!', channel);
      return '반가워요!';
    default:
      return 'fail';
  }
};

module.exports = greeting;
