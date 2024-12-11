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
      </Route>

      <Route path="*" element={<center>Page NOte Found</center>} />
    </Routes>
  );
};

export default Router;
