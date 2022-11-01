import React, { MutableRefObject, ReactPropTypes } from 'react';
import styled, { css } from 'styled-components';

const SelectLabelStyle: React.FC<any> = React.forwardRef(({ label, children, ...props }, ref) => {
  const inputRef: any = React.useRef();
  React.useImperativeHandle(
    ref,
    () => ({
      getValue: () => inputRef?.current.value
    }),
    [inputRef]
  );

  return (
    <Wrap className={'nftmoa-select-container'}>
      {label && <Label>{label}</Label>}
      <StyledSelect>{children}</StyledSelect>
    </Wrap>
  );
});

export default SelectLabelStyle;

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
  margin: 0px 0px 12px;
`;
const StyledSelect = styled.div`
  .ant-select {
    width: 100%;
  }

  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border: none;
  }

  .ant-select-selector {
    padding: 0 !important;
    height: 47px !important;
  }

  .ant-select-selection-item {
    color: #000;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: -0.01em;
    color: #000000;
    line-height: 47px !important;
  }
  .ant-select-arrow {
    transform-origin: 50% 37%;
    top: 50%;

    & > svg {
      fill: none;

      path {
        fill: none;
        stroke: #000;
      }
    }
  }
  .ant-select-open {
    .ant-select-arrow {
      transform: rotate(-180deg);
    }
  }
`;
