import React from 'react';
import styled from 'styled-components';
import { prop, theme } from 'styled-tools';

const StyledList = styled.div`
  margin: 4rem 0;
  & > h2 {
    text-align: center;
    margin: 0;
    border-bottom: 1px solid ${theme('colors.base')};
    & > span {
        display: inline-block;
    }
    & > span:nth-child(2) {
      font-size: 50%;
      margin-left: 1rem;
      color: ${theme('colors.grey')};
    }
  }
  & > div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const StyledItem = styled.p`
  font-size: ${prop('percent', '100%')};
  display: inline-block;
  margin: 0 0.5rem;
`;

export const List = ({ title, subTitle, list }) => {
  return (
    <StyledList>
      <h2>
        <span>{title}</span>
        <span>{subTitle}</span>
      </h2>
      <div>
        {list.map((item, i) => (
          <StyledItem key={`${item}_${i}`} percent={130 - i * 8 + '%'}>
            {item}
          </StyledItem>
        ))}
      </div>
    </StyledList>
  );
};
