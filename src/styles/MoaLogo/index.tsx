import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CancleIcon } from 'assets/svg/deleteCircle.svg';
import { useNavigate } from 'react-router-dom';
import logo from 'assets/common/logo.png';

const MoaLogoStyles: React.FC<any> = () => {
  const navigate = useNavigate();

  return (
    <Wrap>
      <img src={logo} />
      <span>MOA Wallet</span>
    </Wrap>
  );
};

export default MoaLogoStyles;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }

  & > span {
    display: inline-block;
    font-weight: 700;
    font-size: 12px;
    color: #000000;
  }
`;
