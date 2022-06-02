import React from "react";

import "./Team.css";
import img from "../../Assets/team/team.png";
import TeamRow from "../../Components/TeamRow/TeamRow";

function Team() {
  return (
    <div className="team">
      <h1 className="title">MEET THE TEAM</h1>
      <div className="team-col">
        <TeamRow
          img={img}
          blackBox={
            "CEO, Joeys Group of Restaurants Founder, Tenacious Tacos NFT"
          }
          title={"Joe Klassen"}
          id={"@joeklassen"}
          desc={
            "Starting with a single fish and chips restaurant in Calgary’s beltline in 1985 at just 21 years of age, Klassen has grown his Joey’s Group of Companies into a true empire. It includes over 60 restaurants across Canada, magazines, a printing company, a wholesale food import-distribution company, a biodiesel plant, an oil servicing business, land development and commercial buildings and more, employing over 800 people across the country. And his story is nowhere near finished. Upon learning about the Web3 space from Dominic and Nigel, Joe immediately knew that this technology had the potential to change the world, and as with all of his business ventures, he wanted to be at the forefront of it."
          }
        />
        <TeamRow
          img={img}
          blackBox={
            "Marketing Specialist and Regional Manager, StrEATS KitchensCo-Founder & Marketing Lead, Tenacious Tacos NFT"
          }
          title={"Michael Klassen"}
          id={"@mikeklassen90"}
          desc={
            "Enter the next generation, after finishing his pro football career of 7 years. Michael Has been an integral part into the creation and success of the Joeys’ groups newest venture strEATS Kitchens. Helping in his offseason since 2014 he has now joined the team full time in late 2019 wherein, he quickly took over the marketing and overall brand direction. His unorthodox marketing ideas/schemes have helped put strEATS on the map nationally with hopes of soon being an international discussion. He understands the value of being early to the NFT space in hopes of being one of the first brands to adopt a blockchain based loyalty club for the restaurants."
          }
          social={true}
          order={true}
        />
        <TeamRow
          img={img}
          blackBox={"Community Manager & Advisor, Tenacious Tacos NFT"}
          title={"Dominic Goncalves"}
          id={"@Aliterit_"}
          desc={
            "Dominic is a full time crypto & JPEG degen, he spends his days roaming the metaverse and interacting with the NFT community through Discord and Twitter. He has been investing in crypto since 2018 and began trading NFTs in August 2021, quitting his job and going full time in Web3 as of January 2022."
          }
        />
        <TeamRow
          img={img}
          blackBox={
            "General Manager, StrEATS Beltline Community Manager & Advisor, Tenacious Tacos NFT"
          }
          title={"Nigel Nimegeers"}
          id={"@nigelnim"}
          desc={
            "Nigel has been working for Joeys Group of Companies since 2013. In 2020 he became the co-owner and general manager of his own location at only 21 years old. Nigel began trading crypto in 2017, venturing into NFTs in August 2021. He now spends his days working full time both on Tenacious Tacos, and as General Manager of StrEATS Braeside."
          }
          social={true}
          order={true}
        />
      </div>
    </div>
  );
}

export default Team;
