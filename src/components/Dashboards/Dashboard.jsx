import React from "react";
import ProductCard from "../Cards/LoanCard";
import EmploymentCard from "../Cards/EmploymentCard";
import ContactInfo from "../Cards/ContactInfo";
import AboutProd from "../Cards/AboutProd";
import MainButton from "../Buttons/MainButton";
import useContextData from "../../Hooks/useContextData";
import HeaderBar from "../Headers/HeaderBar";

const Dashboard = () => {
  const { pathName } = useContextData();

  console.log(pathName);

  return (
    <>
      <HeaderBar />
      {pathName === "dashboard" && (
        <div className="grid grid-cols-1 xl:grid-cols-12  w-[95%] xl:space-x-4 mx-auto">
          <div className="col-span-8">
            <div className="flex flex-col gap-6">
              <div className="p-5 bg-gray-50 rounded-2xl">
                <p className="text-lg font-semibold text-gray-800 text-start">
                  Choose the Right Loan for You
                </p>

                <div className="flex flex-wrap justify-center gap-3 p-2 md:p-4">
                  <ProductCard
                    imagePath={"/images/Personal Loan.png"}
                    width={"w-full sm:w-[32%]"}
                    text={"Personal Loan"}
                  />
                  <ProductCard
                    imagePath={"/images/LAP Loans.png"}
                    width={"w-full sm:w-[32%]"}
                    text={"LAP Loans"}
                  />
                  <ProductCard
                    imagePath={"/images/Property Purchase Loan.png"}
                    width={"w-full sm:w-[32%]"}
                    text={"Property Purchase Loan"}
                  />
                  <ProductCard
                    imagePath={"/images/VEHICLE LOAN.png"}
                    width={"w-full sm:w-[32%]"}
                    text={"VEHICLE LOAN "}
                  />
                  <ProductCard
                    imagePath={"/images/Home Loans.png"}
                    width={"w-full sm:w-[32%]"}
                    text={"Home Loans"}
                  />
                  <ProductCard
                    imagePath={"/images/Mortgage Loan.png"}
                    width={"w-full sm:w-[32%]"}
                    text={"Mortgage Loan"}
                  />
                  <ProductCard
                    imagePath={"/images/business.png"}
                    width={"w-full sm:w-[49%]"}
                    text={"Business Loan"}
                  />
                  <ProductCard
                    imagePath={"/images/educa.png"}
                    width={"w-full sm:w-[49%]"}
                    text={"Education Loan"}
                  />
                </div>
                <div className="mt-1 mb-2 mr-5 text-end">
                  <MainButton text={"Next"} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <AboutProd />
          </div>
        </div>
      )}
      {pathName === "dashboardloan" && (
        <div className="grid grid-cols-1 xl:grid-cols-12  w-[95%] xl:space-x-4 mx-auto">
          <div className="col-span-8">
            <div className="flex flex-col gap-6">
              <div className="p-5 bg-gray-50 rounded-2xl">
                <p className="text-lg text-start">Our Loans</p>

                <div className="flex flex-wrap justify-center gap-3 p-2 md:p-4">
                  <ProductCard
                    imagePath={"/images/business.png"}
                    text={"Business Loan"}
                  />
                  <ProductCard
                    imagePath={"/images/educa.png"}
                    text={"Education Loan"}
                  />
                </div>
              </div>
              <div className="p-5 bg-gray-50 rounded-2xl">
                <p className="text-lg text-center">
                  Select Your Employment Type For Our Other Loans
                </p>

                <div className="flex flex-wrap justify-center gap-3 p-2 md:p-4">
                  <EmploymentCard
                    imagePath={"/images/working.png"}
                    text={"Salaried"}
                  />
                  <EmploymentCard
                    imagePath={"/images/analitical.png"}
                    text={"Self Employed / Business Owner"}
                  />
                </div>
                <div className="mt-1 mb-2 text-end">
                  <MainButton text={"Next"} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <ContactInfo />

            <AboutProd />
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
