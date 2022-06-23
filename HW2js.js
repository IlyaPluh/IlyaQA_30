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
    let vowels = 'AEIOU'.split('')
    let countvowels = 0;
    let consonants = 'BCDFGHJKLMNPQRSTVWXZ'.split('')
    let countconsonants = 0;
    for (const char of word.toUpperCase()) {
      if (vowels.includes(char)) countvowels++
      else if (consonants.includes(char)) countconsonants++
    }
  //   if (vowels.indexOf(char) !== -1) countvowels += 1;
  //   else if (consonants.indexOf(char) !== -1) countconsonants += 1;
  // }
    console.log(`Слово ${word} состоит из ${countvowels} гласных и ${countconsonants} согласных букв`);
  };
  getWordStructure('Check-list');

  //4**
  const isPalindrom = (word) => {
    word.toLowerCase() === word.toLowerCase().split('').reverse().join('') ? console.log('Palindrom') : console.log('Ne palindrom');
  };
  isPalindrom('Abba');
  isPalindrom('abba');