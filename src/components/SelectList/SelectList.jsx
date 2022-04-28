import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import SelectItem from "../SelectItem/SelectItem";
import "./SelectList.css";

const SelectList = () => {
  const {
    data,
    error,
    loading,
    category,
    setCategory,
    product,
    setProduct,
    brand,
    setBrand,
    setChart,
  } = useContext(DataContext);

  const categories = new Set();
  const products = new Set();
  const brands = new Set();

  data.forEach((elem) => {
    elem.products.forEach((elem) => categories.add(elem.category));
  });

  let ventasPorCategoria = category ? [] : data;

  if (category) {
    data.forEach((elem) => {
      const products = elem.products.filter(
        (prod) => prod.category === category
      );
      ventasPorCategoria.push({ month: elem.month, products });
    });
  }

  ventasPorCategoria.forEach((elem) => {
    elem.products.forEach((elem) => {
      products.add(elem.product);
    });
  });

  let ventasPorProducto = product ? [] : data;

  if (product) {
    ventasPorCategoria.forEach((elem) => {
      const products = elem.products.filter((prod) => prod.product === product);
      ventasPorProducto.push({ month: elem.month, products });
    });
  }

  ventasPorProducto.forEach((elem) => {
    elem.products.forEach((elem) => brands.add(elem.brand));
  });

  let ventasPorMarca = brand ? [] : data;
  if (brand) {
    ventasPorProducto.forEach((elem) => {
      const products = elem.products.filter((prod) => prod.brand === brand);
      ventasPorMarca.push({ month: elem.month, products });
    });
  }

  const categoriesOptions = [];
  const productsOptions = [];
  const brandsOptions = [];
  categories.forEach((elem) => categoriesOptions.push(elem));
  products.forEach((elem) => productsOptions.push(elem));
  brands.forEach((elem) => brandsOptions.push(elem));

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
