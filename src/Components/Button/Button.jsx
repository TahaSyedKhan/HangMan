import getButtonStyle from "./getButtonStyle";

function Button({ text, styleType, buttonType, onClickHandler }) {
    return (
        <button
            type={buttonType}
            onClick={onClickHandler} 
            className={`px-4 py-2  text-white border  rounded-md transition-all ${getButtonStyle(styleType)}`}>{text}</button>
    )
}

export default Button;