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
                <Heading>CS at UCLA, CO 2024</Heading>
                <Subtitle>
                  Hi there! I'm Drew, a current junior studying computer science at UCLA. I was born and raised in San
                  Diego, California. This summer I will be a Software Engineer Intern at General Atomics. Outside of my
                  career, my favorite hobbies are rock climbing, weightlifting, and going to the beach!{' '}
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
