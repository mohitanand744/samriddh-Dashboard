import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DashboardIcon from "../Dashboards/SVGs/DashboardIcon";
import LoanIcons from "../Dashboards/SVGs/LoanIcons";
import AvatarIcons from "./../Dashboards/SVGs/AvatarIcons";

const Sidebar = () => {
  const location = useLocation();
  const [active, setActive] = useState(
    location.pathname.replaceAll("/", "") || "dashboard"
  );

  return (
    <div
      className={`w-[15rem] fixed z-40 lg:left-0 -left-[100%]  xl:left-0 top-0 bottom-0 min-h-[100vh] flex flex-col justify-between items-center  bg-white border-r transition-all duration-200 ease-in-out`}
    >
      <img
        className="absolute block lg:hidden right-2 top-1 w-[1.7rem] cursor-pointer"
        src="https://img.icons8.com/arcade/64/multiply.png"
        alt=""
      />
      <div className="w-full p-5 logo">
        <img className="mx-auto" src="/images/sLogo.png" alt="" />
      </div>

      <div className="w-full h-screen p-1 mt-5">
        <ul className="space-y-4">
          <li onClick={() => setActive("dashboard")}>
            <Link
              to={"/dashboard"}
              className={`flex items-center text-lg space-x-4 justify-between px-8  transition-all duration-150 ease-in hover:text-blue-500  p-2 ${
                active === "dashboard"
                  ? "text-[#2C5AA7] border-l-[5px] border-[#2C5AA7]  bg-blue-100  transition-all duration-150 ease-linear"
                  : "text-gray-600"
              } rounded-md`}
            >
              <DashboardIcon
                color={active === "dashboard" ? "#2C5AA7" : "#B1B1B1"}
              />
              <span>Dashboard</span>
            </Link>
          </li>
          <li onClick={() => setActive("dashboardloan")}>
            <Link
              to={"/dashboard/loan"}
              className={`flex items-center text-lg justify-between px-8   transition-all duration-150 ease-in hover:text-blue-500  p-2 ${
                active === "dashboardloan"
                  ? "text-[#2C5AA7] border-l-[5px] border-[#2C5AA7]  bg-blue-100  transition-all duration-150 ease-linear "
                  : "text-gray-600"
              } rounded-md`}
            >
              <LoanIcons
                color={active === "dashboardloan" ? "#2C5AA7" : "#B1B1B1"}
              />
              <span>My Loan</span>
            </Link>
          </li>
          <li onClick={() => setActive("dashboardaccounts")}>
            <Link
              to={"/dashboard/accounts"}
              className={`flex items-center text-lg  justify-between px-8  transition-all duration-150 ease-in hover:text-blue-500  p-2 ${
                active === "dashboardaccounts"
                  ? "text-[#2C5AA7] border-l-[5px] border-[#2C5AA7]  bg-blue-100  transition-all duration-150 ease-linear "
                  : "text-gray-600"
              } rounded-md`}
            >
              <AvatarIcons
                color={active === "dashboardaccounts" ? "#2C5AA7" : "#B1B1B1"}
              />
              <span>Accounts</span>
            </Link>
          </li>
        </ul>
      </div>
      {/*  <div className="w-full">
        <Link to={"/"}>
          <button className="flex items-center w-full px-4 py-2 space-x-2 text-lg text-red-500 border border-red-500 rounded-md hover:bg-red-100">
            <img src="/images/signIcon.png" alt="exit" />
            <span> Abmelden</span>
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default Sidebar;
