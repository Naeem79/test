// ButtonContainer.js

import React from "react";
import PropTypes from "prop-types";

const ButtonContainer = ({ type, buttonText, hasErrors, handleSubmit }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleSubmit(e);
  };

  return (
    <div style={{ margin: "20px" }}>
      <button
        type={type}
        className="button btn btn-primary"
        onClick={handleClick}
      >
        {buttonText}
      </button>
      {hasErrors && (
        <p style={{ color: "red" }} className="feedbackMessage">
          Please fill out all required fields.
        </p>
      )}
    </div>
  );
};

ButtonContainer.propTypes = {
  type: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  hasErrors: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ButtonContainer;
