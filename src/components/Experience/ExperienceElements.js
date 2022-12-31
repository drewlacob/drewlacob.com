import styled from 'styled-components';

export const ExperienceContainer = styled.div`
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #010606;
`;

export const ExperienceWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const ExperienceH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  margin-top: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-top: 10px;
    margin-bottom: 32px;
  }
`;

export const ExperienceCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  border: 2px #fff solid;

  &:hover {
    transform: scale(1.02);
    transition: all 0.4s ease-in-out;
    background: transparent;
    border: 2px #01bf71 solid;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    max-height: 380px;
  }
`;

export const ExperienceH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ExperienceDate = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ExperienceCompany = styled.a`
  font-size: 1rem;
  margin-bottom: 10px;
  font-weight: bold;
  color: #01bf71;
  text-decoration: none;
  font-style: italic;

  &:hover {
    text-decoration: underline;
  }
`;

export const ExperienceP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
