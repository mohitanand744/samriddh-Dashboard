import React from "react";
import App from "./App";
import Nav from "./components/Navbars/Nav";
import Sidebar from "./components/Sidebars/Sidebar";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-0 lg:ml-[15rem] w-full">
        <Nav />
        <App />
      </div>
    </div>
  );
};

export default Layout;
