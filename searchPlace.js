/* eslint-disable quotes */
const searchPlace = function (rtm, channel, str) {
  const levenshtein = require('js-levenshtein');
  try {
    // eslint-disable-next-line global-require
    const fs = require('fs');

    const article = fs.readFileSync("dept.txt");
    const textSplitArr = article.toString().split("\n");

    let n = -1;
    str = str + ' ';
    str = str.replace(/(\s*)/g, "");

    for(i in textSplitArr) {
      var DeptArr = textSplitArr[i].toString().split('-');
      var text = DeptArr[0].replace(/(\s*)/g, "");

      if(text.toUpperCase() == str.toUpperCase()) {
        n = i;
        rtm.sendMessage(DeptArr[1], channel);
        console.log("학과 있음");
        return 'success';
      }

      if(levenshtein(text, str) < 4) {
        rtm.sendMessage(DeptArr[0] + "를 원하셨나요? 해당 위치는 "  + DeptArr[1] + " 입니다.", channel);
        console.log("학과 있음");
        return 'success';
      }
    }
    if (n === -1) {
      rtm.sendMessage("i m alive", channel);
    }
  } catch (error) {
    console.log("error!", error.data);
    return 'fail';
  }
};

module.exports = searchPlace;