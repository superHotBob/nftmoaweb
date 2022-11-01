import React from 'react';
import styled from 'styled-components';

const HashTagStyles: React.FC<any> = ({ tags, ...props }) => {
  return (
    <Wrap {...props}>
      {tags.map((tag: string, idx: number) => (
        <Tag key={idx}>#{tag}</Tag>
      ))}
    </Wrap>
  );
};

export default HashTagStyles;
const Wrap = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const Tag = styled.li`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 26px;

  & + & {
    margin-left: 5px;
  }
`;
