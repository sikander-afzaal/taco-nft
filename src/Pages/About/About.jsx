import React, { useEffect, useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import "./About.css";
import img from "../../Assets/main-img.png";
import thumb1 from "../../Assets/thumb1.png";
import thumb2 from "../../Assets/thumb2.png";
import monitor from "../../Assets/small-screen.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
function About() {
  const slider1 = useRef();
  const slider2 = useRef();
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    slider1.current.sync(slider2.current.splide);
  }, [slider1, slider2]);

  return (
    <div className="about">
      <div className="slider-div">
        <Splide
          className="main-slider"
          ref={(slider) => (slider1.current = slider)}
          options={{
            pagination: false,
            arrows: true,
            width: "100%",
            // direction: "ltr",
            rewind: true,
            lazyLoad: "sequential",
          }}
        >
          <SplideSlide>
            <div className="main-img">
              <img src={thumb1} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="main-img">
              <img src={img} alt="" />
            </div>
          </SplideSlide>
        </Splide>
        <Splide
          className="thumbnail"
          ref={(slider) => (slider2.current = slider)}
          options={{
            pagination: false,
            arrows: false,
            isNavigation: true,
            width: "100%",
            perPage: 2,
            breakpoints: {
              470: {
                perPage: 1,
              },
            },
          }}
        >
          <SplideSlide>
            <div className="thumb-img">
              <img src={thumb1} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="thumb-img">
              <img src={thumb2} alt="" />
            </div>
          </SplideSlide>
        </Splide>
      </div>
      <div className="mint-func-div-cont">
        <img src={monitor} className="about-mon" alt="" />
        <div className="mint-func-div">
          {" "}
          <button onClick={() => setOpenModal(true)} className="mint-now">
            Learn More
          </button>
        </div>
      </div>
      <div
        onClick={() => setOpenModal(false)}
        className={`overlay  ${openModal ? "overlay-open" : ""}`}
      ></div>
      <div className={`modal ${openModal ? "modal-open" : ""}`}>
        <FontAwesomeIcon onClick={() => setOpenModal(false)} icon={faXmark} />
        <p className="desc-about">
          In 2017 a group of like-minded people got together and opened
          @streatscanada’s first restaurant location in Canada. Since its
          inception, StrEATS has grown from its original standalone store, to a
          franchise composed of 15 locations, spread all across Canada. Amidst a
          global pandemic and multiple government shut downs, through hard work
          and impeccable management, StrEATS managed to have its most successful
          year to date. Achieving $6m in revenue, and a brand growth of 75%.
          With projected earnings in 2022 being upwards of $10m, and plans to
          expand into the US
        </p>
      </div>
    </div>
  );
}

export default About;
