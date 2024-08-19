import { Link, useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../TextInputForm/TextInputFormContainer";


function StartGame() {

    const Navigate = useNavigate();

    function handleonSubmit() {
        Navigate("/play")
    }
    return (
        <>
            <h1>AT Start Game Page</h1>
            <h1 className="text-3xl font-semibold underline text-center mt-8">Welcome to HangMan</h1>
            <TextInputFormContainer onSubmit={handleonSubmit}/>
        </>
    )
}

export default StartGame;