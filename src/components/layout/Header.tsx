"use client";
import { BiSearch } from "react-icons/bi";
import { GoHeart } from "react-icons/go";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { selectCurrentUser } from "@/features/user/AuthSlice";
import { useSelector } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom"
// import { useDispatch } from "react-redux"
// import { logOut } from "../../features/user/AuthSlice"
const Header: React.FC = () => {
  const user = useSelector(selectCurrentUser);
  console.log(user);
  // const dispatch = useDispatch()
  // const handleLogout = () => {
  //     dispatch(logOut())
  // }
  return (
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
            <button className="flex items-center gap-2 font-medium text-[13px]">
              {<GoHeart />}
              <p>WISHLIST</p>
            </button>
            {/* cart */}
            <button className="flex items-center gap-2 font-medium text-[13px]">
              {<LiaShoppingBasketSolid />}
              <p>CART</p>
            </button>
            {/* <button className="p-2 rounded-full hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined">
                    notifications
                  </span>
                </button> */}
            {user ? (
              <button>
                <div
                  // 3. Kelas Tailwind CSS tetap sama seperti pada HTML asli
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                  // 4. Atribut 'style' diubah menjadi objek JavaScript.
                  //    Properti CSS 'background-image' diubah menjadi camelCase 'backgroundImage'.
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOwBL-ofY2S6Dohpxtezi9F0iKlgtnitrL5XY3pSbRj61yG0CzTDPVWj1h1HT6f-qS-cHYjVhpX3dWjIeKDJhpCtC1j_qjo5IBm6Z-V1BMqs1F08goAwf7AgpjSjGpxowBl2bwO5Uohq7Gt-E4fy4aV6akJEiNKRyC7xMS6EI6-EDcoMkU8zxvh8JdYAD6OuyceIcfsTV87snKC_1nNXkorWPFIYer2RiGfb-zX0TJfC7ty6mhE25wGnwjp-LZIIJZrGWLMr4a1ck")`,
                  }}
                >
                  {/* Konten di dalam div (jika ada) */}
                </div>
              </button>
            ) : (
              <Link to={"/login"} className="font-medium text-[13px] px-8 py-1 text-white bg-[#16A34A] hover:opacity-[0.8]">
                  login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
