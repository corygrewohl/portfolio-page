import React from "react";
import ArrowsContainer from "./Arrows.styled";
import { Link, animateScroll as scroll } from "react-scroll";

function Arrows() {

  return (
    <ArrowsContainer>
      <Link to="projects" smooth='easeInOutQuart' duration={1000}>
      <span></span>
      <span></span>
      <span></span>
      </Link>
    </ArrowsContainer>
  );
}

export default Arrows;
