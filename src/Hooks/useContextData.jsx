import React, { useContext } from "react";
import { ContextProvider } from "../context/ContextStore";
import { useLocation } from "react-router-dom";

const useContextData = () => {
  const { toggleSidebar, setToggleSidebar } = useContext(ContextProvider);
  const location = useLocation();

  const pathName = location.pathname.replaceAll("/", "");

  return { toggleSidebar, setToggleSidebar, pathName };
};

export default useContextData;
