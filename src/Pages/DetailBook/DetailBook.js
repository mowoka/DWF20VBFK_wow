import React, { useState } from "react";
import "./DetailBook.css";
import AddIcon from "@material-ui/icons/Add";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const DetailBook = () => {
  const booksList = true;

  return (
    <>
      <div className="book--detail-container">
        <div className="book--detail-title">
          <div className="detail-content-image">
            <img src="image/beranda/tess.png" alt="gambar-buku" />
          </div>
          <div className="detail-content-description">
            <div className="content-book-title">
              <h2>Tess on the Road</h2>
              <p>Rachel Hartman</p>
            </div>
            <div className="content-book-publish">
              <h2>Publication date</h2>
              <p>April 2020</p>
            </div>
            <div className="content-book-page">
              <h2>Pages</h2>
              <p>436</p>
            </div>
            <div className="content-book-Type">
              <h2>ISBN</h2>
              <p>9781281381793</p>
            </div>
          </div>
        </div>
        <div className="book--detail-description">
          <div className="--detail-description-title">
            <h2>About This Book</h2>
          </div>
          <div className="--detail-description-text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply
              random text. It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old. Richard McClintock, a
              Latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure Latin words, consectetur, from a Lorem
              Ipsum passage, and going through the cites of the word in
              classical literature, discovered the undoubtable source. Lorem
              Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
              Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
              written in 45 BC. This book is a treatise on the theory of ethics,
              very popular during the Renaissance. The first line of Lorem
              Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
              section 1.10.32. It is a long established fact that a reader will
              be distracted by the readable content of a page when looking at
              its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </p>
          </div>
        </div>
        <div className="book-detail-action">
          <div className={booksList ? "action-adding" : "active"}>
            <p>Add My List</p>
            <AddIcon className="add-btn" />
          </div>

          <div className="action-read">
            <p>Read Book </p>
            <ChevronRightIcon className="read-btn" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailBook;
