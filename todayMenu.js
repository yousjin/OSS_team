/* eslint-disable no-restricted-syntax */
/* eslint-disable global-require */

const todayMenu = function (rtm, channel) {
  const axios = require('axios');
  const cheerio = require('cheerio');

  async function webScraping(url, selector) {
    const res = [];
    let html;
    let $;
    try {
      html = await axios.get(url);
      $ = cheerio.load(html.data);
      for (const v of $(selector).find('li')) {
        if ($(v).text() !== '') {
          res.push($(v).text());
        }
      }
    } catch (error) {
      console.error(error);
    }

    return res;
  }

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

    const url = 'https://sobi.chonbuk.ac.kr/menu/week_menu.php';
    const selector = `#contents > div.contentsArea.WeekMenu > div:nth-child(245) > div:nth-child(2) > table > tbody > tr:nth-child(1) > td:nth-child(${daynum})`;

    webScraping(url, selector).then((res) => {
      for (let i = 0; i < res.length; i += 1) {
        rtm.sendMessage(res[i], channel);
      }
    });
  }
};

module.exports = todayMenu;
