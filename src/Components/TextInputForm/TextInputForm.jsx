// presentation layer of input form
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({ handleOnChnage, handleSubmit, value, type, setType }) {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <TextInput 
                    label="Write a word or a phrase"
                    type={type}
                    value={value}
                    onChange={handleOnChnage}
                />
            </div>
            <div>
                <Button
                    text="ok"
                    buttonType={"submit"}
                />
                <Button
                    onClickHandler={() => {setType(type === "password" ? "text" : "password");}}
                    text={type === "password" ? "Show" : "Hide"}
                    styleType="warning"
                    buttonType={"button"}
                />
            </div>
        </form>
    )
}

export default TextInputForm;