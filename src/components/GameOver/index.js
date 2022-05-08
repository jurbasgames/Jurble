import React, { useContext } from "react";
import { AppContext } from "../../App";

function GameOver() {
  const { gameOver, solution, currAttempt } =
    useContext(AppContext);

  return (
    <div className="gameOver">
      <h3>{gameOver.guessedWord ? "Ganhou" : "Perdeu"}</h3>
      <h1>Palavra correta: {solution}</h1>
      {gameOver.guessedWord && (
        <h3>
          {" "}
          Você acertou em {currAttempt.attempt}
          {currAttempt.attempt < 1 ? " tentativas" : " tentativa"}
        </h3>
      )}
    </div>
  );
}

export default GameOver;
