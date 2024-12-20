import React, { useState } from "react";
import MainButton from "../Buttons/MainButton";

const BackDetails = () => {
  const [showEMIInput, setShowEMIInput] = useState(false);
  const [selectedImages, setSelectedImages] = useState([null, null, null]);
  const [loading, setLoading] = useState([false, false, false]);

  const handleEMIChange = (e) => {
    setShowEMIInput(e.target.value === "yes");
  };

  const handleSelectedImages = (e, index) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      const loadingState = [...loading];

      loadingState[index] = true;

      setLoading(loadingState);

      setTimeout(() => {
        const imageURL = URL.createObjectURL(selectedImage);
        console.log(imageURL);

        const updatedImages = [...selectedImages];

        updatedImages[index] = imageURL;

        setSelectedImages(updatedImages);

        loadingState[index] = false;

        setLoading(loadingState);
      }, 2000);
    }
  };

  const handelCencleImage = (index) => {
    const updatedImages = [...selectedImages];

    updatedImages[index] = null;

    setSelectedImages(updatedImages);
  };
  return (
    <>
      <div className="p-6 bg-white rounded-2xl shadow-md w-[90%] mx-auto">
        <h2 className="mb-6 text-xl font-semibold text-black text-start">
          Bank Details
        </h2>

        <div className="mb-6">
          <label
            htmlFor="salaryBank"
            className="block mb-1 text-sm font-medium text-gray-700 text-start"
          >
            Salary Credited To Bank
          </label>
          <select
            id="salaryBank"
            className="block w-full p-3 text-sm bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option>Select Salary Credited To Bank</option>
          </select>
        </div>

        <div className="mb-6">
          <p className="block mb-2 text-sm font-medium text-gray-700 text-start">
            Existing Loans/EMI Payments
          </p>
          <div className="flex items-center gap-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="emi"
                value="yes"
                onChange={handleEMIChange}
                className="w-3 h-3 ml-auto mr-2 bg-transparent border-2 border-gray-600 rounded-full appearance-none md:w-5 md:h-5 peer accent-blue-400 checked:bg-blue-800 bottom-4 right-4"
              />
              <span className="ml-2 text-sm text-gray-700">
                If Yes: Monthly EMI Amount (₹)
              </span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="emi"
                value="no"
                onChange={handleEMIChange}
                className="w-3 h-3 ml-auto mr-2 bg-transparent border-2 border-gray-600 rounded-full appearance-none md:w-5 md:h-5 peer accent-blue-400 checked:bg-blue-800 bottom-4 right-4"
              />
              <span className="ml-2 text-sm text-gray-700">No</span>
            </label>
          </div>
          {showEMIInput && (
            <div className="mt-4">
              {/*    <label
                htmlFor="emiAmount"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Enter Monthly EMI Amount (₹)
              </label> */}
              <input
                type="number"
                id="emiAmount"
                className="block w-full p-3 text-sm bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter amount"
              />
            </div>
          )}
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700 text-start">
            Salary Slip
          </label>
          <p className="mb-2 text-xs text-gray-500 text-start">
            Upload Mandatory 3-Month Salary Slip For Salary Validation.
          </p>
          <div className="grid items-center grid-cols-12 gap-2">
            {selectedImages.map((image, index) => (
              <div className="relative flex items-center justify-center h-24 col-span-4 overflow-hidden border-2 border-gray-300 border-dashed rounded-xl">
                {loading[index] ? (
                  <div className="flex flex-col items-center justify-center gap-1">
                    <p className="mt-1 text-xs text-gray-500">Uploading...</p>
                    <progress className="w-[140%] progress bg-green-500"></progress>
                  </div>
                ) : image ? (
                  <>
                    <img
                      className="object-cover object-top w-full h-full"
                      src={image}
                      alt=""
                    />
                    <img
                      onClick={() => handelCencleImage(index)}
                      className="absolute cursor-pointer top-1 right-1 hover:scale-110"
                      src="https://img.icons8.com/tiny-color/18/cancel.png"
                      alt=""
                    />
                  </>
                ) : (
                  <>
                    <label
                      htmlFor={`file${index}`}
                      type="button"
                      className="flex items-center justify-center w-8 h-8 text-xl font-medium text-white bg-gray-500 rounded-full hover:scale-105"
                    >
                      +
                    </label>
                  </>
                )}

                <input
                  type="file"
                  id={`file${index}`}
                  className="hidden"
                  onChange={(e) => handleSelectedImages(e, index)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <MainButton
            text={"Submit & Next"}
            navigate={"/dashboard/docUpload"}
          />
        </div>
      </div>
    </>
  );
};

export default BackDetails;
