import React from "react";

const UserBooks = ({ book, handleDetailBook }) => {
  return (
    <div
      onClick={handleDetailBook}
      key={book.id}
      className="user--book-content"
    >
      <img src={book.img} alt={book.alt} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
    </div>
  );
};

export default UserBooks;
