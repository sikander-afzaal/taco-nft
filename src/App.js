import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Layout/Header/Header";
import Hero from "./Pages/Hero/Hero";
import About from "./Pages/About/About";
import Team from "./Pages/Team/Team";
import Faq from "./Pages/Faq/Faq";
import bg1 from "./Assets/bg1.png";
import bg2 from "./Assets/bg2.png";
import bg4 from "./Assets/bg4.png";
import bg5 from "./Assets/bg5.png";

function App() {
  const location = useLocation();
  const [bg, setBg] = useState(bg1);
  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case "/":
        setBg(bg1);
        break;
      case "/About":
        setBg(bg2);
        break;
      case "/Team":
        setBg(bg4);
        break;
      case "/Faq":
        setBg(bg5);
        break;

      default:
        break;
    }
  }, [location.pathname]);

  return (
    <div className="App">
      <Header />
      <div className="bottom-cont" style={{ backgroundImage: `url(${bg})` }}>
        <div className="bottom">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/About" element={<About />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/Faq" element={<Faq />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
