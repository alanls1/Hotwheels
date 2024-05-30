import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "../src/components/NavBar";
import Home from "../src/components/Home/index.jsx";
import Cars from "../src/components/Cars/index.jsx";
import About from "../src/components/About/index.jsx";
import { Footer } from "../src/components/Footer/index.jsx";

import "./App.css";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="cars" element={<Cars />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
