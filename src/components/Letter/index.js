import React, { useContext, useEffect } from "react";
import { AppContext } from "../../App";

function Letter({ letterPos, attemptVal }) {
  const { board, solution, currAttempt, setDisabledLetters } =
    useContext(AppContext);
  const letter = board[attemptVal][letterPos];

  const correct = solution.toUpperCase()[letterPos] === letter;
  const almost = !correct && letter !== "" && solution.includes(letter);

  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  return (
    <div id={letterState} className="letter">
      {" "}
      {letter}{" "}
    </div>
  );
}

export default Letter;
