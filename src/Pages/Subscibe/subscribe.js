import React from "react";
import "./subcribe.css";
import Profile from "../../Components/Profile";
import { Form } from "react-bootstrap";
import AttachmentIcon from "@material-ui/icons/Attachment";

const subscribe = ({ handleShowPopup }) => {
  const username = "Edi Ganteng";
  const subscribe = false;

  return (
    // <div className="beranda-container">
    //   <div className="beranda--container-profile">
    //     <Profile username={username} subscribe={subscribe} />
    //   </div>
    //   <div className="beranda--container-content">
    <div className="subscribe--container">
      <div className="subscribe--content">
        <h3>Premium</h3>
        <div className="subscribe--description">
          <p>Pay now and access all the best latest books from</p>
          <img src="image/beranda/wow-small.png" alt="small-wow" />
        </div>
        <div className="subscribe--phone">
          <img src="image/beranda/wow-small.png" alt="small-wow" />
          <p> : 083821148288</p>
        </div>
        <div className="subscribe--forms">
          <form action="">
            <Form.Group controlId="formGroupEmail">
              <Form.Control
                type="text"
                placeholder="Input your account number"
              />
            </Form.Group>
            <input type="file" id="actual-btn" hidden />
            <label for="actual-btn" className="form-file">
              Attact proof of transfer
              <AttachmentIcon />
            </label>
            <button
              onClick={handleShowPopup}
              className="btn btn-danger btn-sumbit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default subscribe;
