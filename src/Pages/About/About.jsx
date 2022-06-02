import React, { useEffect, useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import "./About.css";
import img from "../../Assets/main-img.png";
import thumb1 from "../../Assets/thumb1.png";
import thumb2 from "../../Assets/thumb2.png";
import monitor from "../../Assets/small-screen.png";
function About() {
  const slider1 = useRef();
  const slider2 = useRef();
  const [value, setValue] = useState(1);
  useEffect(() => {
    slider1.current.sync(slider2.current.splide);
  }, [slider1, slider2]);

  const increment = () => {
    setValue((prev) => prev + 1);
  };
  const decrement = () => {
    if (value > 0) {
      setValue((prev) => prev - 1);
    }
  };

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
          <div className="mint-now">Mint Now</div>
          <div className="func-row">
            <button onClick={decrement}>-</button>
            <h2 className="value">{value}</h2>
            <button onClick={increment}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
