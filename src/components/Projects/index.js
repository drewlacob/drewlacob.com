import React from "react";
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
  ProjectLink,
} from "./ProjectsElements";
import KeschetIcon from "../../images/keschet.png";
import ClimBlogLogo from "../../images/cbLogo.png";
import GhostRacerPhoto from "../../images/grPhoto.png";
import MetagenomicsPhoto from "../../images/metagenomics.png";

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsH1 className="hidden">Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectLink href="https://github.com/drewlacob/keschet">
          <ProjectsCard className="hidden">
            <ProjectsIcon src={KeschetIcon} />
            <ProjectsH2>Keschet</ProjectsH2>
            <ProjectsP>Chess-variant game created in Python using Tkinter</ProjectsP>
          </ProjectsCard>
        </ProjectLink>
        <ProjectLink href="https://github.com/drewlacob/ClimBlog">
          <ProjectsCard className="hidden">
            <ProjectsIcon src={ClimBlogLogo} />
            <ProjectsH2>ClimBlog</ProjectsH2>
            <ProjectsP>Social media for climbers using React and Node JS</ProjectsP>
          </ProjectsCard>
        </ProjectLink>
        <ProjectLink href="https://github.com/drewlacob/Ghostracer">
          <ProjectsCard className="hidden">
            <ProjectsIcon src={GhostRacerPhoto} />
            <ProjectsH2>Ghostracer</ProjectsH2>
            <ProjectsP>Real-time video game implemented in C++ </ProjectsP>
          </ProjectsCard>
        </ProjectLink>
        <ProjectLink href="https://github.com/drewlacob/metagenomics">
          <ProjectsCard className="hidden">
            <ProjectsIcon src={MetagenomicsPhoto} />
            <ProjectsH2>Metagenomics</ProjectsH2>
            <ProjectsP> Mapping reads to source genomes using Python </ProjectsP>
          </ProjectsCard>
        </ProjectLink>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
