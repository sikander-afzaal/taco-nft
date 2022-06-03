import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";
import logo from "../../Assets/logo.png";
function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="" />
      <div className="footer-social">
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faDiscord} />
      </div>
      <p className="copy">Copyright @ tacosofficial 2022</p>
    </div>
  );
}

export default Footer;
