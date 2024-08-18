
import TextInputFormContainer from "./Components/TextInputForm/TextInputFormContainer";

function App() {

  return (
    <>
      <h1 className="text-3xl font-semibold underline text-center mt-8">Welcome to HangMan</h1>
      <TextInputFormContainer 
          onSubmit={(value) => console.log("Form Submitted with a value", value)} 
          className="flex flex-col items-center space-y-4 p-6 m-4 border rounded-lg shadow-lg"
      />
    </>
  )
  
}

export default App;
