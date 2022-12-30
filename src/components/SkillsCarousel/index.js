import React from 'react';
import {
  SkillsContainer,
  SkillsWrapper,
  SkillsH1,
  SkillsCard,
  SkillsH2,
  SkillsIcon,
  SkillsCarousel,
  SCWrapper,
} from './SkillsElements';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import pythonLogo from '../../images/plogo2.png';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 768 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 767, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsH1>Skills</SkillsH1>
      <SkillsWrapper>
        {/* <SkillsCard>
          <SkillsIcon src={pythonLogo} alt="image" />
          <SkillsH2>Python</SkillsH2>
        </SkillsCard> */}
        <SkillsCarousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={1000}
          partialVisbile={false}
          // centerMode={true}
          arrows={true}
        >
          {/* <div>item1</div>
          <div>item2</div>
          <div>item3</div>
          <div>item4</div>
          <div>item5</div>
          <div>item6</div>
          <div>item7</div>
          <div>item8</div> */}
          <SkillsCard>
            <SkillsIcon src={pythonLogo} alt="image" />
            <SkillsH2>Python</SkillsH2>
          </SkillsCard>

          <SkillsCard>
            <SkillsIcon src={pythonLogo} alt="image" />
            <SkillsH2>C++</SkillsH2>
          </SkillsCard>

          <SkillsCard>
            <SkillsIcon src={pythonLogo} alt="image" />
            <SkillsH2>C</SkillsH2>
          </SkillsCard>

          <SkillsCard>
            <SkillsIcon src={pythonLogo} alt="image" />
            <SkillsH2>Linux</SkillsH2>
          </SkillsCard>

          <SkillsCard>
            <SkillsIcon src={pythonLogo} alt="image" />
            <SkillsH2>Github</SkillsH2>
          </SkillsCard>

          <SkillsCard>
            <SkillsIcon src={pythonLogo} alt="image" />
            <SkillsH2>Javascript</SkillsH2>
          </SkillsCard>
        </SkillsCarousel>
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default Skills;
