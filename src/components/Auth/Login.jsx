import React from "react";
import MainButton from "../Buttons/MainButton";

const Login = () => {
  return (
    <center className="mt-16">
      <p className="text-xl">Go To Dashboard</p>
      <p className="mb-5 text-xl">
        This is Login Page & we are working on it...
      </p>
      <MainButton text={"Navigate to Dashboard"} navigate={"/dashboard"} />
    </center>
  );
};

export default Login;
