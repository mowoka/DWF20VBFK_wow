import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container-homepage">
      <img src="image/page_1/vektor.png" alt="background" />
      <div className="content">
        <div className="content-image">
          <img src="image/page_1/wow.png" alt="text-awal" />
          <img src="image/page_1/wow-desc.png" alt="text-akhir" />
        </div>
        <div className="content-text">
          <p>
            Sign-up now and subscribe to enjoy all the coll <br />
            and latest books - The best book rental service <br />
            provider in indonesia
          </p>
          <div className="btn">
            <Link to="/daftar" className="btn-danger">
              Sign Up
            </Link>
            <Link to="/login" className="btn-primary">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
