import { useState } from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({ onSubmit }) {

const [value, SetValue] = useState('')

function handleSubmit(event) {
    event.preventDefault();
    console.log("Form Submitted", value);
    onSubmit ?. (value)  // if onSubmit is defined, call it with a value
}

function handleOnChnage(event) {
    console.log(event.target.value);
    SetValue(event.target.value)
}


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <TextInput 
                    label="Write a word or a phrase"
                    type="password"
                    value={value}
                    onChange={handleOnChnage}
                />
            </div>
            <div>
                <Button
                    text="ok"
                    buttonType={"submit"}
                />
            </div>
        </form>
    )
}

export default TextInputForm;