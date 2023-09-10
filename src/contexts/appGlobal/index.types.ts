import type { Dispatch, ReactNode, SetStateAction } from "react";

export interface AppGlobalProviderProps {
  children: ReactNode;
}

export interface AppGlobalContextValue {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  countCard: number;
  setCountCard: Dispatch<SetStateAction<number>>;
}
