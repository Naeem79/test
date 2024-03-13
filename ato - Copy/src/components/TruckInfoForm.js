import React, { useState } from "react";
import { TextField } from "@mui/material";
import Form from "react-bootstrap/Form";
import styles from "../pages/RegistrationPage.module.css";
import { truckSchema } from "../helper/registerSchema";
import * as Yup from "yup";

export const validateForm = async (formData) => {
  try {
    await truckSchema.validate(formData.truckInfo, { abortEarly: false });
    return true; // Form is valid
  } catch (error) {
    return false; // Form is invalid
  }
};
const TruckInfoForm = ({ formData, handleChange }) => {
  const [errors, setErrors] = useState({});

  const handleBlur = async (name, value) => {
    try {
      await Yup.reach(truckSchema, name).validate(value);
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    } catch (error) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: error.message }));
    }
  };
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div className={styles.infi}>
          <TextField
            label="Truck Type"
            variant="filled"
            value={formData.truckInfo.truck_type}
            onChange={(e) =>
              handleChange("truckInfo", "truck_type", e.target.value)
            }
            onBlur={(e) => handleBlur("truck_type", e.target.value)}
            error={!!errors.truck_type}
            helperText={errors.truck_type}
            className={styles.inputField}
          />
          <TextField
            label="Ownership"
            variant="filled"
            value={formData.truckInfo.ownership}
            onChange={(e) =>
              handleChange("truckInfo", "ownership", e.target.value)
            }
            onBlur={(e) => handleBlur("ownership", e.target.value)}
            error={!!errors.ownership}
            helperText={errors.ownership}
            className={styles.inputField}
          />
          <TextField
            label="vin Number"
            variant="filled"
            value={formData.truckInfo.vin_number}
            onChange={(e) =>
              handleChange("truckInfo", "vin_number", e.target.value)
            }
            onBlur={(e) => handleBlur("vin_number", e.target.value)}
            error={!!errors.vin_number}
            helperText={errors.vin_number}
            className={styles.inputField}
          />
        </div>
        <div className={styles.infi}>
          <TextField
            label="Year vehicle manufacture"
            variant="filled"
            value={formData.truckInfo.year_vehicle_manufacture}
            onChange={(e) =>
              handleChange(
                "truckInfo",
                "year_vehicle_manufacture",
                e.target.value
              )
            }
            onBlur={(e) =>
              handleBlur("year_vehicle_manufacture", e.target.value)
            }
            error={!!errors.year_vehicle_manufacture}
            helperText={errors.year_vehicle_manufacture}
            className={styles.inputField}
          />
          <TextField
            label="Mileage"
            variant="filled"
            value={formData.truckInfo.mileage}
            onChange={(e) =>
              handleChange("truckInfo", "mileage", e.target.value)
            }
            onBlur={(e) => handleBlur("mileage", e.target.value)}
            error={!!errors.mileage}
            helperText={errors.mileage}
            className={styles.inputField}
          />
          <TextField
            label="max carriable weight"
            variant="filled"
            value={formData.truckInfo.max_carriable_weight}
            onChange={(e) =>
              handleChange("truckInfo", "max_carriable_weight", e.target.value)
            }
            onBlur={(e) => handleBlur("max_carriable_weight", e.target.value)}
            error={!!errors.max_carriable_weight}
            helperText={errors.max_carriable_weight}
            className={styles.inputField}
          />
        </div>

        <div className={styles.infi}>
          <TextField
            label="max pallets"
            variant="filled"
            value={formData.truckInfo.max_pallets}
            onChange={(e) =>
              handleChange("truckInfo", "max_pallets", e.target.value)
            }
            onBlur={(e) => handleBlur("max_pallets", e.target.value)}
            error={!!errors.max_pallets}
            helperText={errors.max_pallets}
            className={styles.inputField}
          />
          <TextField
            label="vehicle length"
            variant="filled"
            value={formData.truckInfo.vehicle_length}
            onChange={(e) =>
              handleChange("truckInfo", "vehicle_length", e.target.value)
            }
            onBlur={(e) => handleBlur("vehicle_length", e.target.value)}
            error={!!errors.vehicle_length}
            helperText={errors.vehicle_length}
            className={styles.inputField}
          />
          <TextField
            label="wheel width"
            variant="filled"
            value={formData.truckInfo.wheel_width}
            onChange={(e) =>
              handleChange("truckInfo", "wheel_width", e.target.value)
            }
            onBlur={(e) => handleBlur("vehicle_length", e.target.value)}
            error={!!errors.vehicle_length}
            helperText={errors.vehicle_length}
            className={styles.inputField}
          />
        </div>
        <div className={styles.infi}>
          <TextField
            label="vehicle height"
            variant="filled"
            value={formData.truckInfo.vehicle_height}
            onChange={(e) =>
              handleChange("truckInfo", "vehicle_height", e.target.value)
            }
            onBlur={(e) => handleBlur("vehicle_height", e.target.value)}
            error={!!errors.vehicle_height}
            helperText={errors.vehicle_height}
            className={styles.inputField}
          />
          <TextField
            label="backdoor width"
            variant="filled"
            value={formData.truckInfo.backdoor_width}
            onChange={(e) =>
              handleChange("truckInfo", "backdoor_width", e.target.value)
            }
            onBlur={(e) => handleBlur("backdoor_width", e.target.value)}
            error={!!errors.backdoor_width}
            helperText={errors.backdoor_width}
            className={styles.inputField}
          />
          <TextField
            label="backdoor height"
            variant="filled"
            value={formData.truckInfo.backdoor_height}
            onChange={(e) =>
              handleChange("truckInfo", "backdoor_height", e.target.value)
            }
            onBlur={(e) => handleBlur("backdoor_height", e.target.value)}
            error={!!errors.backdoor_height}
            helperText={errors.backdoor_height}
            className={styles.inputField}
          />
        </div>

        <div className={styles.infi}>
          <TextField
            label="sidedoor width"
            variant="filled"
            value={formData.truckInfo.sidedoor_width}
            onChange={(e) =>
              handleChange("truckInfo", "sidedoor_width", e.target.value)
            }
            onBlur={(e) => handleBlur("sidedoor_width", e.target.value)}
            error={!!errors.sidedoor_width}
            helperText={errors.sidedoor_width}
            className={styles.inputField}
          />
          <TextField
            label="sidedoor height"
            variant="filled"
            value={formData.truckInfo.sidedoor_height}
            onChange={(e) =>
              handleChange("truckInfo", "sidedoor_height", e.target.value)
            }
            onBlur={(e) => handleBlur("sidedoor_height", e.target.value)}
            error={errors.sidedoor_height}
            helperText={errors.sidedoor_height}
            className={styles.inputField}
          />
        </div>
        <div className={styles.infi}>
          <div className={styles.infi}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload : Registration Image</Form.Label>
              <Form.Control type="file" accept="image/*" />
            </Form.Group>
          </div>
          <div className={styles.infi}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload : Insurance Image</Form.Label>
              <Form.Control type="file" accept="image/*" />
            </Form.Group>
          </div>
          <div className={styles.infi}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload : Truck Image </Form.Label>
              <Form.Control type="file" accept="image/*" />
            </Form.Group>
          </div>
        </div>
      </div>
    </>
  );
};

export default TruckInfoForm;
