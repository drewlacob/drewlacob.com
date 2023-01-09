import React from "react";
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, SocialsLink } from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav id="nav">
        <NavbarContainer>
          <NavLogo to="hero" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
            Drew Lacob
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                About Me
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="experience" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                Experience
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="skills" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                Skills
              </NavLinks>
            </NavItem>
            <NavItem>
              <SocialsLink href="https://github.com/drewlacob">
                Github <span>&nbsp;</span>
                <FaGithub />
              </SocialsLink>
            </NavItem>
            <NavItem>
              <SocialsLink href="https://www.linkedin.com/in/drew-lacob-83585b242/">
                LinkedIn <span>&nbsp;</span>
                <FaLinkedin />
              </SocialsLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
