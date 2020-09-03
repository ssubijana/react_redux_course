import React from "react";
import PropTypes from "prop-types";

const Result = ({ value }) => {
  return (
    <div className="result">
      <span>{value}</span>
    </div>
  );
};

Result.defaultProps = {
  value: 0,
};

Result.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Result;
