import React from 'react';
import styled from 'styled-components';
import { theme, ifProp, ifNotProp } from 'styled-tools';
import { Link } from 'react-router-dom';

const StyledNavigation = styled.div`
  z-index: 100;
  display: flex;
  & > a {
    position: fixed;
    top: ${ifProp('theme.desktop', '50vh')};
    bottom: ${ifNotProp('theme.desktop', '0.8rem')};
    font-size: ${theme('fontSizes.huge')};
  }
  & > div {
    display: ${ifProp('theme.desktop', 'none')};
    position: fixed;
    bottom: 0;
    left: 0;
    height: 10rem;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0) 0%, ${theme('colors.background')} 60%);
  }
`;

const LeftArrowLink = styled(Link)`
  left: 1rem;
  transform: scaleX(-1);
`;

const RightArrowLink = styled(Link)`
  right: 1rem;
`;

export const Navigation = ({ before, after }) => {
  return (
    <StyledNavigation>
      <div />
      {before && <LeftArrowLink to={before}>➤</LeftArrowLink>}
      {after && <RightArrowLink to={after}>➤</RightArrowLink>}
    </StyledNavigation>
  );
};
