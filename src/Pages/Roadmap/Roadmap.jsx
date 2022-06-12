import React, { useEffect, useState } from "react";
import "./Roadmap.css";
import lock from "../../Assets/lock.svg";
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
      <div className="roadmap">
        <h1 className="title">TACOS ROADMAP</h1>
        <div className="cont">
          <div className="roadmap-grid">
            <div className="road-box box1">
              <p>All holders will receive the following IRL benefits:</p>
              <p>
                - 20% discount at all current, and future StrEATS restaurant
                locations
              </p>
              <p>- VIP access to new store opens </p>
              <p>- Access to after hours parties and private tastings</p>
              <p> - Ability to vote on new feature menu items</p>
            </div>
            <div className="line line1"></div>
            <div className="lock-cont cont1">
              <img src={lock} alt="" className="lock" />
            </div>
            <h2 className="road-grid__title">In Store Benefit</h2>
            <h2 className="road-grid__title title2">Monthly Raffles</h2>
            <div className="lock-cont cont2">
              <img src={lock} alt="" className="lock" />
            </div>
            <div className="line line2"></div>
            <div className="road-box box2">
              <p>
                On the first day of each month, we will raffle a predetermined
                amount of winners decided by the community, these winners will
                split 1% of that month's gross revenue brought in by the StrEATS
                brand paid out in ETH/WETH. Based on 2021’s sales, that's about
                $5,000+ a month that we will be giving back to our holders,
                completely free!{" "}
              </p>
              <p>• Whitelist for Meta Vamps is open</p>
            </div>
            <div className="road-box box3">
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
            <div className="line line3"></div>
            <div className="line line4 mobile-line"></div>
            <div className="lock-cont cont3">
              <img src={lock} alt="" className="lock" />
            </div>
            <h2 className="road-grid__title">Golden Tacos</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Roadmap;
