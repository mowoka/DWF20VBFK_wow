import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Daftar.css";
import { Link } from "react-router-dom";

function Daftar({ handleLinkDaftar, onChangeRegister, onSubmitDaftar }) {
  return (
    <div className="daftar-container">
      <p>Sign Up</p>
      <div className="form--container">
        <form onSubmit={onSubmitDaftar}>
          <input
            style={{
              width: "350px",
              height: "50px",
            }}
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            onChange={(e) => onChangeRegister(e)}
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
            onChange={(e) => onChangeRegister(e)}
          />
          <input
            style={{
              marginTop: "30px",
              width: "350px",
              height: "50px",
            }}
            type="text"
            className="form-control"
            placeholder="Full Name"
            name="name"
            onChange={(e) => onChangeRegister(e)}
          />
          <input
            type="submit"
            className="btn btn-danger form-btn"
            value="Sign Up"
            onClick={handleLinkDaftar}
          />
        </form>
        <p className="end-text">
          Already have an account ? Klik
          <span onClick={handleLinkDaftar}> Here</span>
        </p>
      </div>
    </div>
  );
}

export default Daftar;
