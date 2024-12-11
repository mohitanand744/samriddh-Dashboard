import React from "react";

const ContactInfo = () => {
  return (
    <div className="max-w-md p-4 mx-auto bg-white shadow-lg rounded-2xl">
      <h2 className="mb-6 text-xl font-medium text-center">Contact us</h2>
      <div className="flex flex-row justify-center gap-4">
        <div className="flex-1 ">
          <a
            href="mailto:info@samariddh.com"
            className="flex flex-col items-center justify-center text-center bg-white text-gray-800 font-medium py-3 rounded-2xl px-1 sm:px-4 border-[2px] border-blue-900 transition-all duration-300 hover:scale-105"
          >
            <div className="mb-2 text-2xl text-indigo-500">
              <i className="fas fa-envelope"></i>
            </div>
            <span className="font-semibold">Email us</span>
            <span className="text-sm text-gray-500">info@samariddh.com</span>
          </a>
        </div>
        <div className="flex-1">
          <a
            href="tel:+14194057399"
            className="flex flex-col items-center justify-center text-center bg-white text-gray-800 font-medium py-3 rounded-2xl px-1 sm:px-4 border-[2px] border-blue-900 transition-all duration-300 hover:scale-105"
          >
            <div className="mb-2 text-2xl text-indigo-500">
              <i className="fas fa-comment-dots"></i>
            </div>
            <span className="font-semibold">Phone</span>
            <span className="text-sm text-gray-500">+1 419 405 7399</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
