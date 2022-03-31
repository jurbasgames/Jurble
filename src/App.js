import React from "react";
import Board from "./components/Board/";
import Keyboard from "./components/Keyboard/";
import "./App.css"

function App() {
  return (
    <div className="App">
      <nav>
        <h1>Jurble</h1>
        <Board/>
        <Keyboard/>
      </nav>
    </div>
  );
}

export default App;
