var square = function(rtm, text, channel){

    console.log("제곱을 실시합니다");
    console.log(text);
    rtm.sendMessage('The result is ' + text*text, channel);

}

module.exports = square;