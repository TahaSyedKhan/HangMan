import StartGame from "./Components/Pages/StartGame/StartGame";
import { Route, Routes } from "react-router-dom";
import PlayGame from "./Components/Pages/PlayGame/PlayGame";

function App() {

  return (
    <>
    <h1>Navbar</h1>
    <Routes>
      <Route path="/start" element={<StartGame />} />
      <Route path="/play" element={<PlayGame />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
    </>
  )
  
}

export default App;
