import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../../Assets/logo.png";
function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <img src={logo} alt="" className="logo" />
      <div className={`right-header ${open ? "open-menu" : ""}`}>
        <FontAwesomeIcon
          onClick={() => setOpen(false)}
          icon={faXmark}
          className="menu-closer"
        />
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/" className="nav-link">
          About
        </Link>
        <Link to="/" className="nav-link">
          Roadmap
        </Link>
        <Link to="/" className="nav-link">
          Team
        </Link>
        <Link to="/" className="nav-link">
          Faq
        </Link>
        <div className="social-div">
          <a href="..." className="nav-link">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="..." className="nav-link">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </div>
      </div>
      <FontAwesomeIcon
        onClick={() => setOpen(true)}
        icon={faBars}
        className="menu-opener"
      />
    </div>
  );
}

export default Header;
