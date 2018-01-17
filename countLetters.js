var string = 'lighthouse in the house';
var letterCount = {};

var countLetters = function (string) {
  var stringArray = string.toLowerCase().split(" ").join("").split("");
  stringArray.forEach(function (letter) {
    if (letterCount.hasOwnProperty(letter)) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  });
  return letterCount;
};

console.log(countLetters(string));