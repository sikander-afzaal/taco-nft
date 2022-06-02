import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Layout/Header/Header";
import Hero from "./Pages/Hero/Hero";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </div>
  );
}

export default App;
