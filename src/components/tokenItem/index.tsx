import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MoreIcon } from 'assets/svg/moreArrow.svg';
import { useNavigate } from 'react-router-dom';
import { WrapIcon } from 'styles';

const TokenItemComponent: React.FC<any> = ({ iconUrl, amount, price, crypto, name, id, more = true }) => {
  const navigate = useNavigate();

  return (
    <TokenItem className="nftmoa-token-item wrap-list" onClick={more ? () => navigate('') : undefined}>
      <StyledIcon>
        <WrapIcon w={44} h={44}>
          <img src={iconUrl} />
        </WrapIcon>
      </StyledIcon>

      {name ? (
        <Name>{name}</Name>
      ) : (
        <div>
          <Amount>
            {amount} {crypto}
          </Amount>
          <Price>$ {price}</Price>
        </div>
      )}
      {more && <MoreIcon className="icon-more" />}
    </TokenItem>
  );
};

export default TokenItemComponent;

const TokenItem = styled.div`
  padding: 20px;
  border-bottom: 1px solid #f3f3f3;
  cursor: pointer;

  .icon-more {
    position: absolute;
    right: 20px;
  }
`;

const StyledIcon = styled.div`
  margin-right: 17px;
`;

const Name = styled.div`
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.5);
`;

const Amount = styled.div`
  font-weight: 700;
  font-size: 18px;
  color: #000000;
  text-transform: uppercase;
`;
const Price = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
`;
