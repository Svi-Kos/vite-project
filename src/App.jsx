import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Vans from "./components/Vans.jsx";
import VanDetail from "./components/VanDetail.jsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">
          #VanLife
        </Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
