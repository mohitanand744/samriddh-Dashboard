import React, { useContext } from "react";
import { ContextProvider } from "../context/ContextStore";
import { useLocation, useNavigate } from "react-router-dom";

const useContextData = () => {
  const { toggleSidebar, setToggleSidebar } = useContext(ContextProvider);
  const location = useLocation();
  const navigate = useNavigate();

  // Directly derive pathName
  const pathName = location.pathname.replaceAll("/", "");

  return { toggleSidebar, setToggleSidebar, pathName, navigate };
};

export default useContextData;
