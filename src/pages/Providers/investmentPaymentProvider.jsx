import { createContext, useState } from "react";

export const InvestmentPaymentContext = createContext();

const InvestmentPaymentProvider = ({ children }) => {
  const [totalAmountToPay, setTotalAmountToPay] = useState(0);
  const [lotRegisterData, setLotRegisterData] = useState({});
  const [selectedMethod, setSelectedMethod] = useState('bKash');

  const paymentInfo = {
    totalAmountToPay,
    setTotalAmountToPay,
    lotRegisterData,
    setLotRegisterData,
    selectedMethod, 
    setSelectedMethod
  };

  return (
    <InvestmentPaymentContext.Provider value={paymentInfo}>{children}</InvestmentPaymentContext.Provider>
  );
};

export default InvestmentPaymentProvider;
 