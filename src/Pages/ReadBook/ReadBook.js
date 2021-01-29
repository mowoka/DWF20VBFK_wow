import React, { useState } from "react";
import "./ReadBook.css";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const ReadBook = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="read--book-container">
      <div className="read-title">
        <img
          style={{ height: "50px", width: "65px" }}
          src="image/beranda/wow.png"
          alt="wow"
        />
        <img
          style={{ height: "50px", width: "100px", marginTop: "-30px" }}
          src="image/beranda/wow_2.png"
          alt="wow2"
        />
      </div>
      <div className="read-book">
        <Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    </div>
  );
};

export default ReadBook;
