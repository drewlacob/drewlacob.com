import React from 'react';
import {
  ExperienceContainer,
  ExperienceH1,
  ExperienceWrapper,
  ExperienceSoftware,
  ExperienceH3,
  ExperienceContent,
  ExperienceDetails,
  ExperienceWebDev,
  ExperienceH4,
  ExperienceSmall,
  CheckFill,
  ExperienceDetailsDesktop,
} from './SkillsElements';

const Skills = () => {
  return (
    <ExperienceContainer id="skills">
      <ExperienceH1 className="hidden">Skills</ExperienceH1>
      <ExperienceWrapper>
        <ExperienceSoftware className="hidden">
          <ExperienceH3>Software Development</ExperienceH3>
          <ExperienceContent>
            <ExperienceDetails>
              <CheckFill />
              <div>
                <ExperienceH4>Python</ExperienceH4>
                <ExperienceSmall>Experienced</ExperienceSmall>
              </div>
            </ExperienceDetails>
            <ExperienceDetails>
              <CheckFill />
              <div>
                <ExperienceH4>C++</ExperienceH4>
                <ExperienceSmall>Experienced</ExperienceSmall>
              </div>
            </ExperienceDetails>
            <ExperienceDetails>
              <CheckFill />
              <div>
                <ExperienceH4>C</ExperienceH4>
                <ExperienceSmall>Intermediate</ExperienceSmall>
              </div>
            </ExperienceDetails>
            <ExperienceDetails>
              <CheckFill />
              <div>
                <ExperienceH4>Java</ExperienceH4>
                <ExperienceSmall>Intermediate</ExperienceSmall>
              </div>
            </ExperienceDetails>
            <ExperienceDetailsDesktop>
              <CheckFill />
              <div>
                <ExperienceH4>Object-oriented Design</ExperienceH4>
                <ExperienceSmall>Intermediate</ExperienceSmall>
              </div>
            </ExperienceDetailsDesktop>
            <ExperienceDetailsDesktop>
              <CheckFill />
              <div>
                <ExperienceH4>Functional Programming</ExperienceH4>
                <ExperienceSmall>Intermediate</ExperienceSmall>
              </div>
            </ExperienceDetailsDesktop>
          </ExperienceContent>
        </ExperienceSoftware>
        <ExperienceWebDev className="hidden">
          <ExperienceH3>Web Development</ExperienceH3>
          <ExperienceContent>
            <ExperienceDetails>
              <CheckFill />
              <div>
                <ExperienceH4>Javascript</ExperienceH4>
                <ExperienceSmall>Experienced</ExperienceSmall>
              </div>
            </ExperienceDetails>
            <ExperienceDetails>
              <CheckFill />
              <div>
                <ExperienceH4>React</ExperienceH4>
                <ExperienceSmall>Experienced</ExperienceSmall>
              </div>
            </ExperienceDetails>
            <ExperienceDetails>
              <CheckFill />
              <div>
                <ExperienceH4>CSS</ExperienceH4>
                <ExperienceSmall>Intermediate</ExperienceSmall>
              </div>
            </ExperienceDetails>
            <ExperienceDetails>
              <CheckFill />
              <div>
                <ExperienceH4>HTML</ExperienceH4>
                <ExperienceSmall>Intermediate</ExperienceSmall>
              </div>
            </ExperienceDetails>
            <ExperienceDetails>
              <CheckFill />
              <div>
                <ExperienceH4>PostgreSQL</ExperienceH4>
                <ExperienceSmall>Intermediate</ExperienceSmall>
              </div>
            </ExperienceDetails>
            <ExperienceDetails>
              <CheckFill />
              <div>
                <ExperienceH4>Node JS</ExperienceH4>
                <ExperienceSmall>Intermediate</ExperienceSmall>
              </div>
            </ExperienceDetails>
          </ExperienceContent>
        </ExperienceWebDev>
      </ExperienceWrapper>
    </ExperienceContainer>
  );
};

export default Skills;
