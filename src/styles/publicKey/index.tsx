import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CancleIcon } from 'assets/svg/deleteCircle.svg';
import { useNavigate } from 'react-router-dom';

const PublickKeyStyles: React.FC<any> = ({ address, ...props }) => {
  const shortening = (v = '') => address.slice(0, 4) + '....' + v.slice(v.length - 4, v.length);
  return <Wrap {...props}>{shortening(address)}</Wrap>;
};

export default PublickKeyStyles;

const Wrap = styled.div`
  font-weight: 400;
  font-size: 14px;
  text-decoration-line: underline;
  color: #000000;
`;
