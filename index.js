module.exports = function ({ length }) {
  const alphabet = ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't'];
  let resultString = '';

  for (let i = 0; i < length; i++) {
    resultString += alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  return resultString;
};
