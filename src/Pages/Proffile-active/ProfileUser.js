import React from "react";
import "./ProfileUser.css";
import EmailIcon from "@material-ui/icons/Email";
import WcIcon from "@material-ui/icons/Wc";
import CallIcon from "@material-ui/icons/Call";
import HomeIcon from "@material-ui/icons/Home";
import UserBooks from "../../Components/UserBooks";

const ProfileUser = ({ UserBookList, handleDetailBook }) => {
  return (
    <div className="profile--user-container">
      <h3>Profile</h3>
      <div className="profile--user-description">
        <div className="user-description-menu">
          <div className="user--description">
            <div className="description--icon">
              <EmailIcon className="user-icon" />
            </div>
            <div className="description--text">
              <p>egigans@gmail.com</p>
              <small>Email</small>
            </div>
          </div>
          <div className="user--description">
            <div className="description--icon">
              <WcIcon className="user-icon" />
            </div>
            <div className="description--text">
              <p>Male</p>
              <small>Gender</small>
            </div>
          </div>
          <div className="user--description">
            <div className="description--icon">
              <CallIcon className="user-icon" />
            </div>
            <div className="description--text">
              <p>0812-8623-8911</p>
              <small>Mobile Phone</small>
            </div>
          </div>
          <div className="user--description">
            <div className="description--icon">
              <HomeIcon className="user-icon" />
            </div>
            <div className="description--text">
              <p>Perumahan Pertama Bintaro Residence C-3</p>
              <small>Address</small>
            </div>
          </div>
        </div>
        <div className="user--descriptionn-image">
          <img src="image/beranda/egi.png" alt="foto-profile" />
          <div className="user--description-button">
            <p>Edit profile</p>
          </div>
        </div>
      </div>
      <div className="profile--description-books">
        <h3>My List Books</h3>
        <div className="user--book-container">
          {UserBookList.map((book, index) => (
            <UserBooks
              handleDetailBook={handleDetailBook}
              book={book}
              key={book.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
