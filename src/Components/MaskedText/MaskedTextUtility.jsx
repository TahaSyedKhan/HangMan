//  word is a word to be guessed 
//  usedLetters are letters guessed so far

export  function getAllCharacters(word, usedLetters) {
    usedLetters = usedLetters.map(letter => letter.toUpperCase());
    const guessedLetters = new Set(usedLetters);
    const characters = word.toUpperCase().split('').map(char => {
        if(guessedLetters.has(char)) {
            return char;
        }
        return '_'
    })
    return characters.join('')
}