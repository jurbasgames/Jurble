import React, { useContext } from "react";
import { AppContext } from "../../App";

function Letter({ letterPos, attemptVal }) {
  const { board, solution, currAttempt } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];

  const correct = solution[letterPos] === letter;
  const almost = !correct && letter !== "" && solution.includes(letter);

  const letterState = currAttempt.attempt > attemptVal && (correct ? "correct" : almost ? "almost" : "error");

  return (
    <div id={letterState} className="letter">
      {" "}
      {letter}{" "}
    </div>
  );
}

export default Letter;
