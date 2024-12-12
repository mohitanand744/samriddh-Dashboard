import React from "react";

const EmploymentCard = ({ imagePath, text }) => {
  return (
    <label className="relative hover:scale-105 transition-all w-full  sm:w-[48%]  group">
      <input
        type="radio"
        name="EmploymentType"
        className="absolute w-3 h-3 ml-auto bg-transparent border-2 border-gray-600 rounded-full appearance-none md:w-5 md:h-5 peer accent-blue-400 checked:bg-blue-800 bottom-4 right-4"
      />
      <div className="flex flex-col items-center bg-white rounded-2xl h-[9rem] md:h-[10rem]   p-6 w-full cursor-pointer hover:shadow-xl shadow-md transition-all duration-100 peer-checked:border-blue-800 peer-checked:border-[3.2px]">
        <div className="text-blue-800">
          <img src={imagePath} alt="" />
        </div>
        <div>
          <p className="text-sm font-semibold md:text-[1rem] mt-3">{text}</p>
        </div>
      </div>
    </label>
  );
};

export default EmploymentCard;
