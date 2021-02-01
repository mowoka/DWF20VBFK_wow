import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

const TransactionComponent = ({ index, data }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const handleDropDownMenu = () => setShowDropDown(!showDropDown);
  return (
    <tr key={data.id}>
      <td>{index + 1}</td>
      <td>{data.name}</td>
      <td>{data.buktiTransfer}</td>
      <td>{data.RemainingActive} / Hari</td>
      <td
        className={
          data.StatusUser === "Active" ? "text-active" : "text-deactive"
        }
      >
        {data.StatusUser}
      </td>
      <td
        className={
          data.StatusPayment === "Apporve"
            ? "text-active"
            : data.StatusPayment === "Cancel"
            ? "text-deactive"
            : "text-warning"
        }
      >
        {data.StatusPayment}
      </td>
      <td>
        <img
          src="image/beranda/action-icon.png"
          alt="icon action"
          onClick={handleDropDownMenu}
          style={{ display: "inline-block", position: "relative" }}
          className="--cursor-pointer"
        />
        {showDropDown ? (
          <div className="dropdown--menu">
            <p className="text-active --cursor-pointer">Approved</p>
            <p className="text-deactive --cursor-pointer">Cancel</p>
          </div>
        ) : null}
      </td>
    </tr>
  );
};

export default TransactionComponent;
