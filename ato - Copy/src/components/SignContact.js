import React from "react";
import { FormControlLabel, Checkbox, Typography } from "@mui/material";

const SignContact = ({ formData, handleChange, handleSubmit }) => {
  const handleCheckboxChange = (field, checked) => {
    handleChange("signContact", field, checked ? 1 : 0); // Send 1 when checked, 0 otherwise
  };

  return (
    <>
      <div
        style={{
          margin: "20px",
          border: "1px solid gray",
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "#F1FFF5",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>Terms & Conditions:</strong> <br /> PLEASE NOTE THAT DUE TO
          BREXIT, IN MOST CASES, WE ARE UNABLE TO SHIP TO COUNTRIES IN THE EU
          WITHOUT AN EORI NUMBER, A REQUIREMENT FOR THE CARRIER COMPANIES. 1.
          INTERPRETATION 1.1 The following definitions and rules of
          interpretation apply in these conditions:- Buyer means the person,
          firm or company who/which places a purchase order with the Seller;
          Business Day means a day other than a Saturday or a Sunday; Contract
          means a contract between the Seller and the Buyer for the sale and
          purchase of Goods; Delivery Point means the place where delivery of
          Goods is to take place under condition 4; Goods means goods to be
          supplied to the Buyer by the Seller (including any part or parts of
          them). 1.2 A reference to a law is a reference to it as it is in force
          for the time being taking account of any amendment, extension,
          application or re-enactment and includes any subordinate legislation
          for the time being in force made under it. 1.3 Words in the singular
          include the plural and in the plural include the singular. 1.4 A
          reference to one gender includes a reference to the other gender. 1.5
          Condition headings do not affect the interpretation of these
          conditions.
        </span>
      </div>
      <div style={{ margin: "20px" }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.signContact.terms === 1}
              onChange={(e) => handleCheckboxChange("terms", e.target.checked)}
              color="primary"
            />
          }
          label={
            <Typography variant="body1">
              I agree to the terms and conditions
            </Typography>
          }
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.signContact.sign_contract === 1}
              onChange={(e) =>
                handleCheckboxChange("sign_contract", e.target.checked)
              }
              color="primary"
            />
          }
          label={
            <Typography variant="body1">
              I agree to the contract terms
            </Typography>
          }
        />
        <Typography variant="body2" color="textSecondary">
          By checking these boxes, you agree to our terms and contract.
        </Typography>
      </div>
    </>
  );
};

export default SignContact;
