import React, { useContext } from "react";
import { AppContext } from "../../App";

function Key({ keyVal, bigKey }) {
  const { board, setBoard, currAttempt, setCurrAttempt } =
    useContext(AppContext);

  const selectLetter = () => {

    if (keyVal === "ENTER") {
      if (currAttempt.letterPos !== 5) return;
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });

    } 

    else if (keyVal === "DEL") {
      if (currAttempt.letterPos === 0) return;
      const newBoard = [...board];
      newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
      setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos - 1});
    } 

    else {
      if (currAttempt.letterPos > 4) return;
      const newBoard = [...board];
      newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
      setBoard(newBoard);
      setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
    }
  };
  return (
    <button className="key" id={bigKey && "big"} onClick={selectLetter}>
      {keyVal}
    </button>
  );
}
export default Key;