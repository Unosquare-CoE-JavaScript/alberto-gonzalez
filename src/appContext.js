import React, { useState, useContext } from "react";

const AppContext = React.createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({});

  return (
    <AppContext.Provider
      value={{ ...state, setTheme: (theme) => setState({ ...state, theme }) }}
    >
      {children}
    </AppContext.Provider>
  );
};
