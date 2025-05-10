import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import BoxInput from "./components/Boxinput";
import "./App.css";

function App() {
  const [player,setPlayer] = useState("");

  

  return (
    <>
    <div className="text-3xl font-extrabold antialiased text-white py-10">
      Tic Tac Toe
    </div>
      <div className="grid grid-cols-3">
        <BoxInput  />
        <BoxInput />
        <BoxInput />
        <BoxInput />
        <BoxInput />
        <BoxInput />
        <BoxInput />
        <BoxInput />
        <BoxInput />
      </div>
    </>
  );
}

export default App;
