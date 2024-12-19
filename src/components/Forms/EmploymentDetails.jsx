import React, { useState } from "react";
import MainButton from "../Buttons/MainButton";

const EmploymentDetails = () => {
  const [salary, setSalary] = useState(13000);
  const [pfDeducted, setPfDeducted] = useState(false);
  const [pfAmount, setPfAmount] = useState("");

  return (
    <div className="w-[90%] p-6 mx-auto bg-white rounded-2xl shadow-md ">
      <h2 className="mb-6 text-lg font-semibold text-gray-700">
        Employment Details
      </h2>

      {/* Employer Name */}
      <label className="block mb-2 text-gray-700 font text-start">
        Employer Name
      </label>
      <input
        type="text"
        placeholder="Enter Employer Name"
        className="w-full px-4 py-2 mb-4 bg-gray-100 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
      />

      {/* Type of Organization */}
      <label className="block mb-2 text-gray-700 font text-start">
        Type Of Organization
      </label>
      <select className="w-full px-4 py-2 mb-4 bg-gray-100 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
        <option>Select Type Of Organization</option>
        <option>Private</option>
        <option>Government</option>
        <option>Non-Profit</option>
      </select>

      {/* Salary Credited To Bank */}
      <label className="block mb-2 text-gray-700 font text-start">
        Salary Credited To Bank
      </label>
      <select className="w-full px-4 py-2 mb-4 bg-gray-100 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
        <option>Select Salary Credited To Bank</option>
        <option>Yes</option>
        <option>No</option>
      </select>

      {/* Designation */}
      <label className="block mb-2 text-gray-700 font text-start">
        Designation
      </label>
      <input
        type="text"
        placeholder="Enter Designation"
        className="w-full px-4 py-2 mb-4 bg-gray-100 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
      />

      {/* Salary Slider */}
      <label className="block mb-2 text-gray-700 font text-start">
        My Salary (Month)
      </label>

      <div className="relative mb-4">
        <input
          type="range"
          class="w-full h-3 bg-blue-100 rounded-lg appearance-none cursor-pointer focus:outline-none "
          min="0"
          max="550000"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <div class="flex items-center mt-3 justify-between text-lg text-blue-800 mb-2">
          <span>₹{salary}</span>
          <span>₹5,50,000</span>
        </div>
        <div className="flex justify-end w-full">
          {" "}
          <div class="w-32  py-2 border border-gray-700 rounded-lg text-gray-700 text-xl bg-white">
            ₹{salary}
          </div>
        </div>
      </div>

      {/* PF Deduction */}
      <label className="block mb-2 font-medium text-gray-700 text-start">
        Is P.F Deducted From The Salary
      </label>
      <div className="flex items-center gap-4 mb-4">
        <label className="flex items-center">
          <input
            type="radio"
            name="pfDeduction"
            value="yes"
            checked={pfDeducted}
            onChange={() => setPfDeducted(true)}
            className="w-3 h-3 ml-auto mr-2 bg-transparent border-2 border-gray-600 rounded-full appearance-none md:w-5 md:h-5 peer accent-blue-400 checked:bg-blue-800 bottom-4 right-4"
          />
          If Yes: Monthly P.F Deducted Amount (₹)
        </label>

        <label className="flex items-center">
          <input
            type="radio"
            name="pfDeduction"
            value="no"
            checked={!pfDeducted}
            onChange={() => {
              setPfDeducted(false);
              setPfAmount("");
            }}
            className="w-3 h-3 ml-auto mr-2 bg-transparent border-2 border-gray-600 rounded-full appearance-none md:w-5 md:h-5 peer accent-blue-400 checked:bg-blue-800 bottom-4 right-4"
          />
          No
        </label>
      </div>

      {/* Submit Button */}

      <div className="flex justify-between">
        {pfDeducted ? (
          <input
            type="number"
            placeholder="Enter P.F Amount"
            value={pfAmount}
            onChange={(e) => setPfAmount(e.target.value)}
            className="px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg w-[50%] focus:ring-blue-500 focus:border-blue-500"
          />
        ) : (
          <div className="w-[50%]"></div>
        )}
        <MainButton text={"Submit & Next"} />
      </div>
    </div>
  );
};

export default EmploymentDetails;
