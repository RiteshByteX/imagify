import { useState } from "react";
import { AppContext } from "./AppContext";

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <AppContext.Provider value={{ user, setUser, setShowLogin,showLogin }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;