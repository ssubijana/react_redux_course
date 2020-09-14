import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const MathOperations = ({ onClickOperation, onClickEqual }) => {
  return (
    <section className="math-operations">
      <Button text="+" type="" clickHandler={() => onClickOperation()} />
      <Button text="-" type="" clickHandler={() => onClickOperation()} />
      <Button text="*" type="" clickHandler={() => onClickOperation()} />
      <Button text="/" type="" clickHandler={() => onClickOperation()} />
      <Button text="=" type="" clickHandler={() => onClickEqual()} />
    </section>
  );
};

MathOperations.propTypes = {
  onClickEqual: PropTypes.func.isRequired,
  onClickOperation: PropTypes.func.isRequired,
};

export default MathOperations;
