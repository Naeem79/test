import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import Modal from "./verifyEmail/Modal";
import Alert from "@mui/material/Alert";
import "./register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false); // State for checkbox
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false); // Initialize to false
  const [modalEmail, setModalEmail] = useState(""); // State to store email for Modal
  const [showTermsAlert, setShowTermsAlert] = useState(false);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (!agreeTerms) {
      setShowTermsAlert(true);
      setInterval(() => {
        setShowTermsAlert(false);
      }, 3000);
      return;
    }
    const event = {
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    };

    try {
      const headers = {
        "x-api-key": "Y86n5bZYZmT5bhkfJTxxYdgJlFHDy4owrNgr2536",
      };

      const res = await axios.post(
        "https://atoz-register.metariom.shop/api/v1/register",
        event,
        { headers }
      );
      console.log("Response:", res);
      if (res.status === 200) {
        setShowModal(true); // Show modal on successful registration
        setModalEmail(email); // Set email for the modal
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setEmail("");
    setPassword("");
    setPassword_confirmation("");
  };

  return (
    <div>
      <div
        style={{ backgroundColor: "white" }}
        className={`form ${showModal ? "disabled" : ""}`}
      >
        <div>
          <h1 className="title">Registration</h1>
          <img
            src="https://bootstrapious.com/i/snippets/sn-registeration/illustration.svg"
            alt=""
            className="img-fluid mb-3  d-md-block"
          />
        </div>
        <form onSubmit={handleSubmitForm}>
          <div className="form1">
            <label>
              <span>
                <FontAwesomeIcon icon={faEnvelope} /> Email:
              </span>
              <input
                className="inp"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                value={email}
                required
                disabled={showModal}
                style={{ width: "100%" }}
              />
            </label>

            <label>
              <span>
                <FontAwesomeIcon icon={faLock} /> Password:
              </span>
              <input
                className="inp"
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                value={password}
                required
                disabled={showModal}
                style={{ width: "100%" }}
              />
            </label>

            <label>
              <span>
                <FontAwesomeIcon icon={faLock} /> Confirm Password:
              </span>
              <input
                style={{ width: "100%" }}
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword_confirmation(e.target.value)}
                placeholder="Confirm your password"
                value={password_confirmation}
                required
                disabled={showModal}
              />
            </label>

            <div className="terms-checkbox">
              <label id="term">
                {" "}
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  disabled={showModal}
                />
                I agree to the Terms & Conditions
              </label>
            </div>
            <div className="alert-container">
              {showTermsAlert && (
                <Alert severity="error" className="alert">
                  Please agree to the Terms & Conditions.
                </Alert>
              )}
            </div>
            <Link className="link" to={"/login"}>
              Already have an account? Click Here
            </Link>

            <button className="Button" disabled={showModal}>
              Register
            </button>
          </div>
        </form>
      </div>
      {/* Conditionally render the modal */}
      {showModal && (
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          email={modalEmail}
        />
      )}
    </div>
  );
};

export default Register;
