import React, { useContext } from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import { ThemeContext } from '../utils/contexts';
import linkedin from '../assets/images/linkedin.png';
import githubWhite from '../assets/images/githubWhite.png';
import githubBlack from '../assets/images/githubBlack.png';

const StyledInfobox = styled.div`
  flex: 1;
  max-width: 35rem;
  border: 1px solid ${theme('colors.body')};
  margin: 2rem 0;
  padding: 1rem;
  & > h4 {
    text-align: center;
    font-size: ${theme('fontSizes.big')}

  }
  & > a {
    display: block;
    text-align: center;
    padding: 0.5rem;
    font-size: ${theme('fontSizes.big')}
  }
  & > div {
    display: flex;
    justify-content: space-around;
    margin: 2rem 0;
    & > a > img {
      width: 6rem;
    }
  }
`;

export const InfoBox = ({ t }) => {
  const { small, dark } = useContext(ThemeContext);
  const github = dark ? githubWhite : githubBlack;
  return (
    <StyledInfobox>
      {small && <h4>{t('name')}</h4>}
      <h4>{t('street')}</h4>
      <h4>{t('postal')}</h4>
      {t('links', { returnObjects: true }).map((link) => (
        <a key={link.href} href={link.href}>{link.text}</a>
      ))}
      <div>
        <a href="https://www.linkedin.com/in/ninni-hörnaeus-b50325133">
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a href="https://github.com/litenkatt/react-resume">
          <img src={github} alt="Github" />
        </a>
      </div>
    </StyledInfobox>
  );
};
