import React from 'react';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Column2,
  ImgWrap,
  Img,
  ResumeLink,
} from './InfoElements';
import avatarPhoto from '../../images/avatarPhoto.jpg';
import resume from '../../images/resume.pdf';

const InfoSection = () => {
  return (
    <>
      <InfoContainer id="about">
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>About Me</TopLine>
                <Heading>CS at UCLA</Heading>
                <Subtitle>
                  I'm Drew, a junior studying computer science at UCLA, class of 2024. I was born and raised in San
                  Diego, California. This summer I will be a Software Engineer Intern at General Atomics. Outside of my
                  career, my favorite hobbies are rock climbing, weightlifting, and going to the beach.
                </Subtitle>
                <ResumeLink href={resume}>View Resume</ResumeLink>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={avatarPhoto} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
