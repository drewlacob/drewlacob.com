import styled from 'styled-components';

export const HeroContainer = styled.div`
  color: #fff;
  background: #010606;

  @media screen and (max-width: 768px) {
    padding-top: 40px;
    padding-bottom: 50px;
  }

  @media screen and (max-width: 480px) {
    padding-top: 30px;
    padding-bottom: 0px;
  }
`;

export const HeroWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 900px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 900px;
  }

  @media screen and (max-width: 600px) {
    height: 800px;
  }
`;

export const HeroRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col2 col1';

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col2' 'col1';
    align-content: space-evenly;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;

  @media screen and (max-width: 480px) {
    margin-bottom: 0;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;

  @media screen and (max-width: 480px) {
    margin-bottom: 0;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 30px;

  @media screen and (max-width: 480px) {
    padding-bottom: 0;
  }
`;

export const TopLine = styled.p`
  color: #31b0f5;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  // font-variant: small-caps;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #f7f8fa;
  // font-variant: small-caps;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 25px;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
`;

export const ResumeLink = styled.a`
  color: white;
  text-decoration: none;
  font-style: italic;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 10px 0 10px;
  padding-right: 0;
  border-radius: 10px;

  @media screen and (max-width: 768px) and (min-width: 500px) {
    height: 600px;
  }
`;

export const HeroButton = styled.button`
  max-width: 440px;
  height: 50px;
  margin-bottom: 5px;
  padding: 8px;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  color: white;
  background-color: #01bf71;
  text-decoration: none;
  font-style: italic;
  cursor: pointer;
  border-radius: 10px;
  border: 2px white solid;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: transparent;
    color: #01bf71;
    border: 2px #01bf71 solid;
  }
`;

export const HeroButtonInverted = styled.button`
  max-width: 440px;
  height: 50px;
  margin-bottom: 5px;
  padding: 8px;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  color: #31b0f5;
  background-color: transparent;
  text-decoration: none;
  font-style: italic;
  cursor: pointer;
  border-radius: 10px;
  border: 2px #31b0f5 solid;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: #31b0f5;
    color: transparent;
    border: 2px white solid;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
