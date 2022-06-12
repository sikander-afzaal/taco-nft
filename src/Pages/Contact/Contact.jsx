import React, { useEffect, useState } from "react";
import "./Contact.css";
import screen from "../../Assets/screen.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
function Contact() {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 3000);
  }, []);
  return (
    <>
      {!loader && <Loader />}
      <div className="contact">
        <Link to={"/"}>
          <FontAwesomeIcon icon={faXmark} />
        </Link>
        <img src={screen} alt="" />
        <form action="#" className="contact-form">
          <div className="input-row">
            <input type="text" placeholder="FIRST NAME" />
            <input type="text" placeholder="LAST NAME" />
          </div>
          <div className="input-row">
            <input type="text" placeholder="COUNTRY" />
            <input type="text" placeholder="STATE/PROVINCE" />
          </div>
          <input type="text" placeholder="ADDRESS" />
          <textarea placeholder="State Still Testing Question?"></textarea>
          <div className="agree">
            <input type="checkbox" className="checkbox" />
            <h2>
              I AGREE TO <span>terms & COndition</span>
            </h2>
          </div>
          <button className="submit">SUBMIT</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
