/* eslint-disable no-restricted-syntax */
/* eslint-disable global-require */
const getMenu = async function (daynum) {
  const axios = require('axios');
  const cheerio = require('cheerio');

  const url = 'https://sobi.chonbuk.ac.kr/menu/week_menu.php';
  const selector = `#contents > div.contentsArea.WeekMenu > div:nth-child(247) > div:nth-child(2) > table > tbody > tr:nth-child(1) > td:nth-child(${daynum}) > ul`;
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
};

module.exports = getMenu;
