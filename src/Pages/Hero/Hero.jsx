import React from "react";
import "./Hero.css";
import monitor from "../../Assets/small-screen.png";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="hero">
      <div className="screen-div">
        <img src={monitor} alt="" className="screen" />
        <div className="btn-div">
          <Link to={"/Contact"} className="mint-now">
            Mint Now
          </Link>
          <button>Redeem</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
