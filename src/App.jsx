import { Route, Routes } from "react-router-dom";
import ChartArea from "./components/ChartArea/ChartArea";
import Navbar from "./components/Navbar/Navbar";
import SelectList from "./components/SelectList/SelectList";

function App() {
  return (
    <div className="container">
      <Navbar />

      <SelectList />
      <Routes>
        <Route path="/monthly-sells/" element={<ChartArea />} />
      </Routes>
    </div>
  );
}

export default App;
