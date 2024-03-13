// LicenceInfoForm.js
import React, { useState } from "react";
import { TextField } from "@mui/material";
import Form from "react-bootstrap/Form";
import styles from "../pages/RegistrationPage.module.css";
import { licenceSchema } from "../helper/registerSchema";
import * as Yup from "yup";

export const validateForm = async (formData) => {
  try {
    await licenceSchema.validate(formData.truckInfo, { abortEarly: false });
    return true; // Form is valid
  } catch (error) {
    return false; // Form is invalid
  }
};
const LicenceInfoForm = ({ formData, handleChange }) => {
  const [errors, setErrors] = useState({});

  const handleBlur = async (name, value) => {
    try {
      await Yup.reach(licenceSchema, name).validate(value);
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    } catch (error) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: error.message }));
    }
  };

  return (
    <>
      <div className={styles.infi}>
        <TextField
          label="Driver Licence"
          variant="filled"
          value={formData.licenceInfo.driver_licence}
          onChange={(e) =>
            handleChange("licenceInfo", "driver_licence", e.target.value)
          }
          onBlur={(e) => handleBlur("driver_licence", e.target.value)}
          error={!!errors.driver_licence}
          helperText={errors.driver_licence}
          className={styles.inputField}
        />
        <TextField
          type="date"
          label="Expiration"
          variant="filled"
          value={formData.licenceInfo.expiration}
          onChange={(e) =>
            handleChange("licenceInfo", "expiration", e.target.value)
          }
          onBlur={(e) => handleBlur("expiration", e.target.value)}
          error={!!errors.expiration}
          helperText={errors.expiration}
          className={styles.inputField}
        />
      </div>
      <div className={styles.infi}>
        <div className={styles.infi}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload : Driver Licence Image</Form.Label>
            <Form.Control type="file" accept="image/*" />
          </Form.Group>
        </div>
      </div>
    </>
  );
};

export default LicenceInfoForm;
