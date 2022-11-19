import React from "react";
import HeroContainer from "./Styles/Hero.styled";
import Arrows from "./Arrows";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <HeroContainer>
      <div className="hero-statement-container">
        <h1 className="hero-statement">
          Passionate,<br /> Hardworking, <br /> Front End <br /> Developer
        </h1>
        <h2 className="meet-me">🦎 Meet Cory Grewohl</h2>
        <Arrows />
      </div>
      <HeroImage />
    </HeroContainer>
  );
}

export default Hero;
