import { createContext, useContext, useState } from "react";

import type { CardProviderProps, CardContextValue } from "./index.types";

const CardContext = createContext<CardContextValue | undefined>(undefined);

const CardProvider = ({ children }: CardProviderProps) => {
  const [countCard, setCountCard] = useState(0);
  return (
    <CardContext.Provider
      value={{
        countCard,
        setCountCard,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

const useCardContext = () => {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error(`"useCardContext" must be used within "CardProvider"`);
  }

  return context;
};

export { CardProvider, useCardContext };
