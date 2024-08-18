// presentation layer of input form
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({ handleOnChange, handleSubmit, value, type, setType }) {

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
            <div className="w-4/5">
                <TextInput 
                    label="Write a word or a phrase"
                    type={type}
                    value={value}
                    onChange={handleOnChange}
                    className="w-full"
                />
            </div>
            <div className="flex space-x-4">
                <Button
                    text="OK"
                    buttonType="submit"
                    className="w-1/2"
                />
                <Button
                    onClickHandler={() => setType(type === "password" ? "text" : "password")}
                    text={type === "password" ? "Show" : "Hide"}
                    styleType="warning"
                    buttonType="button"
                    className="w-1/2"
                />
            </div>
        </form>
    )
}

export default TextInputForm;