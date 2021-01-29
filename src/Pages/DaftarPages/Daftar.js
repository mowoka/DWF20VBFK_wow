import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Daftar.css";
import { Link } from "react-router-dom";

function Daftar() {
  return (
    <div className="daftar-container">
      <p className="daftar-title">Sign Up</p>
      <Form>
        <Form.Group controlId="formEmail">
          <Form.Control type="Email" placeholder="Email" />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Control type="Password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Control type="Text" placeholder="Full Name" />
        </Form.Group>
        <br />
        <Button type="submit" variant="danger" size="lg">
          Sign Up
        </Button>
      </Form>
      <p className="daftar-end">
        Already have an acccount ? Klik{" "}
        <span>
          <Link to="/login">Here</Link>
        </span>
      </p>
    </div>
  );
}

export default Daftar;
