import React from 'react';
// import { FaGithub } from 'react-icons/fa';
// import { FaLinkedin } from 'react-icons/fa';
import {
  FooterContainer,
  FooterLogo,
  FooterList,
  FooterLink,
  FooterSocials,
  FooterSocialItem,
  FooterCopyright,
  FooterSmall,
  GithubLogo,
  LinkedInLogo,
} from './FooterElements';
const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo to="hero" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
        Drew Lacob
      </FooterLogo>
      <FooterList>
        <FooterLink to="hero" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
          Home
        </FooterLink>
        <FooterLink to="about" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
          About
        </FooterLink>
        <FooterLink to="experience" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
          Experience
        </FooterLink>
        <FooterLink to="projects" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
          Projects
        </FooterLink>
        <FooterLink to="skills" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
          Skills
        </FooterLink>
      </FooterList>

      <FooterSocials>
        <FooterSocialItem href="https://www.linkedin.com/in/drew-lacob-83585b242/">
          <LinkedInLogo />
        </FooterSocialItem>
        <FooterSocialItem href="https://github.com/drewlacob">
          <GithubLogo />
        </FooterSocialItem>
      </FooterSocials>

      <FooterCopyright>
        <FooterSmall>&copy; Drew Lacob {new Date().getFullYear()} All rights reserved.</FooterSmall>
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;
