import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';

const StyledText = styled.div``;

const StyledItem = styled.p`
    font-size: ${prop("rem", "2rem")};
`;

export const List = ({ title, list }) => {
  return (
    <StyledText>
      <h3>{title}</h3>
      {list.map((item, i) => (
        <StyledItem key={item} rem={(4 - i/4) + "rem"}>{item}</StyledItem>
      ))}
    </StyledText>
  );
};
