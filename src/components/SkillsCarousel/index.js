import React from 'react';
import {
  SkillsContainer,
  SkillsWrapper,
  SkillsH1,
  SkillsCard,
  SkillsH2,
  SkillsIcon,
  SkillsCarousel,
} from './SkillsElements';
import 'react-multi-carousel/lib/styles.css';
import pythonLogo from '../../images/plogo2.png';
import cppLogo from '../../images/cpplogo.png';
import cLogo from '../../images/clogo.png';
import githubLogo from '../../images/githublogo.png';
import jsLogo from '../../images/jslogo.png';
import cssLogo from '../../images/csslogo.png';
import awsLogo from '../../images/awslogo.png';
import javaLogo from '../../images/javalogo.svg';
import postgresLogo from '../../images/postgresqllogo.png';
import reactLogo from '../../images/reactlogo.png';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 768 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1100, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsH1>Skills</SkillsH1>
      <SkillsWrapper>
        <SkillsCarousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="transform 500ms ease-in-out"
          transitionDuration={1000}
          partialVisbile={false}
          arrows={false}
        >
          <SkillsCard>
            <SkillsIcon src={pythonLogo} alt="image" />
            <SkillsH2>Python</SkillsH2>
          </SkillsCard>
          <SkillsCard>
            <SkillsIcon src={cppLogo} alt="image" />
            <SkillsH2>C++</SkillsH2>
          </SkillsCard>
          <SkillsCard>
            <SkillsIcon src={cLogo} alt="image" />
            <SkillsH2>C</SkillsH2>
          </SkillsCard>
          <SkillsCard>
            <SkillsIcon src={githubLogo} alt="image" />
            <SkillsH2>Github</SkillsH2>
          </SkillsCard>
          <SkillsCard>
            <SkillsIcon src={jsLogo} alt="image" />
            <SkillsH2>Javascript</SkillsH2>
          </SkillsCard>
          <SkillsCard>
            <SkillsIcon src={cssLogo} alt="image" />
            <SkillsH2>CSS</SkillsH2>
          </SkillsCard>
          <SkillsCard>
            <SkillsIcon src={reactLogo} alt="image" />
            <SkillsH2>React</SkillsH2>
          </SkillsCard>
          <SkillsCard>
            <SkillsIcon src={awsLogo} alt="image" />
            <SkillsH2>AWS</SkillsH2>
          </SkillsCard>
          <SkillsCard>
            <SkillsIcon src={postgresLogo} alt="image" />
            <SkillsH2>PostgreSQL</SkillsH2>
          </SkillsCard>
          <SkillsCard>
            <SkillsIcon src={javaLogo} alt="image" />
            <SkillsH2>Java</SkillsH2>
          </SkillsCard>
        </SkillsCarousel>
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default Skills;
