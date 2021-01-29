import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-container">
      <p className="login-title">Sign In</p>
      <Form>
        <Form.Group controlId="formEmail">
          <Form.Control type="Email" placeholder="Email" />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Control type="Password" placeholder="Password" />
        </Form.Group>
        <br />
        <Button type="submit" variant="danger" size="lg" block>
          Sign In
        </Button>
      </Form>
      <p className="login-end">
        Don't have account ? Klik{" "}
        <span>
          <Link to="/daftar">Here</Link>
        </span>
      </p>
    </div>
  );
}

export default Login;
