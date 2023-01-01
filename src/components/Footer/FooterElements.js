import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
export const FooterContainer = styled.footer`
  background: #282c34;
  padding: 3rem 0;
  text-align: center;
  font-size: 0.9rem;
`;

export const FooterLogo = styled(LinkS)`
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  display: inline-block;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

export const FooterList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto 2rem;
  gap: 1rem;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const FooterLink = styled(LinkS)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

export const FooterSocials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const FooterSocialItem = styled.a`
  background: #000;
  color: #fff;
  padding: 0.9rem;
  border-radius: 0.7rem;
  display: flex;
  border: 1px solid transparent;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

export const FooterCopyright = styled.div``;

export const FooterSmall = styled.small`
  color: #fff;
`;

export const GithubLogo = styled(FaGithub)`
  transform: scale(2);
`;

export const LinkedInLogo = styled(FaLinkedin)`
  transform: scale(2);
`;
