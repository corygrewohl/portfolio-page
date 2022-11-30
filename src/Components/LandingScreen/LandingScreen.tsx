import React, { useEffect } from "react";
import Typed from "react-typed";

import Arrows from "./Arrows/Arrows";
import Navbar from "../Navbar/Navbar";
import {
  LandingScreenContainer,
  HeroContainer,
  HeroImageContainer,
} from "./LandingScreen.styled";
import Lego from "../assets/lego.jpg";

function LandingScreen() {

  
  
  

  return (
    <LandingScreenContainer>
      <Navbar />
      <HeroContainer>
        <div className="hero-statement-container">
          <h1 className="hero-statement">
            <Typed 
              strings={[
                "Hardworking, <br> Passionate, <br> Front End <br> Developer"
              ]}
              typeSpeed={40}
            />
          </h1>
          <h2 className="meet-me">🦎 Meet Cory Grewohl</h2>
          <Arrows />
        </div>
        <HeroImageContainer>
          {/* <img src={Lego} alt="Lego image" className="border-gradient" /> */}
        </HeroImageContainer>
      </HeroContainer>
    </LandingScreenContainer>
  );
}

export default LandingScreen;
