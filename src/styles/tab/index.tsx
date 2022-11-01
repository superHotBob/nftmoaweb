import React from 'react';
import styled, { css } from 'styled-components';
import { Badge } from 'styles';

interface ITabProps {
  label?: string;
  value?: string;
  style?: any;
  padding?: boolean;
  wrap?: boolean;
  active?: any;
  shape?: string;
  text?: string;
  onClick?: (value: string) => void;
}

interface ITabItemProps {
  index?: number;
  active?: boolean;
  order?: string;
  value?: string;
  disabled?: boolean;
  onClick?: any;
  text?: string;
  badge?: number;
  shape?: string;
  circle?: boolean;
}

interface ITab extends React.FC<ITabProps> {
  Item: React.FC<ITabItemProps>;
}

const TabItemStyles: React.FC<ITabItemProps> = ({ shape, badge, circle = false, active, onClick, disabled, text }) => {
  return (
    <TabItem shape={shape} circle={circle} active={active} disabled={disabled} onClick={onClick}>
      {text}
      {badge && <Badge className={'tab-badge'} count={badge} color={'black'} w={30} h={30} />}
    </TabItem>
  );
};

const TabStyles: ITab = ({ shape, wrap = false, padding = true, text, label, value, active, style, onClick, children }) => {
  const childrens = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      const item = child.props.value;
      const text = child.props.text || child.props.value;
      const option = { index, active: item === active, text, shape };
      return React.cloneElement(child as any, { ...option }, child.props.children);
    }
  });

  return (
    <Tab className={'nftmoa-tab-container'} wrap={wrap} shape={shape} padding={padding}>
      {childrens}
    </Tab>
  );
};

TabStyles.Item = TabItemStyles;

export default TabStyles;

const circle = css`
  border-radius: 65px;
  min-width: auto;
  padding: 0 25px;
  white-space: nowrap;
`;

const wrap = css`
  flex-wrap: wrap;
`;

const barShape = css`
  position: relative;
  border: 0;
  box-shadow: none;
  border-radius: 0;
  background: #fff;
  color: #000;
  padding-bottom: 20px;

  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #eaeaea;
    background: #fff;
  }
`;
const barShapeActive = css`
  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    border-bottom: 5px solid #000;
    background: #fff;
  }
`;

const noGap = css`
  gap: 0;
`;

const noPadding = css`
  padding: 0;
`;

const Tab = styled.div<{ shape?: string; padding?: boolean; wrap?: boolean }>`
  display: flex;
  ${p => p.wrap && wrap}
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${p => (p.padding ? '0 20' : 0)}px;
  gap: 7px;
  ${p => p.shape === 'bar' && noGap};
  ${p => p.shape === 'bar' && noPadding};

  .tab-badge {
    position: absolute;
    top: -15px;
    right: 0;
  }
`;

const TabItem = styled.button<{ active?: boolean; shape?: string; circle?: boolean }>`
  position: relative;
  flex: 1;
  height: 45px;
  border: 1px solid #efefef;
  border-radius: 10px;
  ${p => p.circle && circle}
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.06);
  ${p =>
    p.active
      ? `
    background: #000;
    color: #fff;
    `
      : `
    background:#fff;
    color: rgba(0, 0, 0, 0.5);
    `}
  ${p => p.shape === 'bar' && barShape}
  ${p => p.active && p.shape === 'bar' && barShapeActive}
  ${p => !p.active && p.shape !== 'bar' && `background:#fff;`}
`;
