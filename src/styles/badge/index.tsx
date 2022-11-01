import React from 'react';
import { Badge } from 'antd';
import styled from 'styled-components';

const BadgeStyles: React.FC<any> = ({ color = 'white', count, w, h, ...props }) => {
  const colorset: any = {
    white: { backgroundColor: '#fff', color: '#000', border: '1px solid #C9C9C9' },
    black: { backgroundColor: '#000', color: '#fff', border: '1px solid #C9C9C9' }
  };

  return (
    <Wrap w={w} h={h} color={colorset[color].color} {...props}>
      <Badge style={colorset[color]} count={count} overflowCount={99} />
    </Wrap>
  );
};

export default BadgeStyles;

const Wrap = styled.div<{ w?: number; h?: number; color?: string }>`
  .ant-scroll-number-only-unit {
    color: ${p => p.color} !important;
    font-weight: 700;
  }

  .ant-badge-count {
    ${p => p.w && `width: ${p.w}px;`}
    ${p => p.h && `height: ${p.h}px;`}
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
