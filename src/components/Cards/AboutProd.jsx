import React from "react";
import useContextData from "../../Hooks/useContextData";

const AboutProd = () => {
  const { pathName } = useContextData();

  return (
    <div className="w-full md:max-w-md">
      <h1
        className={`mb-4 text-xl font-bold text-start mt-6 xl:mt-0 ${
          pathName === "dashboardloan" && "mt-6"
        }`}
      >
        About That
      </h1>

      <div className="p-6 mx-auto bg-white shadow-lg h-[67.5vh] rounded-2xl overflow-hidden custom-scrollbar text-start">
        <h2 className="mb-4 text-lg font-semibold text-center text-blue-700">
          Personal Loan
        </h2>
        <p className="text-sm leading-relaxed text-gray-700">
          A personal loan is an unsecured loan that you can use for various
          purposes, such as:
        </p>
        <ul class="list-disc ml-4 mt-2">
          <li>Home Renovation</li>
          <li>Medical Emergencies</li>
          <li>Travel</li>
          <li>Education</li>
          <li>Debt Consolidation</li>
          <li>Wedding Expenses</li>
          <li>Buying Electronics</li>
        </ul>
        <h3 className="mt-4 text-base font-semibold text-gray-800">
          Types of Loans Suitable for Salaried Individuals
        </h3>
        <h4 className="mt-2 text-sm font-medium text-gray-800">
          Personal Loan
        </h4>
        <ul className="mt-2 text-sm text-gray-600 list-disc list-inside text-start">
          <li>
            Unsecured loan for various purposes like travel, medical
            emergencies, home renovation, etc.
          </li>
          <li>Quick disbursal and minimal documentation.</li>
          <li>Competitive interest rates.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutProd;

<div class="h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
  <h2 class="text-lg font-bold mb-2"></h2>
  <p>
    A Personal Loan Is An Unsecured Loan That You Can Use For Various Purposes,
    Such As:
  </p>

  <h3 class="text-lg font-bold mt-4">Key Features Of A Personal Loan</h3>
  <ul class="list-disc ml-4 mt-2">
    <li>Unsecured Loan: You Don’t Need To Pledge Any Asset As Collateral.</li>
    <li>
      Flexible Repayment: Choose A Repayment Tenure That Suits Your Budget.
    </li>
    <li>Quick Disbursal: Funds Are Often Released Within A Few Days.</li>
  </ul>
</div>;
