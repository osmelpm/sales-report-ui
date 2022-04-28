import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import SelectItem from "../SelectItem/SelectItem";
import "./SelectList.css";

const SelectList = () => {
  const { data, error, loading } = useContext(DataContext);
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState("");
  const [brand, setBrand] = useState("");

  const categories = new Set();
  const products = new Set();
  const brands = new Set();

  data.forEach((elem) => {
    elem.products.forEach((elem) => categories.add(elem.category));
  });

  data.forEach((elem) => {
    elem.products.forEach((elem) => products.add(elem.product));
  });

  data.forEach((elem) => {
    elem.products.forEach((elem) => brands.add(elem.brand));
  });

  const categoriesOptions = [];
  const productsOptions = [];
  const brandsOptions = [];
  categories.forEach((elem) => categoriesOptions.push(elem));
  products.forEach((elem) => productsOptions.push(elem));
  brands.forEach((elem) => brandsOptions.push(elem));
  //console.log(categoriesOptions);

  return (
    <div className="selects__container">
      {loading ? (
        "Cargando datos"
      ) : error ? (
        <h3>{error.statusText}</h3>
      ) : (
        <>
          <SelectItem
            label="Categoría:"
            handleChange={(e) => setCategory(e.target.value)}
            options={categoriesOptions}
          />
          <SelectItem
            label="Producto:"
            handleChange={(e) => setProduct(e.target.value)}
            options={productsOptions}
          />
          <SelectItem
            label="Marca:"
            handleChange={(e) => setBrand(e.target.value)}
            options={brandsOptions}
          />
        </>
      )}
    </div>
  );
};

export default SelectList;
