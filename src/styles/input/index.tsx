import React from 'react';
import styled, { css } from 'styled-components';

const InputStyles: React.FC<any> = React.forwardRef(
  ({ last = false, pl, preValue, type = 'text', bar = true, barPos, h, placeholder, border = true, label, labelSuffix, prefix, suffix, ...props }, ref) => {
    const inputRef: any = React.useRef();
    const [value, setValue] = React.useState(preValue ? preValue : '');
    React.useImperativeHandle(
      ref,
      () => ({
        getValue: () => inputRef?.current.value
      }),
      [inputRef]
    );

    return (
      <Wrap className={'ntfmoa-input-container'} last={last}>
        <StyledLabel>
          {label && <Label>{label}</Label>}
          {labelSuffix && <Label>{labelSuffix}</Label>}
        </StyledLabel>
        <StyledInput isValue={value.length > 0} pl={pl} suffix={suffix ? true : false} prefix={prefix ? true : false} border={border} bar={bar} barPos={barPos} h={h} {...props}>
          {prefix && prefix}
          <input ref={inputRef} value={value} placeholder={placeholder} type={type} onChange={(v: any) => setValue(v.target.value)} />
          {suffix && suffix}
        </StyledInput>
      </Wrap>
    );
  }
);

export default InputStyles;

const border = css`
  border: 1px solid #e6e8ec;
  box-sizing: border-box;
  border-radius: 12px;
`;

const wrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 9px;
`;

const Wrap = styled.div<{ last?: boolean }>`
  ${p => (!p.last ? '`margin-bottom: 20px;' : 'margin-bottom:0;')}
`;

const Label = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.5);
  margin: 0px 0px 12px;
`;

const StyledInput = styled.div<{ isValue?: boolean; pl?: number; bar?: boolean; border?: boolean; barPos?: number; h?: number; suffix?: boolean; prefix?: boolean }>`
  position: relative;
  align-items: center;
  padding-left: 25px;
  background: ${p => (p.isValue ? '#fff' : '#F9F9F9')};
  height: ${p => (p.h ? p.h : 47)}px;
  ${p => p.border && border}
  ${p => (p.suffix || p.prefix) && wrapper}
  ${p => p.pl && `padding-left:${p.pl}px;`}

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

const StyledLabel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
