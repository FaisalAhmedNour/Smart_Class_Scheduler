import Cookies from "js-cookie";
import { useState, useEffect, createContext } from "react";
import { selfInfo } from "../../Services/AuthService";
import useEngineStartCheck from "../../Functions/useEngineStartCheck";
import { main_URL_Base } from "../../Services/BaseService";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const authInfo = {
    
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
