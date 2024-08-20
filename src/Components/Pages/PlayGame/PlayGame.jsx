import { Link } from "react-router-dom";
import MaskedText from "../../MaskedText/MaskedText";
import LetterButtons from "../../LetterButtons/LetterButtons";

function PlayGame() {
    return (
        <>
            <h1>AT Play Game Page</h1>

            <MaskedText word="humble" usedLetters={['b', 'e']}/>
            <hr />

            <LetterButtons usedLetters={['b', 'e']}/>
            <hr/>
        <Link to="/start" >Play Game</Link>
        </>
    )
}

export default PlayGame;