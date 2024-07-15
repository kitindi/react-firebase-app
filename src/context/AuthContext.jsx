import { createContext, useContext, useState } from "react";

// initialize the context

const UserContext = createContext();

export const UserAuth = () => {
  return useContext(UserContext);
};

// component that creates a user context provider

export default function AuthContextProvider({ children }) {
  const [isLoggedOut, setIsLoggedOut] = useState(true);

  return <UserContext.Provider value={{ isLoggedOut }}>{children}</UserContext.Provider>;
}
