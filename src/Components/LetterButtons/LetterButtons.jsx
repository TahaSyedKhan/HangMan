let ALPHABETS = new Array(26).fill('').map((ele, index) => String.fromCharCode(65 + index));
function LetterButtons({ usedLetters }) {

    const selectedLetters = new Set(usedLetters.join('').toUpperCase().split(''));
    const buttonStyle = function(letter) {
        if(selectedLetters.has(letter)) {
            return "bg-green-600 border-green-700 hover:bg-green-700"
        } else {
            return "bg-blue-600 border-blue-700 hover:bg-blue-700"
        }
    }
    const buttons = ALPHABETS.map(letter => {
        return (
            <button key={`button${letter}`}
            className={`h-12 w-12 m-1 rounded-md focus:outline-none text-white ${buttonStyle(letter)}`}>
                {letter}
            </button>
        )
    })
    return (
        <>
            {buttons}
        </>
    )
}

export default LetterButtons;