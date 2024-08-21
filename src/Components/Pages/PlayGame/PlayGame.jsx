import { Link, useLocation } from "react-router-dom";
import MaskedText from "../../MaskedText/MaskedText";
import LetterButtons from "../../LetterButtons/LetterButtons";
import { useState } from "react";
import HangMan from "../../HangMan/HangMan";

function PlayGame() {

    const [usedLetters, setUsedLetters] = useState([]);

    const [step, setStep] = useState(0);

    const [gameOver, setGameOver] = useState(false)

    const location = useLocation(); 
    const wordSelected = location.state?.wordSelected; // If the state is not defined, it will return undefined, otherwise it will return the value of wordSelected

    const handleLetterClick = function(letter) {
        if (wordSelected.toUpperCase().includes(letter)) {
            console.log('Correct');
        } else {
            console.log('Incorrect');
            setStep(step + 1);
            if(step == 7) {
                setGameOver(true);
            }
        }
        setUsedLetters([...usedLetters, letter]);
    }

    return (
        <div class="relative p-4 bg-gray-100 min-h-screen flex flex-col items-center">
    <h1 class="text-3xl font-bold text-center mb-4">Guess The Word</h1>
    
    <div class="mb-4">
        <MaskedText text={wordSelected} usedLetters={usedLetters} />
    </div>
    
    <hr class="my-4 w-full"/>
    
    <div class="flex justify-between items-center w-full">
        <div class="basis-1/2 p-2">
            <LetterButtons text={wordSelected} usedLetters={usedLetters} onLetterClick={handleLetterClick} />
        </div>
        
        <div class="basis-1/2 flex justify-center items-center p-2">
            <HangMan step={step}/>
        </div>
    </div>
    
    <hr class="my-4 w-full"/>
    
    <div class="text-center">
        <Link to='/start' class="text-blue-600 underline hover:text-blue-700">Start Game</Link>
    </div>

{gameOver && (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <div className="text-4xl font-bold text-white animate-bounce mb-4">Game Over</div>
        <Link to='/start' className="text-4xl font-bold text-green-500 hover:text-green-700">Restart Game</Link>
    </div>
)}

</div>
    );
}
export default PlayGame;