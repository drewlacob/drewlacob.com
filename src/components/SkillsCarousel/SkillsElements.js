import Carousel from 'react-multi-carousel';
import styled from 'styled-components';

export const SkillsContainer = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 600px;
  }

  @media screen and (max-width: 480px) {
    height: 400px;
  }
`;

export const SkillsWrapper = styled.div`
  max-width: 1000px;
  align-items: center;
  color: #fff;
  height: 300px;
  background: #282c34;
  width: 70vw;
  border-radius: 64px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const SkillsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-top: 10px;
    margin-bottom: 32px;
  }
`;

export const SkillsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 30px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  transform: scale(0.8);

  &:hover {
    transform: scale(0.96);
    transition: all 0.2s ease-in-out;
  }
`;

export const SkillsIcon = styled.img`
  height: 140px;
  width: 140px;
  margin-bottom: 10px;
`;

export const SkillsH2 = styled.h2`
  font-size: 1rem;
  // margin-bottom: 10px;
  color: #000;
`;

export const SkillsCarousel = styled(Carousel)`
  width: 100%;
`;

export const SCWrapper = styled.div`
  background: #880808;
`;
