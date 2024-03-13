import React from "react";
import { TextField, Button } from "@mui/material";

const PhoneNumbers = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      {/* Phone numbers fields */}
      <Button
        type="submit"
        variant="contained"
        className="button primary"
        style={{ marginTop: "10px" }}
      >
        Next
      </Button>
    </form>
  );
};

export default PhoneNumbers;
