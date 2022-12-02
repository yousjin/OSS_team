const todayMenu  = function (rtm, channel) {
  const axios = require('axios');
  const cheerio = require('cheerio');

  let today = new Date();
  let day = today.getDay();
  //sun = 0 sat = 6

  if(day == 0 || day == 6) {
    rtm.sendMessage('오늘은 주말입니다.', channel);
  }

  let selector = '#restdata > table > tbody > tr:nth-child(' + day + ') > td:nth-child(2) > ul';
  let url = 'https://sobi.chonbuk.ac.kr/';

  async function webScraping(url, selector) {
      let res = [];
      let html = await axios.get(url);
      let $ = cheerio.load(html.data);

      for(let v of $(selector)) {
          res.push($(v).text());
      }

     rtm.sendMessage(day.toString(), channel); //res
     return res; //'success'
  }

  webScraping(url, selector).then((res) => {
    console.log(res)
  });
};

module.exports = todayMenu;
