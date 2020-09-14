import React from "react";

import Button from "./components/Button";
import MathOperations from "./components/MathOperations";
import Result from "./components/Result";

import "./App.css";

export default function App() {
  const clickHandlerFunction = (text) => {
    console.log(text);
  };

  return (
    <main className="react-calculator">
      <Result />
      <div className="numbers">
        <Button text="1" type="" clickHandler={clickHandlerFunction} />
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
      </div>
      <div className="functions">
        <button>Clear</button>
        <button>r</button>
      </div>
      <MathOperations onClickEqual={clickHandlerFunction} onClickOperation={clickHandlerFunction} />
    </main>
  );
}
