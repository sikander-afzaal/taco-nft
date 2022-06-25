import React, { useEffect, useState } from "react";
import "./Roadmap.css";
import first from "../../Assets/Roadmap/first.png";
import mid from "../../Assets/Roadmap/mid.png";
import last from "../../Assets/Roadmap/last.png";
import logo from "../../Assets/Roadmap/logo.png";
import line from "../../Assets/Roadmap/line.svg";
import Loader from "../../Components/Loader/Loader";
function Roadmap() {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 3000);
  }, []);
  return (
    <>
      {!loader && <Loader />}
      <div className="road-cont">
        <div className="roadmap">
          <img src={logo} alt="" className="road-logo" />
          <div className="roadmap-grid">
            <img src={line} alt="" className="roadline" />
            <div className="grid-text">
              <h1>In Store Benefits! </h1>
              <p>
                All holders will receive the following IRL benefits: <br />
                - 20% discount at all current, and future StrEATS restaurant
                locations <br />
                - VIP access to new store opens <br />
                - Access to after hours parties and private tastings <br />-
                Ability to vote on new feature menu items
              </p>
            </div>
            <div className="grid-img grid-img1">
              <img src={first} alt="" />
            </div>
            <div className="grid-img grid-img2">
              <img src={mid} alt="" />
            </div>
            <div className="grid-text">
              <h1>Monthly Raffles </h1>
              <p>
                On the first day of each month, we will raffle a predetermined
                amount of winners decided by the community, these winners will
                split 1% of that month's gross revenue brought in by the StrEATS
                brand paid out in ETH/WETH. Based on 2021’s sales, that's about
                $5,000+ a month that we will be giving back to our holders,
                completely free!
              </p>
            </div>

            <div className="grid-text">
              <h1>Golden Tacos</h1>
              <p>
                Hidden within the metadata of the un-revealed Tenacious Tacos
                NFT collection there will be 7 Golden Tacos, and the StrEATS
                Mascot 1-of-1. The 7 Golden Tacos will correlate to the 7
                different tacos we serve in our restaurant, and the holders of
                these Golden Tacos will receive monthly payments in ETH/WETH,
                loosely based around the number of sales the corresponding menu
                item has for that month. Based off of 2021’s sales, the yearly
                income for the holders of the 7 Golden Tacos will be as follows:
                ~$5000 annually for the holder of the Golden Fish Taco ~$4500
                annually for the holder of the Golden Mango Shrimp Taco ~$3000
                annually for the holder of the Golden Beef Taco ~$2500 annually
                for the holder of the Golden Buffalo Chicken Taco ~$2000
                annually for the holder of the Golden Pork Taco ~$2000 annually
                for the holder of the Golden Chicken Taco ~$1500 annually for
                the holder of the Golden Feature Taco As for the StrEATS Mascot,
                it will have a 1-of-1 trait, the illusive ‘Black Card’, this
                trait entitles the holder to eat for free at all StrEATS brand
                locations, for life!
              </p>
            </div>
            <div className="grid-img grid-img3">
              <img src={last} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Roadmap;
