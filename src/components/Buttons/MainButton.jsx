import React from "react";

const MainButton = ({ text }) => {
  return (
    <button className="bg-[#45C2EE] hover:opacity-85 hover:scale-105 text-white px-16 rounded-xl py-2 active:scale-90 transition-all ease-in">
      {text}
    </button>
  );
};

export default MainButton;
