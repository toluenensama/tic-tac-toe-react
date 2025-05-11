import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [player, setPlayer] = useState("X");
  const [X, setX] = useState([]);
  const [Y, setY] = useState([]);
  const positions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [playerInput, setPlayerInput] = useState({});


  function switchPlayer(e, val1, val2) {
    return e === val1 ? val2 : val1;
  }

  const [input, setInput] = useState("");

  const play = (position,player) => {
    
    if (!playerInput[position]) {
      setPlayerInput((prev) =>({
        ...prev,[position]:player,
      }))
    }
    setPlayer((Input) => switchPlayer(Input,"X","O"));

  };


  useEffect(() => {
    const XInputs = JSON.parse(localStorage.getItem("X")) || [];
    const YInputs = JSON.parse(localStorage.getItem("Y")) || [];
    setX(XInputs);
    setY(YInputs);

  }, []);

  

  return (
    <>
      <div className="text-3xl font-extrabold antialiased text-white py-10">
        Tic Tac Toe
      </div>
      <div className="my-4 bg-blue-800 rounded-lg p-5 text-xl font-bold antialiased">
        Player {player}
      </div>
      <div className="grid grid-cols-3">
        {positions.map((position) => (
          <div key={position} className="bg-white border-2 border-emerald-500" onClick={()=>{play(position,player)}}>
            <div className="text-gray-700 uppercase text-2xl p-10">{playerInput[position] || ""}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
