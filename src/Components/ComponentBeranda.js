import React from "react";
import Headline from "./Headline";
import ListBooks from "./ListBooks";
import Popup from "./ComponentPopup";

const ComponentBeranda = ({
  Books,
  handleDetailBook,
  showPopup,
  subscribe,
}) => {
  return (
    <>
      <div className="content--stage-one">
        {showPopup ? <Popup subscribe={subscribe} /> : null}
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
