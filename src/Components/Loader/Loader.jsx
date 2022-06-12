import React from "react";
import "./Loader.css";
import img from "../../Assets/loader.png";
import loader from "../../Assets/loader.gif";
function Loader() {
  return (
    <div className="loader">
      <img src={loader} alt="" className="loader-gif" />
      <img src={img} alt="" className="loader-img" />
    </div>
  );
}

export default Loader;
