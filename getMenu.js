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
    for (const v of $(selector).find('ul')) {
      if ($(v).text() !== '') {
        res.push($(v).text());
      }
    }
  } catch (error) {
    console.error(error);
  }

  const temp = res[daynum - 1];
  let menuList = temp.split('\n');
  menuList = menuList.filter((item) => item !== '' && item !== '\n');
  return menuList;
};

module.exports = getMenu;
