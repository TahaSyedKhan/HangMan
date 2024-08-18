//container layer of input form
import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer({ onSubmit }) {

const [value, SetValue] = useState('')
const [type, setType] = useState("password");

function handleSubmit(event) {
    event.preventDefault();
    console.log("Form Submitted", value);
    onSubmit ?. (value)  // if onSubmit is defined, call it with a value
}

function handleOnChange(event) {
    console.log(event.target.value);
    SetValue(event.target.value)
}
return (
    // calling presentation layer
    <TextInputForm
        handleOnChange={handleOnChange}
        handleSubmit={handleSubmit}
        value={value}
        type={type}
        setType={setType}
    />
)

}

export default TextInputFormContainer;