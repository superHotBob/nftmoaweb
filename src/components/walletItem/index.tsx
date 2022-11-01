import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MoreIcon } from 'assets/svg/moreArrow.svg';
import { useNavigate } from 'react-router-dom';

const WalletItemComponent: React.FC<any> = ({ name, iconUrl, onClick }) => {
  const navigate = useNavigate();

  return (
    <WalletItem className="wrap-list" onClick={onClick}>
      <img src={iconUrl} />
      <Name>{name}</Name>
      <MoreIcon className="icon-more" />
    </WalletItem>
  );
};

export default WalletItemComponent;

const WalletItem = styled.div`
  padding: 17px 0;

  & + & {
    border-top: 1px solid #f3f3f3;
  }

  & > img {
    width: 35px;
    height: 30px;
    object-fit: contain;
    overflow: hidden;
  }

  .icon-more {
    position: absolute;
    right: 20px;
  }
`;
const Name = styled.div`
  margin-left: 20px;
  align-self: flex-start;
  font-weight: 700;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.01em;
  color: #101010;
`;
