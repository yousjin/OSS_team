/* eslint-disable no-await-in-loop */
const rating = require('./rating');
const getMenu = require('./getMenu');

const weeklyMenu = function (rtm, channel) {
  const dayList = {};
  dayList[1] = '월';
  dayList[2] = '화';
  dayList[3] = '수';
  dayList[4] = '목';
  dayList[5] = '금';

  const dayRating = {};

  async function asyncForEach(callback) {
    for (let i = 1; i < 6; i += 1) {
      const res = await callback(i);
      dayRating[i] = rating(res, rtm, channel);
      rtm.sendMessage(`${dayList[i]} : ${dayRating[i]}`, channel);
    }
  }

  asyncForEach(getMenu);
};

module.exports = weeklyMenu;
