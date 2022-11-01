import React from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as CheckedIcon } from 'assets/svg/selected.svg';
import { ReactComponent as UnCheckedIcon } from 'assets/svg/unSelected.svg';

// 본체
interface IRadioProps {
  label?: string;
  value?: string;
  center?: boolean;
  style?: any;
  onChange?: (value: string) => void;
}

// 아이템
interface IRadioItemProps {
  index?: number;
  checked?: boolean;
  order?: string;
  value?: string;
  disabled?: boolean;
  handleChange?: (value: string) => void;
}

interface IRadio extends React.FC<IRadioProps> {
  Item: React.FC<IRadioItemProps>;
}

const RadioItem: React.FC<IRadioItemProps> = ({ checked, handleChange, children, value }) => {
  return (
    <Checkbox checked={checked} onClick={() => handleChange!(value!)}>
      {checked ? <CheckedIcon width={20} height={20} /> : <UnCheckedIcon width={20} height={20} />}
      <span>{children}</span>
    </Checkbox>
  );
};

const RadioStyles: IRadio = ({ center = true, label, value, children, onChange, ...props }) => {
  const childrens = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      const item = child.props.value;
      const handleChange = (v: string) => {
        onChange && onChange(v);
      };
      const option = { index, checked: item === value?.toString(), value: item, handleChange };
      return React.cloneElement(child as any, { ...option });
    }
  });
  return (
    <Wrap>
      {typeof label !== 'string' ? label : <h2>{label}</h2>}
      <Checkboxs className="wrap-checkbox" center={center}>
        {childrens}
      </Checkboxs>
    </Wrap>
  );
};

RadioStyles.Item = RadioItem;
export default RadioStyles;
const active = css`
  background: #000;
  color: #fff;
  border: 1px solid #000;
`;

const center = css`
  justify-content: center;
`;

const Wrap = styled.div`
  h2 {
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.01em;
    color: #000000;
    margin-bottom: 12px;
  }
`;

const Checkboxs = styled.div<{ center?: boolean }>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  ${p => p.center && center}
`;

const Checkbox = styled.div<{ checked?: boolean }>`
  width: 50%;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.01em;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 15px;

  & > span {
    display: inline-block;
    padding-left: 13px;
  }
`;
