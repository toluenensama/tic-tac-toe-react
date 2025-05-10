import { useState } from "react";
function BoxInput() {
const [input, setInput] = useState("");
  const [playerNumber, setPlayer] = useState(0);
  const player = "y";

  function switchPlayer(e, val1, val2) {
    return e === val1 ? val2 : val1;
  }

  const play = () => {
    setInput((Input) => switchPlayer(Input,"1","2"));
  };

  return (
    <div className="bg-white border-2 border-emerald-500" onClick={play}>
      <div className="text-gray-700 text-2xl p-10">{input}</div>
    </div>
  );
}

export default BoxInput;
