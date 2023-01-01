import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SocialsLink,
} from './SidebarElements';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="hero" onClick={toggle} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
            Home
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
            About Me
          </SidebarLink>
          <SidebarLink
            to="experience"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Experience
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggle} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
            Projects
          </SidebarLink>
          <SidebarLink to="skills" onClick={toggle} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
            Skills
          </SidebarLink>
          <SocialsLink href="https://github.com/drewlacob">
            Github <span>&nbsp;</span>
            <FaGithub />
          </SocialsLink>
          <SocialsLink href="https://www.linkedin.com/in/drew-lacob-83585b242/">
            LinkedIn <span>&nbsp;</span>
            <FaLinkedin />
          </SocialsLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
