import React from "react";
import MainButton from "../Buttons/MainButton";

const DocumentUpload = () => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-md w-[90%] mx-auto">
      <h2 className="mb-6 text-xl font-semibold text-black text-start">
        Document Upload
      </h2>

      <div className="flex flex-wrap items-center justify-between w-full gap-5 mb-8">
        <div className="w-full mb-6 md:flex-1">
          <label
            htmlFor="salaryBank"
            className="block mb-1 text-sm font-medium text-gray-700 text-start"
          >
            Identity Proof
          </label>
          <select
            id="salaryBank"
            className="block w-full p-3 text-sm bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option>select Identity Proof</option>
          </select>
        </div>
        <div className="w-full md:w-44">
          <p className="mb-2">Upload Identity Proof</p>
          <div className="relative flex items-center justify-center w-full h-24 overflow-hidden border-2 border-gray-300 border-dashed rounded-xl">
            <label
              htmlFor={`file`}
              type="button"
              className="flex items-center justify-center w-8 h-8 text-xl font-medium text-white bg-gray-500 rounded-full hover:scale-105"
            >
              +
            </label>

            <input type="file" id={`file`} className="hidden" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between w-full gap-5 mb-4">
        <div className="w-full mb-6 md:flex-1">
          <label
            htmlFor="salaryBank"
            className="block mb-1 text-sm font-medium text-gray-700 text-start"
          >
            Identity Proof
          </label>
          <select
            id="salaryBank"
            className="block w-full p-3 text-sm bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option>select Identity Proof</option>
          </select>
        </div>
        <div className="w-full md:w-44">
          <p className="mb-2">Upload Identity Proof</p>
          <div className="relative flex items-center justify-center w-full h-24 overflow-hidden border-2 border-gray-300 border-dashed rounded-xl">
            <label
              htmlFor={`file`}
              type="button"
              className="flex items-center justify-center w-8 h-8 text-xl font-medium text-white bg-gray-500 rounded-full hover:scale-105"
            >
              +
            </label>

            <input type="file" id={`file`} className="hidden" />
          </div>
        </div>
      </div>
      <p className="mb-2 text-start">Upload Bank Statements</p>

      <div className="grid items-center grid-cols-12 gap-2">
        <div className="relative flex items-center justify-center h-24 col-span-12 overflow-hidden border-2 border-gray-300 border-dashed md:col-span-4 rounded-xl">
          <label
            htmlFor={`file`}
            type="button"
            className="flex items-center justify-center w-8 h-8 text-xl font-medium text-white bg-gray-500 rounded-full hover:scale-105"
          >
            +
          </label>

          <input
            type="file"
            id={`file`}
            className="hidden"
            onChange={(e) => handleSelectedImages(e, index)}
          />
        </div>
        <div className="relative flex items-center justify-center h-24 col-span-12 overflow-hidden border-2 border-gray-300 border-dashed md:col-span-4 rounded-xl">
          <label
            htmlFor={`file`}
            type="button"
            className="flex items-center justify-center w-8 h-8 text-xl font-medium text-white bg-gray-500 rounded-full hover:scale-105"
          >
            +
          </label>

          <input
            type="file"
            id={`file`}
            className="hidden"
            onChange={(e) => handleSelectedImages(e, index)}
          />
        </div>
        <div className="relative flex items-center justify-center h-24 col-span-12 overflow-hidden border-2 border-gray-300 border-dashed md:col-span-4 rounded-xl">
          <label
            htmlFor={`file`}
            type="button"
            className="flex items-center justify-center w-8 h-8 text-xl font-medium text-white bg-gray-500 rounded-full hover:scale-105"
          >
            +
          </label>

          <input
            type="file"
            id={`file`}
            className="hidden"
            onChange={(e) => handleSelectedImages(e, index)}
          />
        </div>
      </div>
      <li className="mt-3 text-md text-start">
        Last 6 months salary account transactions.
      </li>

      <div className="flex items-center gap-2 mt-5 pe-8">
        <input type="checkbox" name="consent" className="w-5 h-5" />
        <span className="text-sm text-start">
          I Hereby Confirm My Consent And Authorize Samriddh And Its Affiliates
          To Contact Me Through SMS / Call / WhatsApp On The Mobile Number
          Provided.{" "}
          <a href="#" className="font-semibold text-black">
            Read More...
          </a>
        </span>
      </div>

      <div className="mt-5 mb-2 text-end">
        <MainButton text={"Submit & Next"} />
      </div>
    </div>
  );
};

export default DocumentUpload;
