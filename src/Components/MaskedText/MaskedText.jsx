import { getAllCharacters } from "./MaskedTextUtility";

function MaskedText({ word, usedLetters }) {
    const letters = getAllCharacters(word, usedLetters).split('');
    return (
        <>
            {letters.map((letter, index) => {
                return (
                    <span key={`letter-${index}`} className="inline-block mx-1">{letter}</span>
                )
            })}
        </>
    );
}

export default MaskedText;