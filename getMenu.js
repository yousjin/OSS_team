/* eslint-disable no-restricted-syntax */
/* eslint-disable global-require */
const getMenu = async function (daynum) {
  const axios = require('axios');
  const cheerio = require('cheerio');

  const url = 'https://sobi.chonbuk.ac.kr/menu/week_menu.php';
  const selector = '#contents > div.contentsArea.WeekMenu';
  const res = [];
  let html;
  let $;

  try {
    html = await axios.get(url);
    $ = cheerio.load(html.data);
    for (const v of $(selector).find('span')) {
      if ($(v).text() !== '') {
        console.log($(v).text());
        res.push($(v).text());
      }
    }
  } catch (error) {
    console.error(error);
  }
  const dayindex = daynum * 4;
  let menuList = res.slice(dayindex, dayindex + 4);
  menuList = menuList.filter((item) => item !== '' && item !== '\n');
  return menuList;
};

module.exports = getMenu;
