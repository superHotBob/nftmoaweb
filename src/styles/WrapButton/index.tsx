import React from 'react';
import styled from 'styled-components';

const WrapButtonStyles: React.FC<any> = ({ gap, nopd = false, top, bottom, children, ...props }) => {
  return (
    <Wrap gap={gap} top={top} bottom={bottom} nopd={nopd} className={'nftmoa-btn-container'}>
      {children}
    </Wrap>
  );
};

export default WrapButtonStyles;

const Wrap = styled.div<{ top?: number; bottom?: number; nopd?: boolean; gap?: number }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px 20px;
  ${p => p.top && `margin-top: ${p.top}px;`}
  ${p => p.bottom && `margin-bottom: ${p.bottom}px;`}
  ${p => p.nopd && `padding:0;`}
  ${p => p.gap && `gap: ${p.gap}px;`}

  & + & {
    margin-top: 30px;
  }
`;
