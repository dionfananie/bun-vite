import type { Dispatch, ReactNode, SetStateAction } from "react";

export interface CardProviderProps {
  children: ReactNode;
}

export interface CardContextValue {
  countCard: number;
  setCountCard: Dispatch<SetStateAction<number>>;
}
