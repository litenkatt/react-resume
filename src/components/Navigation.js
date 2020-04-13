import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import { Link } from 'react-router-dom';

const StyledNavigation = styled.div`
  z-index: 100;
  display: flex;
  font-size: ${theme('fontSizes.huge')};
  & > a {
    position: absolute;
    top: 50vh;
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
      {before && <LeftArrowLink to={before}>➤</LeftArrowLink>}
      {after && <RightArrowLink to={after}>➤</RightArrowLink>}
    </StyledNavigation>
  );
};
