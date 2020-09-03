import React from "react";

import Button from "./Button";

const MathOperations = ({ onClickOperation, onClickEqual }) => {
  return (
    <div>
      <Button text="+" type="" clickHandler={() => onClickOperation()} />
      <Button text="-" type="" clickHandler={() => onClickOperation()} />
      <Button text="*" type="" clickHandler={() => onClickOperation()} />
      <Button text="/" type="" clickHandler={() => onClickOperation()} />
      <Button text="=" type="" clickHandler={() => onClickEqual()} />
    </div>
  );
};

export default MathOperations;
