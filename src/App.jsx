import TextInputForm from "./Components/TextInputForm/TextInputForm";
function App() {
  return (
      <>
        <h1 className="text-3xl font-semibold underline">Welcome to HangMan</h1>
        <TextInputForm onSubmit={(value) => console.log("Form Submitted with a value", value)}/>
  </>
  )
}

export default App;
