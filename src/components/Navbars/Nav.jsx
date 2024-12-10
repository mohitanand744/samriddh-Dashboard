import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("ENG");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (lang) => {
    setSelectedLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-800 navbar  justify-between px-9 w-full  min-h-[90px]">
      <img
        className="w-[2rem] block lg:hidden active:scale-90 transition-all duration-150 ease-out"
        src="https://img.icons8.com/fluency/48/menu--v1.png"
        alt=""
      />
      <div className="flex-col hidden sm:flex">
        <a className="text-lg font-bold text-white sm:text-xl ">Hello, Admin</a>
        <small className="text-white">Welcome Back!</small>
      </div>
      <div className="flex-none">
        {/*  <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div> */}
        <div className="relative flex items-center justify-center bg-blue-500">
          {/* Dropdown Trigger */}
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-2 px-3 py-1 bg-white rounded-md shadow-md hover:shadow-lg"
          >
            <span className="text-sm font-medium text-black">
              {selectedLanguage}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-6 text-blue-500 transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute left-0 w-full bg-white rounded-md shadow-md top-12">
              <ul className="py-2">
                {["ENG", "SPA", "FRA", "GER"].map((lang) => (
                  <li
                    key={lang}
                    onClick={() => selectLanguage(lang)}
                    className="px-4 py-2 text-sm text-black cursor-pointer hover:bg-gray-100"
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="mx-5 w-[2.7rem] h-[2.7rem] rounded-full bg-white flex justify-center items-center">
          <img
            className="w-[1.6rem] hover:scale-110 transition-all duration-150 ease-linear active:scale-100"
            src="https://img.icons8.com/ios/50/appointment-reminders--v1.png"
            alt=""
          />
        </div>
        <div className=" dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="p-[2px] border-2 border-white rounded-full btn btn-ghost btn-circle avatar"
          >
            <div className="w-[5rem] rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://cdn.prod.website-files.com/6600e1eab90de089c2d9c9cd/662c092880a6d18c31995dfd_66236531e8288ee0657ae7a7_Business%2520Professional.webp"
              />
            </div>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#2C5AA7] border-[3px] flex flex-col justify-between shadow-2xl text-lg border-white text-white rounded-box z-[1] mt-3 w-52 h-52 p-2 "
          >
            <div className="">
              <Link to={"/dashboard/profile"}>
                <li className="hover:bg-[]">Profile</li>
              </Link>
              <li className="hover:bg-[]">Settings</li>
              <li className="hover:bg-[]">Dashboard Settings</li>
            </div>
            <p className="font-semibold sm:hidden">Hello, Admin</p>
            <li className="w-full py-2 text-center border border-red-500 rounded-xl active:bg-slate-700 active:text-white">
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
