import { Route, Routes } from "react-router-dom";
import ChartArea from "./components/ChartArea/ChartArea";
import Navbar from "./components/Navbar/Navbar";
import SelectList from "./components/SelectList/SelectList";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="container">
      <Navbar />
      <DataProvider>
        <SelectList />
        <Routes>
          <Route path="/monthly-sells/" element={<ChartArea />} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
