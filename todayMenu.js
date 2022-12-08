const rating = require('./rating');
const getMenu = require('./getMenu');

const todayMenu = function (rtm, channel) {
  const dayDict = {};
  dayDict[1] = 3;
  dayDict[2] = 4;
  dayDict[3] = 5;
  dayDict[4] = 6;
  dayDict[5] = 7;

  const today = new Date();
  const day = today.getDay();
  // const day = 3; // => 수요일

  if (day === 0 || day === 6) {
    rtm.sendMessage('오늘은 주말입니다.', channel);
  } else {
    const daynum = dayDict[day];
    getMenu(daynum).then((res) => {
      for (let i = 0; i < res.length; i += 1) {
        rtm.sendMessage(res[i], channel);
      }
      const rate = rating(res, rtm, channel);
      rtm.sendMessage(rate, channel);
    });
  }
  return 'success';
};

module.exports = todayMenu;
