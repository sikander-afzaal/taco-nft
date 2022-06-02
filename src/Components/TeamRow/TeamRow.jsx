import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "./TeamRow.css";
import icon from "../../Assets/icon.svg";
function TeamRow({ blackBox, img, title, id, desc, social, order }) {
  return (
    <div className={`team-row ${order ? "grid-2" : ""}`}>
      <div className={`black-box ${order ? "order" : ""}`}>
        <p>{blackBox}</p>
      </div>
      <div className="right-row">
        <div className="row-top">
          <img src={img} alt="" />
          <h2>{title}</h2>
          <p>{id}</p>
        </div>
        <p className="team-desc">{desc}</p>
        {social ? (
          <div className="social-div">
            <FontAwesomeIcon icon={faDiscord} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        ) : (
          <div className="social-div">
            <img src={icon} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default TeamRow;
