import React, { useState } from "react";
import MainButton from "../Buttons/MainButton";
import ShowError from "../Error/ShowError";
import useContextData from "../../Hooks/useContextData";

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    pinCode: "",
    state: "select state",
    city: "select city",
    dob: "",
    maritalStatus: "Married",
    consent: false,
  });
  const [err, setErr] = useState(false);
  const { navigate } = useContextData();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, consent: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /* formData.fullName === ""
      ? setErr(true)
      : navigate("/dashboard/Loan_Amount"); */

    navigate("/dashboard/Loan_Amount");

    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="h-full max-w-[90%] p-6 mx-auto bg-white shadow-lg rounded-3xl">
      <h2 className="mb-8 text-2xl font-semibold text-start">
        Profile Information
      </h2>
      <form className="space-y-8">
        <div className="flex flex-col gap-8">
          <div className="w-full">
            <label className="block font-medium text-gray-700 text-md text-start">
              Full Name As Pan
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 mt-1 bg-transparent h-[50px] border border-gray-200 rounded-xl"
            />
            {err && (
              <ShowError
                text={
                  "Special characters and numbers are not allowed in the name"
                }
              />
            )}
          </div>
          <div className="w-full">
            <label className="block font-medium text-gray-700 text-md text-start">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mt-1 bg-transparent h-[50px] border border-gray-300 rounded-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-8 md:grid-cols-12">
          <div className="col-span-4">
            <label className="block font-medium text-gray-700 text-md text-start">
              PIN Code
            </label>
            <input
              type="text"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              className="w-full p-2 mt-1 bg-transparent h-[50px] border border-gray-300 rounded-xl"
            />
          </div>
          <div className="col-span-4">
            <label className="block font-medium text-gray-700 text-md text-start">
              State
            </label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full p-2 mt-1 bg-transparent h-[50px] border border-gray-300 rounded-xl"
            >
              <option value="select state">select state</option>
              {/* Add state options here */}
            </select>
          </div>
          <div className="col-span-4">
            <label className="block font-medium text-gray-700 text-md text-start">
              City Of Residence
            </label>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 mt-1 bg-transparent h-[50px] border border-gray-300 rounded-xl"
            >
              <option value="select city">select city</option>
              {/* Add city options here */}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          <div className="relative col-span-6">
            <label className="block font-medium text-gray-700 text-md text-start">
              Date Of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="dob w-full p-2 mt-1 bg-transparent h-[50px] border border-gray-300 rounded-xl"
            />
            <img
              className="absolute top-[30px] right-[3px] cursor-pointer active:scale-95 transition-all"
              src="/images/date.png"
              alt="date"
              onClick={() =>
                document.querySelector('input[name="dob"]').showPicker()
              }
            />
          </div>

          <div className="col-span-6">
            <label className="block font-medium text-gray-700 text-md text-start">
              Marital Status
            </label>
            <select
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              className="w-full p-2 mt-1 bg-transparent h-[50px] border border-gray-300 rounded-xl"
            >
              <option value="Married">Married</option>
              <option value="Single">Single</option>
              {/* Add other marital status options here */}
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleCheckboxChange}
            className="w-5 h-5"
          />
          <span className="text-sm text-start">
            I Hereby Confirm My Consent And Authorize Samriddh And Its
            Affiliates To Contact Me Through SMS / Call / WhatsApp On The Mobile
            Number Provided.{" "}
            <a href="#" className="font-semibold text-black">
              Read More...
            </a>
          </span>
        </div>

        <div className="mt-1 mb-2 text-end">
          <MainButton onClick={handleSubmit} text={"Submit & Next"} />
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
