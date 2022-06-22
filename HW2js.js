const stepen = (n, s) => {
    for (let i = 1; i <= s; i++) {
        console.log(Math.pow(n, i));
    }
}

stepen(2,10);

const printSmile = (stroka, numberOfRows) => {
    newstroka = '';
    for (let i = 1; i <= numberOfRows; i++) {
        newstroka += stroka;
        console.log(newstroka);
    }
}

printSmile(":)", 5); 

const getWordStructure = (word) => {
    let vowels = ['A, E, I, O, U'];
    let amountvowels = 0;
    let consonants = ['B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Y, Z'];
    let amountconsonants = 0;
    for (let i = 0; i <= word.length; i++) {
        if (word[i].toUpperCase() === vowels[i].toUpperCase()) {
            amountvowels += 1;
        }
       else if (word[i] === consonants[i]) {
            amountconsonants += 1;
        }
    }
    console.log(`Слово ${word} состоит из ${amountvowels} гласных и ${amountconsonants} согласных букв`);
}

getWordStructure('Check-list');