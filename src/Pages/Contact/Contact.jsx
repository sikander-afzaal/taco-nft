import React from "react";
import "./Contact.css";
import screen from "../../Assets/screen.png";
function Contact() {
  return (
    <div className="contact">
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
  );
}

export default Contact;
