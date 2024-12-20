import React from "react";
import useContextData from "../../Hooks/useContextData";
import { Link } from "react-router-dom";

const HeaderBar = () => {
  const { pathName } = useContextData();

  return (
    <div className="flex flex-wrap items-center justify-between w-full gap-5 px-6 py-4 mb-5 bg-white h-fit md:h-20">
      <div className="flex items-center gap-8 ">
        {pathName === "dashboard" ? (
          ""
        ) : (
          <Link
            to={
              pathName === "dashboardpersonal_Loan_Application"
                ? "/dashboard"
                : pathName === "dashboardLoan_Amount"
                ? "/dashboard/personal_Loan_Application"
                : pathName === "dashboardemployment_details"
                ? "/dashboard/Loan_Amount"
                : pathName === "dashboardbankDetails"
                ? "/dashboard/employment_details"
                : pathName === "dashboarddocUpload"
                ? "/dashboard/bankDetails"
                : ""
            }
          >
            <img src="/images/Backbutton.png" alt="" />
          </Link>
        )}

        <h1 className="text-xl font-medium md:text-2xl text-start">
          {pathName === "dashboard"
            ? "Our Loan Products "
            : "Personal Loan Application"}
        </h1>
      </div>
      {pathName === "dashboardLoan_Amount" && (
        <div className="w-full pt-2 font-medium text-gray-500 border-t-2 md:pt-0 md:w-fit md:border-t-0 text-start">
          <h1>
            Name: <span className="text-black ">RAMESH K SHRMA</span>
          </h1>
          <h1>
            DOB: <span className="text-black ">22-07-1985</span>
          </h1>
        </div>
      )}
    </div>
  );
};

export default HeaderBar;
