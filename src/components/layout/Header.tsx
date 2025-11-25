"use client";
import { BiSearch } from "react-icons/bi";
import { GoHeart } from "react-icons/go";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { selectCurrentUser } from "@/features/user/AuthSlice";
import { useSelector } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import PopupLoginPrompt from "../PopUpLogin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AvatarMenu from "../AvatarMenu";
import LogoutPopup from "../PopUpLogout";
// import { Link } from "react-router-dom"
// import { useDispatch } from "react-redux"
// import { logOut } from "../../features/user/AuthSlice"
const Header: React.FC = () => {
  const user = useSelector(selectCurrentUser);
  const [showPopup, setShowPopup] = useState(false);
  const [open, setOpen] = useState(false);
  // const isAuthenticated = false;  // ganti dengan logic auth kamu
  const navigate = useNavigate()
  const handleOpenChart = () => {
    if (user) {
      setShowPopup(false);
      navigate('/cart')
    } else {
      setShowPopup(true)
    }
  };

  const handleOpenWishlist = () => {
    if (user) {
      setShowPopup(false);
      // navigasi ke wishlist
    } else {
      setShowPopup(true)
    }
  };
  console.log(user);
const handleOpenPopup = () => {
  setOpen(true);
};
  return (
    <>
    <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-border-light dark:border-border-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <a
              className="flex items-center gap-2 text-xl font-bold text-primary"
              href="/"
            >
              <span className="material-symbols-outlined text-3xl">grass</span>
              <span>LihatKebunku</span>
            </a>
            <nav className="hidden md:flex items-center gap-6">
              <a
                className="text-sm font-medium hover:text-primary transition-colors"
                href="/"
              >
                Beranda
              </a>
              <a
                className="text-sm font-medium hover:text-primary transition-colors"
                href="#"
              >
                Tentang
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            {/* <div className="hidden md:block relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-light dark:text-muted-dark">
                    search
                  </span>
                  <input
                    className="form-input w-48 bg-input-light dark:bg-input-dark border-transparent focus:ring-primary focus:border-primary rounded-full pl-10 pr-4 py-2 text-sm"
                    placeholder="Search"
                    type="text"
                  />
                </div> */}
            {/* search */}
            <button className="flex items-center gap-2 font-medium text-[13px]">
              {<BiSearch />}
              <p>SEARCH</p>
            </button>
            {/* wishlist */}
            <button className="flex items-center gap-2 font-medium text-[13px]" onClick={handleOpenWishlist}>
              {<GoHeart />}
              <p>WISHLIST</p>
            </button>
            {/* cart */}
            <button className="flex items-center gap-2 font-medium text-[13px]" onClick={handleOpenChart}>
              {<LiaShoppingBasketSolid />}
              <p>CART</p>
            </button>
            {/* <button className="p-2 rounded-full hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined">
                    notifications
                  </span>
                </button> */}
            {user ? (
              <AvatarMenu onOpen = {handleOpenPopup}/>
            ) : (
              <Link to={"/login"} className="font-medium text-[13px] px-8 py-1 text-white bg-[#004e1d] hover:opacity-[0.8]">
                  login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
    <div>{showPopup && <PopupLoginPrompt onClose={() => setShowPopup(false)} />}</div>
    <LogoutPopup isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Header;
