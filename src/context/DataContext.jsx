import { createContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { data, error, loading } = useFetch(
    "http://localhost:5000/monthly-sells"
  );
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState("");
  const [brand, setBrand] = useState("");
  const [chart, setChart] = useState([]);

  const globalState = {
    data,
    error,
    loading,
    category,
    setCategory,
    product,
    setProduct,
    brand,
    setBrand,
    chart,
    setChart,
  };

  return (
    <DataContext.Provider value={globalState}>{children}</DataContext.Provider>
  );
};
