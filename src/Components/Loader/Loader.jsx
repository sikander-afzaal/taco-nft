import React from "react";
import "./Loader.css";
import img from "../../Assets/loader.png";
function Loader() {
  return (
    <div className="loader">
      <img src={img} alt="" className="loader-img" />
    </div>
  );
}

export default Loader;
