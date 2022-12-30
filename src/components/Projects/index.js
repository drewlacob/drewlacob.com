import React from 'react';
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
  ProjectLink,
  ProjectsIconWrapper,
} from './ProjectsElements';
import KeschetIcon from '../../images/keschet.png';
import ClimBlogLogo from '../../images/cbLogo.png';
import GhostRacerPhoto from '../../images/grPhoto.png';
const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectLink href="https://github.com/drewlacob/keschet">
          <ProjectsCard>
            <ProjectsIcon src={KeschetIcon} />
            <ProjectsH2>Keschet</ProjectsH2>
            <ProjectsP>Chess-variant game created in Python using Tkinter</ProjectsP>
          </ProjectsCard>
        </ProjectLink>
        <ProjectLink href="https://github.com/drewlacob/ClimBlog">
          <ProjectsCard>
            <ProjectsIcon src={ClimBlogLogo} />
            <ProjectsH2>ClimBlog</ProjectsH2>
            <ProjectsP>Social media for climbers using React and Node JS</ProjectsP>
          </ProjectsCard>
        </ProjectLink>
        <ProjectLink href="https://github.com/drewlacob/Ghostracer">
          <ProjectsCard>
            <ProjectsIcon src={GhostRacerPhoto} />
            <ProjectsH2>Ghostracer</ProjectsH2>
            <ProjectsP>Basic real-time video game implemented in C++ using OOP</ProjectsP>
          </ProjectsCard>
        </ProjectLink>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
