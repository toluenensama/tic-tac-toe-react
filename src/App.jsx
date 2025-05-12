import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [player, setPlayer] = useState("X");
  const playerBox = {};
  const [playInputs, setPlayInputs] = useState(playerBox);
  const positions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [playerInput, setPlayerInput] = useState({});
  const [xScore, setxScore] = useState(0);
  const [oScore, setyScore] = useState(0);

  function switchPlayer(e, val1, val2) {
    return e === val1 ? val2 : val1;
  }
  const [playerBoxInputs, setPlayerBoxInputs] = useState({});

  const updateInputs = (newInputs) => {
    setPlayerBoxInputs((prevInputs) => ({
      ...prevInputs,
      ...newInputs,
    }));
  };

  const positionsWithX = Object.entries(playerInput)
    .filter(([position, value]) => value === "X")
    .map(([position]) => Number(position));

  const positionsWithO = Object.entries(playerInput)
    .filter(([position, value]) => value === "O")
    .map(([position]) => Number(position));

  const play = (position, player) => {
    if (!playerInput[position]) {
      setPlayerInput((prev) => ({
        ...prev,
        [position]: player,
      }));
      if (player === "X" || player === "O") {
        setPlayInputs((prevInputs) => ({
          ...prevInputs,
          [position]: player,
        }));
      }
    }
    updateInputs({ [position]: player });

    setPlayer((Input) => switchPlayer(Input, "X", "O"));
  };

  

  useEffect(() => {
    const winCombos = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];

    const checkWinner = (playerPositions) => {
      return winCombos.some((combo) =>
        combo.every((pos) => playerPositions.includes(pos))
      );
    };

    const resetGame = () => {
      setPlayer("X");
      setPlayerInput({});
      setPlayerBoxInputs({});
    };

    if (checkWinner(positionsWithX)) {
      alert("X wins");
      setxScore(xScore + 1);
      resetGame();
    } else if (checkWinner(positionsWithO)) {
      alert("O wins");
      setyScore(oScore + 1);
      resetGame();
    } else if (Object.keys(playerInput).length === 9) {
      alert("Draw");
      resetGame();
    }
  }, [playerInput]);

  return (
    <>
      <div className="text-3xl font-extrabold antialiased text-white py-10">
        Tic Tac Toe
      </div>
      <div className="my-4 bg-blue-800 rounded-lg p-5 text-xl font-bold antialiased">
        Player {player}
      </div>
      <div className="flex justify-between items-center my-4">
        <div className="text-white bg-blue-800 p-3 rounded-lg inline antialiased font-medium text-lg">
          Player X : {xScore}
        </div>
        <div className="text-white bg-blue-800 p-3 rounded-lg inline antialiased font-medium text-lg">
          Player O : {oScore}
        </div>
      </div>
      <div className="grid grid-cols-3">
        {positions.map((position) => (
          <div
            key={position}
            className="bg-white border-2 border-emerald-500"
            onClick={() => {
              play(position, player);
            }}
          >
            <div className="text-gray-700 uppercase text-2xl p-10">
              {playerInput[position] || ""}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
