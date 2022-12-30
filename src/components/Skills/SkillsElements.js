import styled from 'styled-components';

export const SkillsContainer = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 900px;
  }
`;

export const SkillsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  align-items: center;
  padding: 0 50px;

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
