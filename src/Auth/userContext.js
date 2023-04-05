import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const UserContext = React.createContext();

const useUser = () => {
  useContext(UserContext);
};

const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        console.log("User is logged in");
        navigate("/jobs");
      } else {
        navigate("/");
      }
    });
  }, [user, navigate]);

  const value = { user };

  return (
    <UserContext.Provider value={value}>
      {!loading && children}
    </UserContext.Provider>
  );
};

export { UserProvider, useUser };
