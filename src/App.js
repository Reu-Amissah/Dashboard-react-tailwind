// import logo from './logo.svg';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import Doctors from "./screens/Doctors";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="doctors" element={<Doctors />} />
      </Routes>
    </div>
  );
}

export default App;
