import React, { useState, useEffect } from "react";
import "./Beranda.css";
import Profile from "../../Components/Profile";
import ComponentBeranda from "../../Components/ComponentBeranda";
import Subsciber from "../Subscibe/subscribe";
import ProfileUser from "../Proffile-active/ProfileUser";
import DetailBook from "../DetailBook/DetailBook";

const Beranda = () => {
  const [showPopupSubscribe, setShowPopupSubscribe] = useState(false);
  const [showPopupLogin, setShowPopupLogin] = useState(false);

  const [linkRender, setLinkRender] = useState({
    beranda: true,
    subscribe: false,
    profile: false,
    detailBook: false,
  });

  const username = "Edi Ganteng";
  const subscribe = false;

  const UserBookList = [
    {
      id: 1,
      img: "image/beranda/serankai.png",
      alt: "buku1",
      title: "Serangkai",
      author: "Valeri Patkar",
    },
    {
      id: 2,
      img: "image/beranda/serankai.png",
      alt: "buku1",
      title: "Serangkai",
      author: "Valeri Patkar",
    },
  ];

  const Books = [
    {
      id: 1,
      img: "image/beranda/serankai.png",
      alt: "buku1",
      title: "Serangkai",
      author: "Valeri Patkar",
    },
    {
      id: 2,
      img: "image/beranda/pekerjaan.png",
      alt: "buku2",
      title: "Z1 - Sd/Mi Buku Siswa Tematik Terapan",
      author: "Valeri Patkar",
    },
    {
      id: 3,
      img: "image/beranda/alam.png",
      alt: "buku3",
      title: "Kabar Rahasia Dari Alam Kubur",
      author: "DR. Kamil Yusuf Al-Atum",
    },
    {
      id: 4,
      img: "image/beranda/tess.png",
      alt: "buku4",
      title: "Tees on The Road",
      author: "Rachel Hartman",
    },
    {
      id: 5,
      img: "image/beranda/alam.png",
      alt: "buku3",
      title: "Kabar Rahasia Dari Alam Kubur",
      author: "DR. Kamil Yusuf Al-Atum",
    },
    {
      id: 6,
      img: "image/beranda/tess.png",
      alt: "buku4",
      title: "Tees on The Road",
      author: "Rachel Hartman",
    },
    {
      id: 7,
      img: "image/beranda/alam.png",
      alt: "buku3",
      title: "Kabar Rahasia Dari Alam Kubur",
      author: "DR. Kamil Yusuf Al-Atum",
    },
    {
      id: 8,
      img: "image/beranda/pekerjaan.png",
      alt: "buku3",
      title: "Kabar Rahasia Dari Alam Kubur",
      author: "DR. Kamil Yusuf Al-Atum",
    },
  ];
  const handleDetailBook = () => {
    setLinkRender({
      beranda: false,
      subscribe: false,
      profile: false,
      detailBook: true,
    });
  };

  const handleBeranda = () => {
    setLinkRender({
      beranda: true,
      subscribe: false,
      profile: false,
      detailBook: false,
    });
  };

  const handleSubsciber = () => {
    setLinkRender({
      beranda: false,
      subscribe: true,
      profile: false,
      detailBook: false,
    });
  };

  const handleProfileUser = () => {
    setLinkRender({
      beranda: false,
      subscribe: false,
      profile: true,
      detailBook: false,
    });
  };

  const handleShowPopup = () => {
    setLinkRender({
      beranda: true,
      subscribe: false,
      profile: false,
      detailBook: false,
    });
    handleShowPopupContent();
  };

  const handleClosePopupConntent = () => setShowPopupSubscribe(false);
  const handleShowPopupContent = () => setShowPopupSubscribe(true);
  const handleClosePopupConntentLogin = () => setShowPopupLogin(false);
  const handleShowPopupContentLogin = () => setShowPopupLogin(true);

  return (
    <div className="beranda-container">
      <div className="beranda--container-profile">
        <Profile
          handleShowPopupContentLogin={handleShowPopupContentLogin}
          linkRender={linkRender}
          handleBeranda={handleBeranda}
          handleSubsciber={handleSubsciber}
          handleProfileUser={handleProfileUser}
          username={username}
          subscribe={subscribe}
        />
      </div>
      <div className="beranda--container-content">
        {linkRender.subscribe ? (
          <Subsciber handleShowPopup={handleShowPopup} />
        ) : linkRender.profile ? (
          <ProfileUser
            UserBookList={UserBookList}
            handleDetailBook={handleDetailBook}
          />
        ) : linkRender.detailBook ? (
          <DetailBook />
        ) : (
          <ComponentBeranda
            showPopupLogin={showPopupLogin}
            handleClosePopupConntentLogin={handleClosePopupConntentLogin}
            showPopupSubscribe={showPopupSubscribe}
            handleClosePopupConntent={handleClosePopupConntent}
            subscribe={subscribe}
            Books={Books}
            handleDetailBook={handleDetailBook}
          />
        )}
      </div>
    </div>
  );
};

export default Beranda;
