import React from "react";
import useContextData from "../../Hooks/useContextData";
import { Link } from "react-router-dom";

const HeaderBar = () => {
  const { pathName } = useContextData();

  return (
    <div className="flex items-center justify-between w-full h-20 gap-5 px-6 mb-5 bg-white">
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
        <div className="font-medium text-gray-500 ">
          <h1>
            Name: <span className="text-black ">RAMESH K SHRMA</span>
          </h1>
          <h1>
            Date Of Birth: <span className="text-black ">22-07-1985</span>
          </h1>
        </div>
      )}
    </div>
  );
};

export default HeaderBar;
