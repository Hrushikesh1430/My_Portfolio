"use client";
import { createContext, useEffect, useReducer, useState } from "react";

export interface DataContextProps {
  AppDevice: number;
  setAppDevice: React.Dispatch<React.SetStateAction<number>>;
}

export const DataContext = createContext<any>(undefined);

export const DataContextProvider = ({ children }: any) => {
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setAppDevice(1);
      } else {
        setAppDevice(0);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);
  const [AppDevice, setAppDevice] = useState<number>(0);

  return <DataContext.Provider value={{ AppDevice, setAppDevice }}>{children}</DataContext.Provider>;
};
