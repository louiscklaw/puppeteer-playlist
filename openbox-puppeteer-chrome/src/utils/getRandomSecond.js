function getRandomSecond(max, min) {
  var result = Math.floor(Math.random() * max + min);
  // console.log({ result })
  return result;
}

module.exports = { getRandomSecond };
