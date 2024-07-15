import { createContext, useContext, useEffect, useState } from "react";
import { db, auth } from "../firebase/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

// initialize the context

const UserContext = createContext();

export const UserAuth = () => {
  return useContext(UserContext);
};

// component that creates a user context provider

export default function AuthContextProvider({ children }) {
  const [isLoggedOut, setIsLoggedOut] = useState(true);
  const [user, setUser] = useState(null);

  // check if user is loggedin to update the auth

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setIsLoggedOut(false);
        onSnapshot(doc(db, "users", currentUser.uid), (doc) => {
          setUser(doc.data());
        });
        // console.log("it is running");
      } else {
        setIsLoggedOut(true);
      }
    });
    return () => {
      unsubscribe();
    };
  });

  return <UserContext.Provider value={{ isLoggedOut, user }}>{children}</UserContext.Provider>;
}
