import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "./HomePage.css";
import { Modal } from "react-bootstrap";
import { AppContext } from "../../Context/globalContext";
import Login from "../LoginPages/Login";
import Daftar from "../DaftarPages/Daftar";

function HomePage() {
  const [showDaftar, setShowDaftar] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [registerFormData, setRegisterFormData] = useState({
    id: Math.floor(Math.random() * 100),
    email: "",
    password: "",
    name: "",
    role: "user",
  });

  const [userColumn, setUserColumn] = useContext(AppContext);

  const history = useHistory();

  const { email, password } = loginFormData;
  const {
    registId,
    registEmail,
    registPassword,
    registName,
  } = registerFormData;

  // handleInputChange
  const onChange = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  const onChangeRegister = (e) => {
    setRegisterFormData({
      ...registerFormData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = userColumn
      .filter(function (item) {
        return item.email == email;
      })
      .map(function (user) {
        return user;
      });

    if (data.length > 0) {
      if (password === data[0].password) {
        if (data[0].role === "admin") {
          history.push("/transactions");
        } else {
          history.push("/beranda");
        }
      } else {
        alert("Password salah");
      }
    } else {
      alert("Email tidak ditemukan");
    }
  };

  const onSubmitDaftar = (e) => {
    e.preventDefault();
    const result = userColumn.concat(registerFormData);

    setUserColumn(result);
  };

  const handleCloseDaftar = () => setShowDaftar(false);
  const handleShowDaftar = () => setShowDaftar(true);
  const handleLinkDaftar = () => {
    setShowDaftar(false);
    setShowLogin(true);
  };
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  const handleLinkLogin = () => {
    setShowLogin(false);
    setShowDaftar(true);
  };

  return (
    <div className="container-homepage">
      <img src="image/page_1/vektor.png" alt="background" />
      <div className="content">
        <div className="content-image">
          <img src="image/page_1/wow-icon.png" alt="text-awal" />
        </div>
        <div className="content-text">
          <p>
            Sign-up now and subscribe to enjoy all the cool and latest books -
            The best book rental service provider in indonesia
          </p>
          <div className="btn">
            <div onClick={() => handleShowDaftar()} className="btn-danger">
              Sign Up
            </div>
            <Modal
              size="md"
              show={showDaftar}
              onHide={handleCloseDaftar}
              centered
            >
              <Modal.Body>
                <Daftar
                  onChangeRegister={onChangeRegister}
                  handleLinkDaftar={handleLinkDaftar}
                  onSubmitDaftar={onSubmitDaftar}
                />
              </Modal.Body>
            </Modal>
            <div onClick={() => handleShowLogin()} className="btn-primary">
              Sign In
            </div>
            <Modal
              size="md"
              show={showLogin}
              onHide={handleCloseLogin}
              centered
            >
              <Modal.Body>
                <Login
                  handleLinkLogin={handleLinkLogin}
                  onChange={onChange}
                  loginFormData={loginFormData}
                  onSubmit={onSubmit}
                />
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
