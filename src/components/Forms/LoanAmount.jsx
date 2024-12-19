import React, { useState } from "react";
import MainButton from "../Buttons/MainButton";

const LoanAmount = () => {
  const [loanAmount, setLoanAmount] = useState(0);

  return (
    <div class="p-6 bg-white rounded-2xl shadow-md w-[90%] mx-auto">
      <label class="block text-center font-medium text-gray-700 mb-4">
        Loan Amount Required
      </label>

      <input
        type="range"
        class="w-full h-3 bg-blue-100 rounded-lg appearance-none cursor-pointer focus:outline-none "
        min="0"
        max="550000"
        value={loanAmount}
        onChange={(e) => setLoanAmount(Number(e.target.value))}
      />
      <div class="flex items-center mt-3 justify-between text-lg text-blue-800 mb-2">
        <span>₹{loanAmount}</span>
        <span>₹5,50,000</span>
      </div>
      <div className="flex justify-end w-full">
        {" "}
        <div class="w-32  py-2 border border-gray-700 rounded-lg text-gray-700 text-xl bg-white">
          ₹{loanAmount}
        </div>
      </div>

      <label class="block text-start mt-6 font-medium text-gray-700">
        Purpose Of Loan
      </label>
      <select class="w-full bg-gray-100 mt-1 px-4 py-2  rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-600">
        <option>Medical</option>
        <option>Education</option>
        <option>Other</option>
      </select>

      <label class="block text-start mt-4 font-medium text-gray-700">
        Loan Tenure (Months)
      </label>
      <select class="w-full bg-gray-100 mt-1 px-4 py-2  rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-600">
        <option>12</option>
        <option>24</option>
        <option>36</option>
        <option>48</option>
        <option>60</option>
      </select>

      <div className="flex justify-end mt-5">
        <MainButton
          navigate={"/dashboard/employment_details"}
          text={"Submit & Next"}
        />
      </div>
    </div>
  );
};

export default LoanAmount;
