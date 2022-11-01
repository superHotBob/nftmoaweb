import React from 'react';
import styled from 'styled-components';

const FixedButtonStyles: React.FC<any> = ({ bottom = 30, children, ...props }) => {
  return (
    <Wrap bottom={bottom} className={'nftmoa-btn-fixed-bottom'}>
      {children}
    </Wrap>
  );
};

export default FixedButtonStyles;

const Wrap = styled.div<{ bottom?: number }>`
  position: absolute;
  bottom: ${p => p.bottom}px;
  left: 0;
  right: 0;
  width: 100%;
  padding: 0 20px;
`;
