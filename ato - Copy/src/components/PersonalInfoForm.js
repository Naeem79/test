import React, { useEffect, useState } from "react";
import styles from "../pages/RegistrationPage.module.css";
import { TextField, FormControlLabel, Checkbox, MenuItem } from "@mui/material";
import personalSchema from "../helper/registerSchema";
import * as Yup from "yup";
import axios from "axios";

export const validateForm = async (formData) => {
  try {
    await personalSchema.validate(formData.personalInfo, { abortEarly: false });
    return true; // Form is valid
  } catch (error) {
    return false; // Form is invalid
  }
};

const PersonalInfoForm = ({ formData, handleChange, handleChangeCheckbox }) => {
  const [errors, setErrors] = useState({});
  const [dialCode, setDialCode] = useState([]);

  useEffect(() => {
    fetchDialCode();
  }, []);

  const fetchDialCode = async () => {
    try {
      const headers = {
        "x-api-key": "Y86n5bZYZmT5bhkfJTxxYdgJlFHDy4owrNgr2536",
      };

      const response = await axios.get(
        "https://atoz-register.metariom.shop/api/v1/register/get-country-code",
        { headers }
      );

      const responseData = response.data;

      // Check if responseData.data is an array, if not, log the data and set an empty array
      if (!Array.isArray(responseData.data)) {
        console.error(
          "Error: Country code data is not an array.",
          responseData
        );
        setDialCode([]);
      } else {
        setDialCode(responseData.data);
      }
    } catch (error) {
      console.error("Error fetching dial code:", error);
    }
  };

  const handleBlur = async (name, value) => {
    try {
      await Yup.reach(personalSchema, name).validate(value);
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    } catch (error) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: error.message }));
    }
  };

  const handleCountryCodeChange = (e) => {
    const selectedCountry = e.target.value;
    // Update the country code in the formData
    handleChange("personalInfo", "country_code", selectedCountry);
  };

  return (
    <>
      <div className={styles.infi}>
        <TextField
          label="First Name"
          variant="filled"
          value={formData.personalInfo.first_name}
          onChange={(e) =>
            handleChange("personalInfo", "first_name", e.target.value)
          }
          onBlur={(e) => handleBlur("first_name", e.target.value)}
          required
          error={!!errors.first_name}
          helperText={errors.first_name}
          className="inputField"
        />
        <TextField
          label="Last Name"
          variant="filled"
          value={formData.personalInfo.last_name}
          onChange={(e) =>
            handleChange("personalInfo", "last_name", e.target.value)
          }
          onBlur={(e) => handleBlur("last_name", e.target.value)}
          required
          error={!!errors.last_name}
          helperText={errors.last_name}
          className="inputField"
        />
        <TextField
          select
          label="Country Code"
          variant="filled"
          value={formData.personalInfo.country_code}
          onChange={handleCountryCodeChange}
          onBlur={(e) => handleBlur("country_code", e.target.value)}
          required
          error={!!errors.country_code}
          helperText={errors.country_code}
          className="inputField"
          style={{ width: "33%" }}
        >
          {/* Render the options based on the fetched dial code data */}
          {dialCode.map((item, index) => (
            <MenuItem key={index} value={item.dial_code}>
              {item.name} ({item.dial_code})
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div className={styles.infi}>
        <TextField
          label="Phone"
          variant="filled"
          value={formData.personalInfo.phone}
          onChange={(e) =>
            handleChange("personalInfo", "phone", e.target.value)
          }
          onBlur={(e) => handleBlur("phone", e.target.value)}
          required
          error={!!errors.phone}
          helperText={errors.phone}
          className="inputField"
        />
        <TextField
          label="Backup Phone"
          variant="filled"
          value={formData.personalInfo.backup_number}
          onChange={(e) =>
            handleChange("personalInfo", "backup_number", e.target.value)
          }
          onBlur={(e) => handleBlur("backup_number", e.target.value)}
          required
          error={!!errors.backup_number}
          helperText={errors.backup_number}
          className="inputField"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.personalInfo.company}
              onChange={(e) =>
                handleChangeCheckbox("company", e.target.checked)
              }
              color="primary"
            />
          }
          label="Company"
          className="checkbox"
        />
      </div>
      {formData.personalInfo.company && (
        <>
          <div className={styles.infi}>
            <TextField
              label="Company Name"
              variant="filled"
              value={formData.personalInfo.company_name}
              onChange={(e) =>
                handleChange("personalInfo", "company_name", e.target.value)
              }
              onBlur={(e) => handleBlur("company_name", e.target.value)}
              required
              error={!!errors.company_name}
              helperText={errors.company_name}
              className="inputField"
            />
            <TextField
              label="Citizen Ein"
              variant="filled"
              value={formData.personalInfo.citizenship_ein}
              onChange={(e) =>
                handleChange("personalInfo", "citizenship_ein", e.target.value)
              }
              onBlur={(e) => handleBlur("citizenship_ein", e.target.value)}
              required
              error={!!errors.citizenship_ein}
              helperText={errors.citizenship_ein}
              className="inputField"
            />
            <TextField
              label="MC Number"
              variant="filled"
              value={formData.personalInfo.mc_number}
              onChange={(e) =>
                handleChange("personalInfo", "mc_number", e.target.value)
              }
              onBlur={(e) => handleBlur("mc_number", e.target.value)}
              required
              error={!!errors.mc_number}
              helperText={errors.mc_number}
              className="inputField"
            />
          </div>
        </>
      )}
    </>
  );
};

export default PersonalInfoForm;
