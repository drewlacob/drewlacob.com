import styled from "styled-components";
import { BsPatchCheckFill } from "react-icons/bs";

export const ExperienceContainer = styled.div`
  background: #010606;
  color: #fff;
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 900px) {
    height: 1000px;
  }

  @media screen and (max-width: 480px) {
    height: 800px;
  }
`;

export const ExperienceH1 = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 48px;
  margin-top: 64px;
  font-variant: small-caps;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-top: 10px;
    margin-bottom: 32px;
  }
`;

export const ExperienceWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const ExperienceH3 = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
  font-variant: small-caps;

  @media screen and (max-width: 600px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const ExperienceSoftware = styled.div`
  background: #282c34;
  padding: 2.4rem 5rem;
  border-radius: 2rem;
  border: 2px #282c34 solid;
  margin: 3rem;

  &:hover {
    background: transparent;
    border: 2px #01bf71 solid;
    transform: scale(1.02);
    transition: all 0.4s ease-in-out;
  }

  @media screen and (max-width: 1024px) {
    width: 90%;
    padding: 2rem;
    margin: 0 auto;
  }

  @media screen and (max-width: 600px) {
    width: 80%;
    padding: 2rem 4rem;
  }
`;

export const ExperienceWebDev = styled.div`
  background: #282c34;
  padding: 2.4rem 5rem;
  border-radius: 2rem;
  border: 2px #282c34 solid;
  margin: 3rem;

  &:hover {
    background: transparent;
    border: 2px #01bf71 solid;
    transform: scale(1.02);
    transition: all 0.4s ease-in-out;
  }

  @media screen and (max-width: 1024px) {
    width: 90%;
    padding: 2rem;
    margin: 0 auto;
  }

  @media screen and (max-width: 600px) {
    width: 80%;
    padding: 2rem 3rem;
  }
`;

export const ExperienceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
  column-gap: 4rem;
  justify-content: center;

  @media screen and (max-width: 480px) {
    column-gap: 2rem;
  }
`;

export const ExperienceDetails = styled.article`
  display: flex;
  gap: 1rem;
`;

export const ExperienceDetailsDesktop = styled.article`
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 1400px) {
    display: none;
  }
`;

export const ExperienceH4 = styled.h4``;

export const ExperienceSmall = styled.small`
  color: gray;
`;

export const CheckFill = styled(BsPatchCheckFill)`
  margin-top: 6px;
  color: #01bf71;
`;
