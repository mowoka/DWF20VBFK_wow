import React, { useState } from "react";
import "./Transaction.css";
import { TransactionData } from "./TransactionData";
import TransactionComponent from "../../Components/TransactionComponent";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import BookIcon from "@material-ui/icons/Book";

const Transaction = () => {
  const [showDropDownProfile, setShowDropDownProfile] = useState(false);

  const handleShowDropDownProfile = () =>
    setShowDropDownProfile(!showDropDownProfile);

  return (
    <div className="transaction--container">
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
                  <Link to="/add-book">
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
      <div className="transaction--menu-body">
        <div className="body--menu-title">
          <p>Incoming Transaction</p>
        </div>
        <div className="body--menu-table">
          <table>
            <thead>
              <tr
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  backgroundColor: "#f2f2f2",
                  fontSize: "14px",
                  color: "#ff0000",
                }}
              >
                <th>No</th>
                <th>Users</th>
                <th>Bukti Transfer</th>
                <th>Remaining Active</th>
                <th>Status User</th>
                <th>Status Payment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {TransactionData.map((data, index) => (
                <TransactionComponent index={index} data={data} key={data.id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
