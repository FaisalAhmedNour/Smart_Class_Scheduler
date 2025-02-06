import { createContext, useState } from "react";

export const EnterpriseAdminContext = createContext();

const EnterpriseAdminProvider = ({ children }) => {
  

  const Info = {
    
  };

  return (
    <EnterpriseAdminContext.Provider value={Info}>{children}</EnterpriseAdminContext.Provider>
  );
};

export default EnterpriseAdminProvider;
 