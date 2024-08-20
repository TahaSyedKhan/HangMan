import { Link } from "react-router-dom";
import MaskedText from "../../MaskedText/MaskedText";

function PlayGame() {
    return (
        <>
            <h1>AT Play Game Page</h1>

            <MaskedText word="humble" usedLetters={['b', 'e']}/>
            <hr />
        <Link to="/start" >Play Game</Link>
        </>
    )
}

export default PlayGame;