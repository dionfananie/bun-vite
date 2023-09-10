import { createContext, useContext, useState } from "react";

import type { AppGlobalProviderProps, AppGlobalContextValue } from "./index.types";

const AppGlobalContext = createContext<AppGlobalContextValue | undefined>(undefined);

const AppGlobalProvider = ({ children }: AppGlobalProviderProps) => {
  const [count, setCount] = useState(0);
  const [countCard, setCountCard] = useState(0);

  return (
    <AppGlobalContext.Provider
      value={{
        count,
        setCount,
        countCard,
        setCountCard,
      }}
    >
      {children}
    </AppGlobalContext.Provider>
  );
};

const useAppGlobalContext = () => {
  const context = useContext(AppGlobalContext);

  if (!context) {
    throw new Error(`"useAppGlobalContext" must be used within "AppGlobalProvider"`);
  }

  return context;
};

export { AppGlobalProvider, useAppGlobalContext };
