import { useState } from "react";
import { AppContext } from "./AppContext";

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;