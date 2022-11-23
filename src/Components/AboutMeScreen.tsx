import React from "react";
import {
  AboutMeContainer,
  AboutMeContentContainer,
} from "./Styles/AboutMe.styled";
import AboutMePic from "../assets/aboutmepic.jfif";
import Fade from "react-reveal/Fade";

function AboutMeScreen() {
  return (
    <>
      <AboutMeContainer>
        <Fade left>
          <h2 className="title aboutme">About Me</h2>
          <AboutMeContentContainer>
            <img src={AboutMePic} alt="" />
            <div className="info">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab amet
              aperiam vel aspernatur quod! Sunt hic maxime, eum est tempore eos
              praesentium explicabo doloremque atque suscipit animi totam
              facilis! Porro?
            </div>
          </AboutMeContentContainer>
        </Fade>
      </AboutMeContainer>
    </>
  );
}

export default AboutMeScreen;
