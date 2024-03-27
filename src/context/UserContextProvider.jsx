import React, { useState } from "react";

import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [role, setRole] = useState(localStorage.getItem("auth"));
  return (
    <UserContext.Provider
      value={{ user, setUser, token, setToken, role, setRole }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
