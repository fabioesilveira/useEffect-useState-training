import { useState } from "react";
import Context from "./Context";

function Provider({ children }) {
  const [checkoutInfo, setCheckoutInfo] = useState({
    fullName: "",
    email: "",
    street: "",
    cityState: ""
  });

  const contextValue = {
    checkoutInfo,
    setCheckoutInfo
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}

export default Provider;