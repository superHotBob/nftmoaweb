import React from 'react';
import styled, { css } from 'styled-components';

const WrapIconStyles: React.FC<any> = ({ type = 'circle', bg, w, h, children, ...props }) => {
  return (
    <Wrap type={type} w={w} h={h} bg={bg} {...props}>
      {children}
    </Wrap>
  );
};

export default WrapIconStyles;

const circle = css`
  border-radius: 50%;
`;
const Wrap = styled.div<{ bg?: string; type?: string; w?: number; h?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${p => p.w}px;
  height: ${p => p.h}px;
  border: 1px solid #eae9e9;
  ${p => p.type === 'circle' && circle}
  background: ${p => (p.bg ? p.bg : 'transparent')};
`;
