import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Chart from "../Chart/Chart";
import "./ChartArea.css";

const ChartArea = () => {
  const { data: datapi, chart, error, loading } = useContext(DataContext);

  let datos = chart.length > 1 ? chart : datapi;

  let labels = datos.map((month) => month.month);

  const amount = datos.map((month) => {
    const totalSells = month?.products.reduce(
      (suma, product) => suma + product.amount,
      0
    );
    return totalSells;
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Cantidad de ventas",
        // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        data: amount,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div className="chart-area">
      {loading ? (
        <h3>Cargando...</h3>
      ) : error ? (
        <h3>{error.statusText}</h3>
      ) : (
        <>
          <Chart data={data} />
        </>
      )}
    </div>
  );
};

export default ChartArea;
