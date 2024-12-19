import React from "react";
import ProductCard from "../Cards/LoanCard";
import EmploymentCard from "../Cards/EmploymentCard";
import ContactInfo from "../Cards/ContactInfo";
import AboutProd from "../Cards/AboutProd";
import MainButton from "../Buttons/MainButton";
import useContextData from "../../Hooks/useContextData";
import HeaderBar from "../Headers/HeaderBar";
import ProfileForm from "../Forms/ProfileForm";
import HowtoApply from "../HowtoApply/HowtoApply";
import LoanAmount from "../Forms/LoanAmount";
import EmploymentDetails from "../Forms/EmploymentDetails";

const Dashboard = () => {
  const { pathName } = useContextData();

  console.log(pathName);

  return (
    <>
      <HeaderBar />
      <div className="h-full bg-blue-50">
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
                    <MainButton
                      navigate="/dashboard/personal_Loan_Application"
                      text={"Next"}
                    />
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

        <div className="grid grid-cols-1 xl:grid-cols-12  w-[95%] xl:space-x-4 mx-auto">
          {pathName === "dashboardpersonal_Loan_Application" && (
            <>
              <div className="col-span-8">
                <ProfileForm />
              </div>
              <div className="flex flex-col col-span-4 gap-10">
                <div className="">
                  <h1 className="text-xl font-medium md:text-2xl text-start">
                    For Reference
                  </h1>

                  <div className="w-full bg-[#2C5AA7] rounded-2xl">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/5827/0320/07561266e296280373d3bfe95e800d05?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C4ZMsb8L~nWGt9TjV1BWoNYCrjOz80nIZW5k~snaCXrDqMYT-ZuHQ3XwB3~~QjwE9oQbRYG0jbzdgtZS0FaxzjqQrOYsUildEAjxnOIm~7-YemgUjjXExVy-qVdTHA3~XL5Jb9vMbArXnYT1fneTMd51rym1Hnp~SQHKJ-cDqgVi8NEY-ZGy37OHHq4XlmYf3nzuq5VtPpAlxw2XQibmAEpG32ylcoeAwJOry3gquOcpQ5y3Z49W0LjWKbwYVzbLlTbiWPbTGhX7JyDPWO74OMk9DILoR4q5Y-i4koEsCgVuY~Run8Xzk6v~1JzZfWKBxqHNNPh1EansYMWMCP9cbw__"
                      alt="Reference Image"
                    />
                  </div>
                </div>

                <HowtoApply />
              </div>
            </>
          )}
          {pathName === "dashboardLoan_Amount" && (
            <>
              <div className="col-span-8">
                <LoanAmount />
              </div>
              <div className="flex flex-col col-span-4 gap-10">
                <HowtoApply />
              </div>
            </>
          )}

          {pathName === "dashboardemployment_details" && (
            <>
              <div className="col-span-8">
                <EmploymentDetails />
              </div>
              <div className="flex flex-col col-span-4 gap-10">
                <HowtoApply />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
