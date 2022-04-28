import { createContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { data, error, loading } = useFetch(
    "http://localhost:5000/monthly-sells"
  );

  return (
    <DataContext.Provider value={{ data, error, loading }}>
      {children}
    </DataContext.Provider>
  );
};
