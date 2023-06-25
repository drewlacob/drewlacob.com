import React from 'react';
import {
  HeroContainer,
  HeroWrapper,
  HeroRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Column2,
  ImgWrap,
  Img,
  ResumeLink,
  ButtonWrapper,
  HeroButtonInverted,
} from './HeroElements';
import avatarPhoto from '../../images/Professional_Photo_Suit.jpg';
import resume from '../../images/resume.pdf';

const HeroSection = () => {
  return (
    <>
      <HeroContainer id="hero">
        <HeroWrapper>
          <HeroRow>
            <Column1>
              <ImgWrap className="hiddenStationary">
                <Img src={avatarPhoto} />
              </ImgWrap>
            </Column1>
            <Column2>
              <TextWrapper>
                <TopLine className="hiddenStationary">Hello, I'm</TopLine>
                <Heading className="hiddenStationary">Drew Lacob</Heading>
                <Subtitle className="hiddenStationary">
                  Learn more about me by viewing my resume, scrolling down, or connecting with me!
                </Subtitle>
                <ButtonWrapper>
                  <HeroButtonInverted className="hiddenStationary">
                    <ResumeLink href={resume}>View Resume</ResumeLink>
                  </HeroButtonInverted>
                  <HeroButtonInverted className="hiddenStationary">
                    <ResumeLink href="https://www.linkedin.com/in/drew-lacob-83585b242/">Let's Connect</ResumeLink>
                  </HeroButtonInverted>
                </ButtonWrapper>
              </TextWrapper>
            </Column2>
          </HeroRow>
        </HeroWrapper>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
