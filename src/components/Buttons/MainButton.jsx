import React from "react";
import { Link } from "react-router-dom";

const MainButton = ({ text, navigate, onClick }) => {
  return (
    <Link to={navigate}>
      <button
        onClick={(e) => onClick(e)}
        className="bg-[#45C2EE] hover:opacity-85 hover:scale-105 text-white px-10 rounded-xl py-2 active:scale-90 transition-all ease-in"
      >
        {text}
      </button>
    </Link>
  );
};

export default MainButton;
