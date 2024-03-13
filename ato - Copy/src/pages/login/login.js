import "./login.css";
import React, { useState } from "react";
import axios from "axios";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const event = {
      email: email,
      password: password,
    };

    try {
      const headers = {
        "x-api-key": "Y86n5bZYZmT5bhkfJTxxYdgJlFHDy4owrNgr2536",
      };

      const response = await axios.post(
        "https://atoz-register.metariom.shop/api/v1/login",
        event,
        { headers }
      );
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);

        navigate("/registrationPage");
      }
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="form" style={{ backgroundColor: "white" }}>
      <div style={{ background: "white" }}>
        <h1 className="title">Login</h1>
        <img
          src="https://bootstrapious.com/i/snippets/sn-registeration/illustration.svg"
          alt=""
          className="img-fluid mb-3  d-md-block"
        />
      </div>
      <form onSubmit={handleSubmitForm}>
        <div className="form1">
          <label>
            <span style={{ display: "block" }}>
              <FontAwesomeIcon icon={faEnvelope} />
              Email:
            </span>
            <input
              className="inp"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              value={email}
              required
              style={{ width: "100%" }}
            />
          </label>

          <label style={{ display: "block" }}>
            <span style={{ display: "block" }}>
              <FontAwesomeIcon icon={faLock} />
              Password:
            </span>
            <input
              className="inp"
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              value={password}
              required
              style={{ width: "100%" }}
            />
            {/* <input
            id="check"
            type="checkbox"
            value={showPassword}
            onChange={() => setShowPassword((prev) => !prev)}
          /> */}
          </label>
        </div>

        <Link className="link" to={"/"}>
          Don't have an account ? click here
        </Link>
        <button className="Button" style={{ fontWeight: "bold" }}>
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
