import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import Login from "../components/Auth/Login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="dashboard" element={<Layout />}>
        <Route path="loan" element={<Layout />} />
        <Route path="accounts" element={<Layout />} />
        <Route path="personal_Loan_Application" element={<Layout />} />
        <Route path="employment_details" element={<Layout />} />
        <Route path="Loan_Amount" element={<Layout />} />
        <Route path="bankDetails" element={<Layout />} />
        <Route path="docUpload" element={<Layout />} />
      </Route>

      <Route path="*" element={<center>Page NOte Found</center>} />
    </Routes>
  );
};

export default Router;
