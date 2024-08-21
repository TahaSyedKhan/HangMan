import { useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../TextInputForm/TextInputFormContainer";

function StartGame() {

    const navigate = useNavigate();

    function handleSubmit(value) {
        navigate('/play', { state: {wordSelected: value}});
    }

    return (
        <div>
            <h1 className="text-3xl underline text-center">Welcome to HangMan</h1>
            <TextInputFormContainer onSubmit={handleSubmit} />
        </div>
    );
}
export default StartGame;