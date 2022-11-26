import React from "react";
import {
  AboutMeContainer,
  AboutMeContentContainer,
} from "./Styles/AboutMe.styled";
import AboutMePic from "../assets/aboutmepic.jfif";

import ReactPic from "../assets/Skills/react.png"
import HTMLPic from "../assets/Skills/html.png"
import CSSPic from "../assets/Skills/css.png"
import JSPic from "../assets/Skills/js.png"
import TSPic from "../assets/Skills/ts.png"
import ReduxPic from "../assets/Skills/redux.png"
import StyledCompnentsPic from "../assets/Skills/styled-components.png"

function AboutMeScreen() {
  return (
    <>
      <AboutMeContainer>
        <h2 className="title aboutme">😎About Me</h2>
        <AboutMeContentContainer>
          <img src={AboutMePic} alt="" />
          <div className="info">
            Hi, my name is Cory Grewohl and I'm currently a senior computer
            science major at California Baptist University. At the end of my
            junior year I felt I had learned a lot, but I wanted to pick one
            area to really dive into. I loved creating Guavah in <img src={ReactPic} alt="" />React Native
            for my junior capstone class, so I decided to focus on web
            development to learn <img src={ReactPic} alt="" />React, but first I knew I had to go back to the
            basics.
            <br />
            <br />
            So, starting in May 2022, I started learning everything I could about <img src={HTMLPic} alt="" />
            HTML, <img src={CSSPic} alt="" />CSS, and <img src={JSPic} alt="" />Javascript by making as many projects I could. And
            for the last few months I have dove into the <img src={ReactPic} alt="" />React ecosystem, trying
            to learn as much about <img src={ReactPic} alt="" />React as I can, and learn the important
            related technologies like <img src={TSPic} alt="" />Typescript, <img src={ReduxPic} alt="" />Redux, <img src={StyledCompnentsPic} alt="" />Styled-Components, and
            more by creating multiple projects.
            <br />
            <br />
            In my free time I like to skateboard, hang out with friends, eat,
            and play guitar. I also love Lego, cats, and movies. I honestly
            really do enjoy front end development and I'm eager to learn more,
            including learning backend technologies.
          </div>
        </AboutMeContentContainer>
      </AboutMeContainer>
    </>
  );
}

export default AboutMeScreen;
