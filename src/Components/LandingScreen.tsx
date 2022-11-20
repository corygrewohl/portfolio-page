import React from "react";
import Arrows from "./Arrows";
import Navbar from "./Navbar";
import { LandingScreenContainer } from "./Styles/LandingScreen.styled";
import Lego from "../assets/lego.jpg";

function LandingScreen() {
  return (
    <LandingScreenContainer>
      <Navbar />

      <div className="hero-container">
        <div className="hero-statement-container">
          <h1 className="hero-statement">
            Passionate,
            <br /> Hardworking, <br /> Front End <br /> Developer
          </h1>
          <h2 className="meet-me">🦎 Meet Cory Grewohl</h2>
          <Arrows />
        </div>
        <div className="hero-image-container">
          <img src={Lego} alt="Lego image" className="border-gradient" />
        </div>
      </div>
    </LandingScreenContainer>
  );
}

export default LandingScreen;
