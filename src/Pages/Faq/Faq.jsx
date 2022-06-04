import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import "./Faq.css";
function Faq() {
  // if you want to add more questions just add another false here or vice versa
  const [open, setOpen] = useState([false, false, false, false, false]);
  //function to check which faq is opened
  const clickHandler = (e) => {
    const num = e.target.dataset.num;
    setOpen((prev) => {
      let arr = [...prev];
      let newArr = arr.map((elem, index) => {
        if (index === parseInt(num)) {
          return !elem;
        } else {
          return elem;
        }
      });
      return newArr;
    });
  };
  return (
    <div className="faq">
      <h1 className="title">FAQ'S</h1>
      <div className="cont">
        <div className="faq-div">
          <div className="faq-q-div">
            <div
              data-num={0}
              onClick={clickHandler}
              className={`faq-btn ${open[0] ? "border-radius" : ""}`}
            >
              <p className={`${open[0] ? "active-btn" : ""}`}>
                WHAT IS STREATS?
              </p>
              {open[0] ? (
                <FontAwesomeIcon
                  className={`${open[0] ? "active-btn" : ""}`}
                  icon={faMinus}
                />
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </div>
            <div className={`faq-answer ${open[0] ? "active" : ""}`}>
              <p className="answer">
                StrEATS is an up-and-coming restaurant franchise based out of
                Canada. We opened our first location in 2017 and over the last
                four years we have grown to 15 locations with many more planned
                to open soon. Our menu consists of globally inspired street food
                such as tacos, burritos, bowls & poutines. We pride ourselves in
                using only the freshest ingredients to deliver excellence and
                provide our customers and community members the experience they
                deserve! In 2021 the StrEATS brand achieved $6,000,000 in
                revenue and a brand growth of 75% with absolutely no signs of
                slowing down! We plan to continue to grow the StrEATS brand
                internationally at the same blistering pace we have done in the
                past, and we hope to expand globally within the coming years.
              </p>
            </div>
          </div>
          <div className="faq-q-div">
            <div
              data-num={1}
              onClick={clickHandler}
              className={`faq-btn ${open[1] ? "border-radius" : ""}`}
            >
              <p className={`${open[1] ? "active-btn" : ""}`}>
                WHY ARE WE LAUNCHING AN NFT PROJECT?
              </p>
              {open[1] ? (
                <FontAwesomeIcon
                  className={`${open[1] ? "active-btn" : ""}`}
                  icon={faMinus}
                />
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </div>
            <div className={`faq-answer ${open[1] ? "active" : ""}`}>
              <p className="answer">
                From the flavours we use to the foods we create, to our
                marketing tactics, StrEATS has always strived to be at the
                leading edge of innovation, this is no different when it comes
                to Web3. We at StrEATS understand the long lasting impact crypto
                and NFTs will have on our world, and we believe that we have
                something to offer the NFT space that has never been seen
                before. By launching a project backed by real-world assets and
                real-world utility, we also hope to help push the space towards
                the public eye, and push the narrative that NFT’s aren’t just
                pictures of monkeys you see online, but something so much more
                than that.
              </p>
            </div>
          </div>
          <div className="faq-q-div">
            <div
              data-num={2}
              onClick={clickHandler}
              className={`faq-btn ${open[2] ? "border-radius" : ""}`}
            >
              <p className={`${open[2] ? "active-btn" : ""}`}>WEN ROADMAP? ?</p>
              {open[2] ? (
                <FontAwesomeIcon
                  className={`${open[2] ? "active-btn" : ""}`}
                  icon={faMinus}
                />
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </div>
            <div className={`faq-answer ${open[2] ? "active" : ""}`}>
              <p className="answer">
                You can see a brief overview of the Tenacious Tacos Roadmap in
                the roadmap section of our website. For more information
                regarding the perks of holding a Tenacious Tacos NFT, please
                join our Discord, where you will find a more in depth look in to
                the future of Tenacious Tacos.
              </p>
            </div>
          </div>
          <div className="faq-q-div">
            <div
              data-num={3}
              onClick={clickHandler}
              className={`faq-btn ${open[3] ? "border-radius" : ""}`}
            >
              <p className={`${open[3] ? "active-btn" : ""}`}>WEN LAUNCH?</p>
              {open[3] ? (
                <FontAwesomeIcon
                  className={`${open[3] ? "active-btn" : ""}`}
                  icon={faMinus}
                />
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </div>
            <div className={`faq-answer ${open[3] ? "active" : ""}`}>
              <p className="answer">
                We don’t want to set anything in stone yet, as the quality of
                the project is our number one priority. But we currently have
                plans to launch some time in Q2 2022
              </p>
            </div>
          </div>
          <div className="faq-q-div">
            <div
              data-num={4}
              onClick={clickHandler}
              className={`faq-btn ${open[4] ? "border-radius" : ""}`}
            >
              <p className={`${open[4] ? "active-btn" : ""}`}>
                IS THERE A WHITELIST? HOW DO I GET ON IT?
              </p>
              {open[4] ? (
                <FontAwesomeIcon
                  className={`${open[4] ? "active-btn" : ""}`}
                  icon={faMinus}
                />
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </div>
            <div className={`faq-answer ${open[4] ? "active" : ""}`}>
              <p className="answer">
                At the time of writing there is currently no guaranteed way to
                receive a whitelist spot, however as the community grows we will
                be running constant giveaways, contests, games and tournaments
                for everybody to participate in. Make sure to keep an eye on the
                Discord and turn on Twitter notifications for @TenaciousTacos,
                @0xAliterit and @Nimberry#1109 in order to have the best chance
                at receiving a spot!
              </p>
            </div>
          </div>
          {
            // when you add a new faq make sure to increment the value in the brackets
          }
        </div>
      </div>
    </div>
  );
}

export default Faq;
