import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;
  background: #010606;

  @media screen and (max-width: 768px) {
    padding-top: 80px;
    padding-bottom: 140px;
  }

  @media screen and (max-width: 480px) {
    padding-top: 40px;
    padding-bottom: 0px;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 1000px;
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

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col2 col1';

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1' 'col2';
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
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #f7f8fa;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 15px;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
`;

export const ResumeLink = styled.a`
  max-width: 440px;
  margin-bottom: 5px;
  font-size: 18px;
  line-height: 24px;
  color: #01bf71;
  text-decoration: none;
  font-style: italic;

  &:hover {
    text-decoration: underline;
  }
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px;
  padding-right: 0;
`;
