import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import Hero from "./Pages/Hero/Hero";
import About from "./Pages/About/About";
import Team from "./Pages/Team/Team";
import Faq from "./Pages/Faq/Faq";
import bg1 from "./Assets/bg1.png";
import bg2 from "./Assets/bg2.png";
import bg3 from "./Assets/bg3.png";
import bg4 from "./Assets/bg4.png";
import bg5 from "./Assets/bg5.png";
import Roadmap from "./Pages/Roadmap/Roadmap";

function App() {
  const location = useLocation();
  const [bg, setBg] = useState(bg1);
  const [cover, setCover] = useState("");
  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case "/":
        setBg(bg1);
        setCover("100% 100%");
        break;
      case "/About":
        setBg(bg2);
        setCover("100% 100%");
        break;
      case "/Roadmap":
        setBg(bg3);
        setCover("cover");
        break;
      case "/Team":
        setBg(bg4);
        setCover("100% 100%");
        break;
      case "/Faq":
        setBg(bg5);
        setCover("100% 100%");
        break;

      default:
        break;
    }
  }, [location.pathname]);

  return (
    <div className="App">
      <Header />
      <div
        className="bottom-cont"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: cover }}
      >
        <div className="bottom">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/About" element={<About />} />
            <Route path="/Roadmap" element={<Roadmap />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/Faq" element={<Faq />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
