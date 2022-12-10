const rating = require('./rating');
const getMenu = require('./getMenu');

const todayMenu = function (rtm, channel) {
  const today = new Date();
  const day = today.getDay();
  // const day = 3; // => 수요일

  if (day === 0 || day === 6) {
    rtm.sendMessage('오늘은 주말입니다.', channel);
  } else {
    getMenu(day).then((res) => {
      for (let i = 0; i < res.length; i += 1) {
        rtm.sendMessage(res[i], channel);
      }
      const rate = rating(res, rtm, channel);
      rtm.sendMessage(rate, channel);
    });
  }
};

module.exports = todayMenu;
