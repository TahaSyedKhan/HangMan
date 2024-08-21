import StartGame from "./Components/Pages/StartGame/StartGame";
import { Link, Route, Routes } from "react-router-dom";
import PlayGame from "./Components/Pages/PlayGame/PlayGame";
import PlayButton from "./Components/PlayButton/PlayButton";

function App() {

  return (
    <>
    <Routes>
      <Route exact path="/" element={<PlayButton />} />
      <Route path="/start" element={<StartGame />} />
      <Route path="/play" element={<PlayGame />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
    </>
  )
  
}

export default App;
