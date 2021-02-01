import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login({ handleLinkLogin, loginFormData, onChange, onSubmit }) {
  return (
    <div className="login-container">
      <p>Sign In</p>
      <div className="form--container">
        <form onSubmit={(e) => onSubmit(e)}>
          <input
            style={{
              width: "350px",
              height: "50px",
            }}
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            onChange={(e) => onChange(e)}
          />
          <input
            style={{
              marginTop: "30px",
              width: "350px",
              height: "50px",
            }}
            type="password"
            className="form-control"
            placeholder="password"
            name="password"
            onChange={(e) => onChange(e)}
          />
          <input
            type="submit"
            className="btn btn-danger form-btn"
            value="Sign in"
          />
        </form>
        <p className="end-text">
          Don't have an account ? Klik{" "}
          <span onClick={handleLinkLogin}>Here</span>
        </p>
        {/* <p>
          <pre>{JSON.stringify(loginFormData, null, 2)}</pre>
        </p> */}
      </div>
    </div>
  );
}

export default Login;
