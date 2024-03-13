import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import "./modal.css";
import registrationPage from "../registrationPage";

const Modal = ({ isOpen, onClose, email }) => {
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
  ]);
  const [timer, setTimer] = useState(60);
  const navigate = useNavigate();

  useEffect(() => {
    let interval;
    if (isOpen && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isOpen, timer]);

  const handleResend = async () => {
    try {
      const headers = {
        "x-api-key": "Y86n5bZYZmT5bhkfJTxxYdgJlFHDy4owrNgr2536",
      };

      const event = {
        email: email,
      };

      const res = await axios.post(
        "https://atoz-register.metariom.shop/api/v1/register/resend-email-verify",
        event,
        { headers }
      );

      console.log("Resend successful:", res.data);
      if (res.status === 200) {
        setVerificationCode(["", "", "", "", ""]);
      }
      setTimer(60);
    } catch (error) {
      console.error("Error resending email verification:", error);
    }
  };

  const handleClose = () => {
    setVerificationCode(["", "", "", "", ""]);
    onClose();
  };

  const handleVerify = async () => {
    try {
      const headers = {
        "x-api-key": "Y86n5bZYZmT5bhkfJTxxYdgJlFHDy4owrNgr2536",
      };

      const event = {
        email: email,
        code: verificationCode.join(""),
      };

      const res = await axios.post(
        "https://atoz-register.metariom.shop/api/v1/register/verify-email",
        event,
        { headers }
      );

      console.log("Verification successful:", res.data);
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        
        navigate("/login");
      }
      console.log("Response:", res.data);
    } catch (error) {
      console.error("Error verifying email:", error);
    }
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <h2>Verification Code</h2>
        <p>Enter the 5-character verification code sent to your email.</p>
        <div className="code-input">
          {[...Array(5)].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={verificationCode[index]}
              onChange={(e) => {
                const code = e.target.value;
                if (code.match(/^[0-9]$/)) {
                  const newCode = [...verificationCode];
                  newCode[index] = code;
                  setVerificationCode(newCode);
                  if (index < 4 && code !== "") {
                    e.target.nextSibling.focus();
                  }
                }
              }}
            />
          ))}
        </div>
        <p className="timer">
          Resend code in {timer} {timer === 1 ? "second" : "seconds"}
        </p>
        <button
          className="resend-button"
          onClick={handleResend}
          disabled={timer > 0}
        >
          Resend
        </button>
        <button className="verify-button" onClick={handleVerify}>
          Verify
        </button>
      </div>
    </div>
  );
};

export default Modal;
