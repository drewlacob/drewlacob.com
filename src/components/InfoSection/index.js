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
import avatarPhoto from '../../images/professionalPhoto.jpg';
import resume from '../../images/resume.pdf';

const InfoSection = () => {
  return (
    <>
      <InfoContainer id="about">
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine className="hidden">About Me</TopLine>
                <Heading className="hidden">CS at UCLA</Heading>
                <Subtitle id="aboutMiddleText" className="hidden">
                  I'm Drew, a senior studying computer science at UCLA, class of 2024. I was born and raised in San
                  Diego, California. This summer I am a Software Engineering Intern at General Atomics. Outside of my
                  career, my favorite hobbies are rock climbing, weightlifting, and going to the beach.
                </Subtitle>
                <ResumeLink className="hidden" href={resume}>
                  View Resume
                </ResumeLink>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap id="aboutPhoto" className="hiddenStationary">
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
