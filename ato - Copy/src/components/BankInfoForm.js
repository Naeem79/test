import React, { useState } from "react";
import { TextField } from "@mui/material";
import Form from "react-bootstrap/Form";
import styles from "../pages/RegistrationPage.module.css";

import { bankSchema } from "../helper/registerSchema";
import * as Yup from "yup";

export const validateForm = async (formData) => {
  try {
    await bankSchema.validate(formData.truckInfo, { abortEarly: false });
    return true; // Form is valid
  } catch (error) {
    return false; // Form is invalid
  }
};
const BankInfoForm = ({ formData, handleChange }) => {
  const [errors, setErrors] = useState({});

  const handleBlur = async (name, value) => {
    try {
      await Yup.reach(bankSchema, name).validate(value);
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    } catch (error) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: error.message }));
    }
  };
  return (
    <>
      <div className={styles.infi}>
        <TextField
          label="Name"
          variant="filled"
          value={formData.bankInfo.name}
          onChange={(e) => handleChange("bankInfo", "name", e.target.value)}
          onBlur={(e) => handleBlur("name", e.target.value)}
          error={!!errors.name}
          helperText={errors.name}
          className={styles.inputField}
        />
        <TextField
          label="Account Number"
          variant="filled"
          value={formData.bankInfo.account_number}
          onChange={(e) =>
            handleChange("bankInfo", "account_number", e.target.value)
          }
          onBlur={(e) => handleBlur("account_number", e.target.value)}
          error={!!errors.account_number}
          helperText={errors.account_number}
          className={styles.inputField}
        />
        <TextField
          label="Account number confirm"
          variant="filled"
          value={formData.bankInfo.account_number_confirm}
          onChange={(e) =>
            handleChange("bankInfo", "account_number_confirm", e.target.value)
          }
          onBlur={(e) => handleBlur("account_number_confirm", e.target.value)}
          error={!!errors.account_number_confirm}
          helperText={errors.account_number_confirm}
          className={styles.inputField}
        />
      </div>
      <div className={styles.infi}>
        <TextField
          label="Routing number"
          variant="filled"
          value={formData.bankInfo.routing_number}
          onChange={(e) =>
            handleChange("bankInfo", "routing_number", e.target.value)
          }
          onBlur={(e) => handleBlur("routing_number", e.target.value)}
          error={!!errors.routing_number}
          helperText={errors.routing_number}
          className={styles.inputField}
        />
        <TextField
          label="Routing number confirm"
          variant="filled"
          value={formData.bankInfo.routing_number_confirm}
          onChange={(e) =>
            handleChange("bankInfo", "routing_number_confirm", e.target.value)
          }
          onBlur={(e) => handleBlur("routing_number_confirm", e.target.value)}
          error={!!errors.routing_number_confirm}
          helperText={errors.routing_number_confirm}
          className={styles.inputField}
        />
        <TextField
          label="Quick Pay"
          variant="filled"
          value={formData.bankInfo.quick_pay}
          onChange={(e) =>
            handleChange("bankInfo", "quick_pay", e.target.value)
          }
          onBlur={(e) => handleBlur("quick_pay", e.target.value)}
          error={!!errors.quick_pay}
          helperText={errors.quick_pay}
          className={styles.inputField}
        />
      </div>
      <div className={styles.infi}>
        <div className={styles.infi}>
          <Form.Group controlId="formFile1" className="mb-3">
            <Form.Label>Upload: Bank Confirm Letter</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={(e) =>
                handleChange(
                  "bankInfo",
                  "bank_confirmation_letter",
                  e.target.files[0]
                )
              }
            />
          </Form.Group>
        </div>
        <div className={styles.infi}>
          <Form.Group controlId="formFile2" className="mb-3">
            <Form.Label>Upload: Bank Confirm Check</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={(e) =>
                handleChange(
                  "bankInfo",
                  "bank_confirmation_check",
                  e.target.files[0]
                )
              }
            />
          </Form.Group>
        </div>
      </div>
    </>
  );
};

export default BankInfoForm;
