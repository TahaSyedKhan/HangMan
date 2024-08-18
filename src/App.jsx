
import TextInputFormContainer from "./Components/TextInputForm/TextInputFormContainer";

function App() {
  return (
      <>
        <h1 className="text-3xl font-semibold underline">Welcome to HangMan</h1>
        <TextInputFormContainer onSubmit={(value) => console.log("Form Submitted with a value", value)}/>
  </>
  )
}

export default App;
