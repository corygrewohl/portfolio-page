import React from "react";
import Lego from "../assets/lego.jpg";
import HeroImageContainer from "./Styles/HeroImage.styled";

function HeroImage() {
  return (
    <HeroImageContainer>
      <img src={Lego} alt="Lego image" className="border-gradient" />
    </HeroImageContainer>
  );
}

export default HeroImage;
