import React from "react";
import NavbarContainer from "./Styles/Navbar.styled";
import Instagram from "../assets/instagram.png";
import LinkedIn from "../assets/linkedin.png";
import GitHub from "../assets/github.png";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <NavbarContainer>
      <div className="header-container">
        <h1>Cory<span>Grewohl</span></h1>
        <div className="navigation">
          <Link to="projects" smooth="easeInOutQuart">Projects</Link>
          <Link to="skills" smooth="easeInOutQuart"> Skills</Link>
          <Link to="aboutme" smooth="easeInOutQuart"> About</Link>
        </div>
      </div>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/cory-grewohl/" target="_blank">
          <img src={LinkedIn} alt="LinkedIn Link" />
        </a>
        <a href="https://github.com/corygrewohl" target="_blank">
          <img src={GitHub} alt="Github Link" />
        </a>
        <a href="https://www.instagram.com/cory_greywhale/" target="_blank">
          <img src={Instagram} alt="Instagram Link" />
        </a>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
