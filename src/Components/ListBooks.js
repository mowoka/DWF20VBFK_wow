import React from "react";

const ListBooks = ({ book, handleDetailBook }) => {
  return (
    <div onClick={handleDetailBook} className="content-menu" key={book.id}>
      <img src={book.img} alt={book.alt} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
    </div>
  );
};

export default ListBooks;
