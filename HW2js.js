// 1*
const stepen = (n, s) => {
    for (let i = 1; i <= s; i++) {
        console.log(Math.pow(n, i));
    }
  }
stepen(2,10);

//2*
const printSmile = (stroka, numberOfRows) => {
    for (let i = 1; i <= numberOfRows; i++) {
        console.log(stroka.repeat(i));
    }
}
printSmile(":)", 5);

//3**
const getWordStructure = (word) => {
    let vowels = ['A', 'E', 'I', 'O', 'U'];
    let countvowels = 0;
    let consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];
    let countconsonants = 0;
    for (let i = 0; i < word.length; i++) {
      if (vowels.indexOf(word[i].toUpperCase()) !== -1) {
        countvowels += 1;
      } else if (consonants.indexOf(word[i].toUpperCase()) !== -1) {
        countconsonants += 1;
      }
    }
    console.log(`Слово ${word} состоит из ${countvowels} гласных и ${countconsonants} согласных букв`);
  };
  getWordStructure('Check-list');

  //4**
  const isPalindrom = (word) => {
    word === word.split('').reverse().join('') ? console.log('Palindrom') : console.log('Ne palindrom');
  };
  isPalindrom('Abba');
  isPalindrom('abba');
  