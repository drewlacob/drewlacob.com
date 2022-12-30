import React from 'react';
import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterLinksWrapper,
  SocialMedia,
  SocialLogo,
  WebsiteRights,
  SocialMediaWrap,
  SocialLink,
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Me </FooterLinkTitle>
              <FooterLink to="hero" smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={true}>
                Home
              </FooterLink>
              <FooterLink to="about" smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={true}>
                About
              </FooterLink>
              <FooterLink
                to="experience"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                primary={true}
              >
                Experience
              </FooterLink>
              <FooterLink
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                primary={true}
              >
                Projects
              </FooterLink>
              <FooterLink to="skills" smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={true}>
                Skills
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contacts </FooterLinkTitle>
              <SocialLink href="https://www.linkedin.com/in/drew-lacob-83585b242/">LinkedIn</SocialLink>
              <SocialLink href="https://github.com/drewlacob">Github</SocialLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="hero" smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={true}>
              Drew Lacob
            </SocialLogo>
            <WebsiteRights>Drew Lacob Ⓒ {new Date().getFullYear()} All rights reserved.</WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
