import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkStyle: React.FC<any> = ({ to, color = '#6f6f6f', size = 12, underline = true, children, ...props }) => {
  return (
    <Wrap className={'nftmoa-link'} size={size} color={color} underline={underline} {...props}>
      <Link to={to}>{children}</Link>
    </Wrap>
  );
};

export default LinkStyle;

const Wrap = styled.div<any>`
  display: inline-block;
  font-weight: 500;
  line-height: 19px;
  font-size: ${p => p.size}px;
  color: ${p => p.color};
  ${p => p.underline && `text-decoration-line: underline;`}
`;
