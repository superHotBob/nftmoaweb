import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Mark } from 'assets/svg/mark-exclamation.svg';

const NotFoundDataStyles: React.FC<any> = ({ icon, title, desc, ...props }) => {
  return (
    <Wrap {...props}>
      {icon ? <Icon>{icon}</Icon> : <Mark />}
      {title && <Title>{title}</Title>}
      {desc && <Desc>{desc}</Desc>}
    </Wrap>
  );
};

export default NotFoundDataStyles;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
`;
const Icon = styled.div``;
const Title = styled.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 44px;
  text-align: center;
  color: #171718;
`;
const Desc = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #565656;
  margin-top: 8px;
`;
