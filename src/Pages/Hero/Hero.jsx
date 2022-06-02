import React from "react";
import "./Hero.css";
import monitor from "../../Assets/small-screen.png";
function Hero() {
  return (
    <div className="hero-cont">
      <div className="hero">
        <div className="screen-div">
          <img src={monitor} alt="" className="screen" />
          <div className="btn-div">
            <button className="mint-now">Mint Now</button>
            <button>Redeem</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
