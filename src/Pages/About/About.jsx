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
import Loader from "../../Components/Loader/Loader";
function About() {
  const slider1 = useRef();
  const slider2 = useRef();
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    slider1.current.sync(slider2.current.splide);
  }, [slider1, slider2]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 3000);
  }, []);
  return (
    <>
      {!loader && <Loader />}
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
            <p>
              In 2017 a group of like-minded people got together and opened
              @streatscanada’s first restaurant location in Canada
            </p>
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
            inception, StrEATS has grown from its original standalone store, to
            a franchise composed of 15 locations, spread all across Canada.
            Amidst a global pandemic and multiple government shut downs, through
            hard work and impeccable management, StrEATS managed to have its
            most successful year to date. Achieving $6m in revenue, and a brand
            growth of 75%. With projected earnings in 2022 being upwards of
            $10m, and plans to expand into the US, StrEATS is showing absolutely
            no sign of slowing down, and we want to bring you with us! If you
            would like to learn more about the StrEATS brand check us out on our
            website. So how does this relate to NFTs, and what do we hope to
            achieve through the Tenacious Tacos project? In mid 2021, our
            resident crypto degens @nigelnim and @Aliterit_ became involved in
            Web3. After falling in love with the community and innovation of the
            space they decided to on-board the rest of our team. After taking
            the last few months to learn the benefits of the space, as well as
            some difficult lessons, we came together to create Tenacious Tacos.
            Our vision with this project is to become closer with our community,
            and create the opportunity for you to share in our growing success.{" "}
            <br /> Whether you're a regular customer or living overseas, we hope
            to create value for each and every one of you through ownership of
            our NFT. The team at StrEATS Kitchen are truly excited to begin
            building within this community, and we look forward to meeting all
            of you in our Discord server.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
