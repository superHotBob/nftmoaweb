import React from 'react';
import styled, { css } from 'styled-components';

const TextareaStyles: React.FC<any> = React.forwardRef(({ h, bar = true, maxLength, minLength, rows, cols, label, barPos, placeholder, border = true, ...props }, ref) => {
  const inputRef: any = React.useRef();
  const [value, setValue] = React.useState('');
  React.useImperativeHandle(
    ref,
    () => ({
      getValue: () => inputRef?.current.value
    }),
    [inputRef]
  );

  return (
    <Wrap className={'nftmoa-textarea-container'}>
      {label && <Label>{label}</Label>}
      <StyledTextarea isValue={value.length > 0} h={h} border={border} bar={bar} barPos={barPos} {...props}>
        <textarea ref={inputRef} rows={rows} cols={cols} maxLength={maxLength} minLength={minLength} placeholder={placeholder} onChange={(v: any) => setValue(v.target.value)} />
      </StyledTextarea>
    </Wrap>
  );
});

export default TextareaStyles;

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
const StyledTextarea = styled.div<{ isValue?: boolean; bar?: boolean; h?: number; border?: boolean; barPos?: number }>`
  position: relative;
  padding-top: 5px;
  padding-left: 25px;
  height: ${p => (p.h ? p.h : 94)}px;
  background: ${p => (p.isValue ? '#fff' : '#F9F9F9')};
  ${p => p.border && border}
  ${p => !p.bar && `padding-left: 0px;`}

  &::after {
    content: '';
    position: absolute;
    top: 17px;
    left: ${p => (p.barPos ? p.barPos : 15)}px;
    display: inline-block;
    width: 2px;
    height: 11px;
    background-color: #000;
    ${p => !p.bar && `display: none;`}
  }

  & > textarea {
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: -0.01em;
    color: #000000;

    &::placeholder {
      color: rgba(0, 0, 0, 0.25);
    }
  }
`;
