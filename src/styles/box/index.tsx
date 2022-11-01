import React from 'react';
import styled from 'styled-components';

const BoxStyles: React.FC<any> = ({ bg = '#fff', children, ...props }) => {
  return (
    <Wrap {...props}>
      <Box bg={bg}>{children}</Box>
    </Wrap>
  );
};

export default BoxStyles;

const Wrap = styled.div`
  width: 100%;
  text-align: center;
`;
const Box = styled.div<{ bg?: string }>`
  display: flex;
  padding: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.bg};
  border-radius: 20px;
`;
