import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddBook.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import BookIcon from "@material-ui/icons/Book";

const AddBook = () => {
  const [showDropDownProfile, setShowDropDownProfile] = useState(false);

  const handleShowDropDownProfile = () =>
    setShowDropDownProfile(!showDropDownProfile);

  return (
    <div className="addbook--menu-container">
      <div className="transaction--menu-header">
        <div className="header--menu-logo">
          <img src="image/beranda/wow-icon.png" alt="wow-logo" />
        </div>
        <div className="header--menu-profile">
          <img
            style={{ display: "inline-block", position: "relative" }}
            src="image/beranda/admin-icon.png"
            alt="admin-avatar"
            onClick={handleShowDropDownProfile}
          />
          {showDropDownProfile ? (
            <div className="dropdown--menu-profile">
              <div className="dropdown--poligon">
                <img src="image/beranda/action-icon-2.png" alt="arrow" />
              </div>
              <div className="dropdown--menu-list">
                <div className="dropdown--addbook">
                  <Link to="add-book">
                    <BookIcon
                      style={{
                        color: "#929292",
                        fontSize: "30px",
                        marginTop: "4px",
                      }}
                    />
                    <p style={{ marginLeft: "10px" }}>Add Book </p>
                  </Link>
                </div>
                <div className="dropdown--logout">
                  <Link to="/">
                    <ExitToAppIcon
                      className="text-deactive"
                      style={{
                        fontSize: "30px",
                        marginTop: "4px",
                      }}
                    />
                    <p style={{ marginLeft: "10px" }}>Logout</p>
                  </Link>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="addbook--menu-body">
        <div className="addbook--body-title">
          <p>Add Book</p>
        </div>
        <div className="addbook--body-form">
          <form action="">
            <input
              type="text"
              placeholder="Title"
              className="form-control form-body-input"
            />
            <input
              type="text"
              placeholder="Publication Date"
              className="form-control form-body-input"
            />
            <input
              type="text"
              placeholder="Pages"
              className="form-control form-body-input"
            />
            <input
              type="text"
              placeholder="Author"
              className="form-control form-body-input"
            />
            <input
              type="text"
              placeholder="ISBN"
              className="form-control form-body-input"
            />
            <input
              type="text"
              placeholder="About This Book"
              className="form-control form-body-input-about"
            />
            <input type="file" id="actual-btn" hidden />
            <label
              style={{ marginTop: "30px" }}
              for="actual-btn"
              className="form-body-file"
            >
              <p>Attact Boook File</p>
              <img src="image/beranda/attact-icon-2.png" alt="attac-icon" />
            </label>
            <div className="form-body-submit">
              <input type="submit" value="Add Book" className="submit-btn" />
              <img src="image/beranda/addbook.png" alt="addbook" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
