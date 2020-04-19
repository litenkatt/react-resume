import React from 'react';
import styled from 'styled-components';

const StyledText = styled.div``;

export const List = ({ title, list }) => {
  return (
    <StyledText>
      <h3>{title}</h3>
      {list.map((item) => (
        <p>{item}</p>
      ))}
    </StyledText>
  );
};
