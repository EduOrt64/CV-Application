import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from "./Hero";
import { CVUI } from "./CVUI";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/cv" element={<CVUI />} />
      </Routes>
    </Router>
  );
}

export default App;
