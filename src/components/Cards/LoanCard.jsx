import React from "react";

const ProductCard = ({ imagePath, text, width }) => {
  return (
    <label
      className={`relative ${width ? width : "w-full  sm:w-[49%]"}  group `}
    >
      <input
        type="radio"
        name="loanType"
        className="absolute w-3 h-3 ml-auto bg-transparent border-2 border-gray-600 rounded-full appearance-none md:w-5 md:h-5 peer accent-blue-400 checked:bg-blue-800 bottom-4 right-4"
      />
      <div className="flex flex-col items-center bg-white rounded-2xl h-[9rem] md:h-[9rem]  p-6 w-full cursor-pointer hover:shadow-xl shadow-md transition-all duration-100 peer-checked:border-blue-800 peer-checked:border-[3.2px]">
        <div className="text-blue-800">
          <img className="w-16" src={imagePath} alt="" />
        </div>
        <div>
          <p className="text-sm font-semibold md:text-[1rem] mt-3">{text}</p>
        </div>
      </div>
    </label>
  );
};

export default ProductCard;
