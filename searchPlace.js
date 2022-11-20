const searchPlace = function (rtm, channel, str) {
  try {
    var De_place;
    const DeptKor = '건축공학부,기계공학부,도시공학부,전자공학부,컴퓨터공학부,화학공학부,회계학부,국제무역학부,국어국문학부,문헌정보학부';
    const DeptKorArr = DeptKor.toString().split(',');

    const fs = require('fs');

    const article = fs.readFileSync("dept.txt");
    const textSplitArr = article.toString().split("\n");

    var n = textSplitArr.indexOf(str);
    if(n == -1) {
      n = DeptKorArr.indexOf(str);
    }
    if (n == -1) {
      rtm.sendMessage("i m alive", channel);
      console.log("학과 없음");
    }
    console.log("학과 있음");

    DeptArr = textSplitArr[n].toString().split('-');
    De_place = DeptArr[1];

    rtm.sendMessage(De_place, channel);
  } catch(error) {
    console.log("error!", error.data);
  }
};

module.exports = searchPlace;