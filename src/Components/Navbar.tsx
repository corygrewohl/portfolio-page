import React from "react";
import NavbarContainer from "./Styles/Navbar.styled";
import Instagram from "../assets/instagram.png";
import LinkedIn from "../assets/linkedin.png";
import GitHub from "../assets/github.png";
import { Link } from "react-scroll";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerHeader,
  DrawerBody,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

function Navbar() {
  const { isOpen, onOpen, onClose} = useDisclosure();

  return (
    <NavbarContainer>
      <div className="header-container">
        <h1>
          Cory<span>Grewohl</span>
        </h1>
        <div className="navigation">
          <Link to="skills" smooth="easeInOutQuart">
            {" "}
            Skills
          </Link>
          <Link to="projects" smooth="easeInOutQuart">
            Projects
          </Link>
          <Link to="aboutme" smooth="easeInOutQuart">
            {" "}
            About
          </Link>
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
      <div className="hamburger">
        <IconButton
          aria-label="Open Menu"
          icon={<HamburgerIcon color="black" />}
          colorScheme="linkedin"
          onClick={onOpen}
        ></IconButton>
        <Drawer placement="top" onClose={onClose} isOpen={isOpen} >
          <DrawerOverlay />
          <DrawerContent bgColor='#1D2228' color='#E1E2E2'>
            <DrawerBody display='flex' justifyContent='space-between' padding='2em' fontSize='26px20px' textAlign='center'>
                {/* <div className="hamburger-navigation"> */}
                  <Link to="skills" smooth="easeInOutQuart" onClick={() => onClose()}>
                    {" "}
                    Skills
                  </Link>
                  <Link to="projects" smooth="easeInOutQuart" onClick={() => onClose()}>
                    Projects
                  </Link>
                  <Link to="aboutme" smooth="easeInOutQuart" onClick={() => onClose()}>
                    {" "}
                    About
                  </Link>
                {/* </div> */}
                {/* <div className="hamburger-social-media"> */}
                  <a
                    href="https://www.linkedin.com/in/cory-grewohl/"
                    target="_blank"
                  >
                    <img src={LinkedIn} alt="LinkedIn Link" />
                  </a>
                  <a href="https://github.com/corygrewohl" target="_blank">
                    <img src={GitHub} alt="Github Link" />
                  </a>
                  <a
                    href="https://www.instagram.com/cory_greywhale/"
                    target="_blank"
                  >
                    <img src={Instagram} alt="Instagram Link" />
                  </a>
                {/* </div> */}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
