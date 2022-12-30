import React from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroHeader } from './HeroElements';
import Video from '../../videos/video.mp4';
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  return (
    <HeroContainer id="hero">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroHeader>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 50,
              cursor: '_',
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Hi! I'm Drew Lacob. Welcome to my personal website")
                .pauseFor(3000)
                .deleteAll()
                .start();
            }}
          />
        </HeroHeader>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
