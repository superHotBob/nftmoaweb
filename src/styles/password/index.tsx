import React, { MutableRefObject, ReactPropTypes } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as InvisibleEyeIcon } from 'assets/svg/invisibleEye.svg';
import { Input } from 'antd';

const PasswordStyles: React.FC<any> = React.forwardRef(({ last = false, bar = true, barPos, h, value, placeholder, border = true, label, ...props }, ref) => {
  const inputRef: any = React.useRef();
  React.useImperativeHandle(
    ref,
    () => ({
      getValue: () => inputRef?.current.input.value
    }),
    [inputRef]
  );

  return (
    <Wrap last={last} className={'nftmoa-input-container nftmoa-input-password'}>
      {label && <Label>{label}</Label>}
      <StyledInput border={border} bar={bar} barPos={barPos} h={h} {...props}>
        <Input.Password ref={inputRef} size="large" type="password" placeholder={placeholder} iconRender={(visible: any) => (visible ? <InvisibleEyeIcon /> : <InvisibleEyeIcon />)} />
      </StyledInput>
    </Wrap>
  );
});

export default PasswordStyles;

const border = css`
  border: 1px solid #e6e8ec;
  box-sizing: border-box;
  border-radius: 12px;
`;

const Wrap = styled.div<{ last?: boolean }>`
  ${p => !p.last && `margin-bottom: 20px;`}
`;

const Label = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.5);
  margin: 12px 0px;
`;

const StyledInput = styled.div<{ bar?: boolean; border?: boolean; barPos?: number; h?: number; suffix?: boolean; prefix?: boolean }>`
  position: relative;
  align-items: center;
  padding-left: 25px;
  background: #fff;
  padding-right: 8px;
  height: ${p => (p.h ? p.h : 47)}px;
  ${p => p.border && border}

  .ant-input-affix-wrapper {
    width: 100%;
    height: 100%;
    padding: 0 !important;
    border: none;
    background: transparent !important;

    &:hover,
    &:focus {
      border: none !important;
      box-shadow: unset !important;
    }
  }

  .ant-input {
    background: transparent !important;
  }

  &::after {
    content: '';
    position: absolute;
    left: ${p => (p.barPos ? p.barPos : 15)}px;
    top: 50%;
    margin-top: -5.5px;
    display: inline-block;
    width: 2px;
    height: 11px;
    background-color: #000;
    ${p => !p.bar && 'display: none;'}
  }

  & > input {
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: -0.01em;
    color: #000000;

    &::placeholder {
      color: rgba(0, 0, 0, 0.25);
    }
  }
`;
