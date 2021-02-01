import React from "react";
import { Modal, Button } from "react-bootstrap";
import Headline from "./Headline";
import ListBooks from "./ListBooks";
import Popup from "./ComponentPopup";

const ComponentBeranda = ({
  Books,
  handleDetailBook,
  showPopupSubscribe,
  handleClosePopupConntent,
  handleShowPopupContentLogin,
  handleClosePopupConntentLogin,
  showPopupLogin,
  subscribe,
}) => {
  return (
    <>
      <Modal show={showPopupSubscribe} onHide={handleClosePopupConntent}>
        <Modal.Body>
          <div className="popup--input-subscribe">
            <p>
              Thank you for subscribing to premium, your premium package will be
              active after our admin approves your transaction, thank you
            </p>
          </div>
        </Modal.Body>
      </Modal>
      {!subscribe ? (
        <Modal show={showPopupLogin} onHide={handleClosePopupConntentLogin}>
          <Modal.Body>
            <div className="popup--input-notif">
              <p>please make a payment to read the latest books</p>
            </div>
          </Modal.Body>
        </Modal>
      ) : null}

      <div className="content--stage-one">
        <Headline />
      </div>
      <div className="content--stage-two">
        <div className="book--content">
          <h3>List Book</h3>
        </div>
        <div className="book--content-menu">
          {Books.map((book, index) => (
            <ListBooks book={book} handleDetailBook={handleDetailBook} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ComponentBeranda;
