import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CancelIcon } from 'assets/svg/deleteCircle.svg';
import { useNavigate } from 'react-router-dom';

const ModalLayout: React.FC<any> = ({ title, children }) => {
  const navigate = useNavigate();

  return (
    <Wrap>
      <Header>
        <h2>{title}</h2>
        <CancelIcon onClick={() => navigate(-1)} />
      </Header>
      {children}
    </Wrap>
  );
};

export default ModalLayout;

const Wrap = styled.div``;

const Header = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  height: 50px;
  padding: 0 20px;
  z-index: 99;

  & > h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #000000;
  }
`;
