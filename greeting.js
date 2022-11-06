const greeting = function (rtm, channel) {
  console.log('인사를 합니다.');
  rtm.sendMessage('hello!', channel);
};

module.exports = greeting;
