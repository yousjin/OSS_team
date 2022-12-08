const rating = function (menu, rtm, channel) {
  const menuArr = menu.toString().split(',');

  const prefer = '닭,돼지,고기,치즈,두부,짬뽕,오리,소,파스타,새우';
  const preferArr = prefer.toString().split(',');

  const dislike = '버섯,숙주,오이,가지,오징어,문어,주꾸미';
  const dislikeArr = dislike.toString().split(',');

  let score = 2;

  for (let i = 0; i < menuArr.length; i += 1) {
    for (let j = 0; j < preferArr.length; j += 1) {
      if (menuArr[i].includes(preferArr[j])) {
        score += 1;
      }
    }

    for (let j = 0; j < dislikeArr.length; j += 1) {
      if (menuArr[i].includes(dislikeArr[j])) {
        score -= 1;
      }
    }
  }

  if (score <= 1) {
    rtm.sendMessage('★☆☆', channel);
  } else if (score === 2) {
    rtm.sendMessage('★★☆', channel);
  } else if (score >= 3) {
    rtm.sendMessage('★★★', channel);
  }
};

module.exports = rating;
