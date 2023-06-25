import React from 'react';
import {
  ExperienceContainer,
  ExperienceH1,
  ExperienceWrapper,
  ExperienceCard,
  ExperienceH2,
  ExperienceDate,
  ExperienceP,
  ExperienceCompany,
} from './ExperienceElements';

const Experience = () => {
  return (
    <ExperienceContainer id="experience">
      <ExperienceH1 className="hidden">Experience</ExperienceH1>
      <ExperienceWrapper>
        <ExperienceCard className="hidden">
          <ExperienceH2>Software Engineering Intern</ExperienceH2>
          <ExperienceCompany href="https://www.ga-asi.com/">General Atomics</ExperienceCompany>
          <ExperienceDate>Summer 2023</ExperienceDate>
        </ExperienceCard>
        <ExperienceCard className="hidden">
          <ExperienceH2>Backend Engineering Intern</ExperienceH2>
          <ExperienceCompany href="https://www.abstudios.us/">Above and Beyond Studios</ExperienceCompany>
          <ExperienceDate>Summer 2022</ExperienceDate>
          <ExperienceP>
            During my time at ABS, I worked in a small team doing backend web development. I helped to create a
            PostgreSQL database for live testing with AWS. I implemented password reset, a contact-us page, and Google
            login integration. I also created checkout flow using Stripe and Node JS webhooks. Furthermore, I designed
            and implemented a mailer functionality for use throughout the site.
          </ExperienceP>
        </ExperienceCard>
        <ExperienceCard className="hidden">
          <ExperienceH2>Undergraduate Researcher</ExperienceH2>
          <ExperienceCompany href="http://www.lab-paris.com/">PARIS Lab at UCLA</ExperienceCompany>
          <ExperienceDate>10/2021 - 06/2022</ExperienceDate>
          <ExperienceP>
            In a research lab at UCLA, I worked to develop a package for high performance peridynamics simulations to
            further research in crack propagation of different materials. I used functional programming and test-driven
            development to design and optimize simulations in Python.
          </ExperienceP>
        </ExperienceCard>
      </ExperienceWrapper>
    </ExperienceContainer>
  );
};

export default Experience;
