import React from "react";
import styled from "styled-components";
import { theme } from "styled-tools";

const StyledHeader = styled.div`
  color: ${theme("colors.purple")};
`;

export const Header = ({}) => {

  return (
    <StyledHeader>
        <h1>NINNI</h1>
        
    </StyledHeader>
  );
};