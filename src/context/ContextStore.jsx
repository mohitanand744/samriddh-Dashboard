import { createContext, useState } from "react";

export const ContextProvider = createContext();

import React from "react";

const ContextStore = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <ContextProvider.Provider value={{ toggleSidebar, setToggleSidebar }}>
      {children}
    </ContextProvider.Provider>
  );
};

export default ContextStore;
