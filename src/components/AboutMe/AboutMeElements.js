import styled from 'styled-components';

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  background: #282c34;
  height: 100vh;
`;

export const AboutContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  margin-right: 5rem;
`;

export const AboutContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 4rem;
`;
export const AboutHeader = styled.div`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding-top: 20px;
`;
export const AboutH1 = styled.div`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  //   grid-row-start: 2;
  //   grid-column-start: 1;
  text-align: center;
`;

export const AboutH2 = styled.div`
  color: #fff;
  font-size: 14px;
  //   grid-row-start: 3;
  //   grid-column-start: 1;
  text-align: center;
`;

export const Picture = styled.img`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 80%;
  border-radius: 30vw;
  border: 2px solid #fff;
  margin-top: 10vh;
  margin-left: 2vw;
`;
