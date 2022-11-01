import React from 'react';
import styled, { css } from 'styled-components';

const LabelStyle: React.FC<any> = React.forwardRef(({ label, children, ...props }, ref) => {
  return (
    <Wrap className={'nftmoa-label-container'}>
      {label && <Label className={'ntfmoa-label'}>{label}</Label>}
      <Item className={'nftmoa-label-content'}>{children}</Item>
    </Wrap>
  );
});

export default LabelStyle;

const border = css`
  border: 1px solid #e6e8ec;
  box-sizing: border-box;
  border-radius: 12px;
`;
const Wrap = styled.div``;
const Label = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.5);
  margin: 12px 0px;
`;

const Item = styled.div``;
