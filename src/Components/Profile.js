import React from "react";
import { Link } from "react-router-dom";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";

const Profile = ({
  linkRender,
  handleBeranda,
  handleSubsciber,
  handleProfileUser,
  username,
  subscribe,
}) => {
  return (
    <div className="profile-container">
      <div className="profile--content-user">
        <img onClick={handleBeranda} src="image/beranda/wow.png" alt="wow" />
        <img onClick={handleBeranda} src="image/beranda/wow_2.png" alt="wow" />
        <img src="image/beranda/user.png" alt="user" />
        <h2>{username}</h2>
        <p className={subscribe ? "text-success" : "text-danger"}>
          {subscribe ? "Subscribed" : "Not Subscribed Yet"}
        </p>
      </div>
      <div className="profile--content-menu">
        <div className="profile-icon start-line">
          <PersonOutlineOutlinedIcon
            className={linkRender.profile ? "text-danger" : null}
            style={{ fontSize: "30px" }}
          />
          <Link
            className={linkRender.profile ? "text-danger" : null}
            onClick={handleProfileUser}
          >
            Profile
          </Link>
        </div>
        <div className="profile-icon end-line">
          <SubscriptionsOutlinedIcon
            className={linkRender.subscribe ? "text-danger" : null}
            style={{ fontSize: "30px" }}
          />
          <Link
            className={linkRender.subscribe ? "text-danger" : null}
            onClick={handleSubsciber}
          >
            Subscibe
          </Link>
        </div>
        <div className="profile-icon">
          <ExitToAppOutlinedIcon style={{ fontSize: "30px" }} />
          <Link to="/">Logout</Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
