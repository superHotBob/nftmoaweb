import React from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as CheckedIcon } from 'assets/svg/checked.svg';
import { ReactComponent as UnCheckedIcon } from 'assets/svg/unchecked.svg';

interface ICheckboxProps {
  label?: string | React.ReactNode;
  value?: string;
  style?: any;
  checked?: boolean;
  center?: boolean;
  icon?: any;
  onClick?: (value: string) => void;
}

interface ICheckboxItemProps {
  index?: number;
  active?: boolean;
  order?: string;
  value?: string;
  disabled?: boolean;
  checked?: boolean;
  onClick?: any;
  icon?: any;
}

interface ICheckbox extends React.FC<ICheckboxProps> {
  Item: React.FC<ICheckboxItemProps>;
}

const CheckboxItem: React.FC<ICheckboxItemProps> = ({ icon, checked, onClick, index, value }) => {
  return icon ? (
    <CheckboxIcon checked={checked} onClick={onClick}>
      {checked ? <CheckedIcon width={22} height={22} /> : <UnCheckedIcon width={22} height={22} />}
      <span>{value}</span>
    </CheckboxIcon>
  ) : (
    <Checkbox checked={checked} onClick={onClick}>
      {value}
    </Checkbox>
  );
};

const CheckboxStyles: ICheckbox = ({ icon, center = true, label, children, ...props }) => {
  const childrens = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      const value = child.props.value;
      const checked = child.props.checked;
      const option = { index, checked, value, icon };
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

CheckboxStyles.Item = CheckboxItem;
export default CheckboxStyles;
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
  gap: 13px;
  ${p => p.center && center}
`;

const Checkbox = styled.div<{ checked?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
  height: 40px;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.01em;
  border: 1px solid #cbcbcb;
  border-radius: 35px;
  color: rgba(0, 0, 0, 0.5);
  ${p => p.checked && active}
`;

const CheckboxIcon = styled.div<{ checked?: boolean }>`
  display: flex;
  align-items: center;
  width: 50%;

  & > span {
    display: inline-block;
    margin-left: 12px;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 0.01em;
    color: rgba(0, 0, 0, 0.5);
  }
`;
