import Button from "./Components/Button/Button";
function App() {
  return (
      <>
        <h1 className="text-3xl font-semibold underline">Hello World</h1>
        <Button
            text="Primary"
            buttonType="submit"
            styleType="primary"
            onClickHandler={() => console.log("primary clicked")}
          />
        <Button 
            text="Secoundary"
            buttonType="button"
            styleType="secoundary"
            onClickHandler={() => console.log("secoundary clicked")}
          />
          <Button 
            text="Success"
            buttonType="button"
            styleType="success"
            onClickHandler={() => console.log("success clicked")}
          />
          <Button 
            text="Warning"
            buttonType="button"
            styleType="warning"
            onClickHandler={() => console.log("warning clicked")}
          />
          <Button 
            text="Error"
            buttonType="button"
            styleType="error"
            onClickHandler={() => console.log("error clicked")}
          />
  </>
  )
}

export default App;
