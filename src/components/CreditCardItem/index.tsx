import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CancleIcon } from 'assets/svg/deleteCircle.svg';
import { useNavigate } from 'react-router-dom';

const CreditCardItemComponent: React.FC<any> = ({ code, lastName, firstName, cardName, cardTypeUrl, cardType, cardNumber, expirationYear, expirationMonth, securityCode }) => {
  const navigate = useNavigate();

  return (
    <CreditCard>
      <CardType>
        <img src={cardTypeUrl} />
      </CardType>
      <CardName>{cardName}</CardName>
      <UserName>
        {lastName} {firstName}
      </UserName>
      <CardNumber>{cardNumber}</CardNumber>
      <Bottom className={'wrap-list'}>
        <dl className={'item-left'}>
          <dt>EXP DATE</dt>
          <dd>
            {expirationMonth}/{expirationYear}
          </dd>
        </dl>
        <dl className={'item-right'}>
          <dt>CVV NUMBER</dt>
          <dd>{securityCode}</dd>
        </dl>
      </Bottom>
    </CreditCard>
  );
};

export default CreditCardItemComponent;

const CreditCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 287px;
  height: 175px;
  background: linear-gradient(113.75deg, #e46e00 21.44%, #fa3c00 119.11%);
  border-radius: 12px;
  padding: 20px;
  overflow: hidden;

  &::after {
    content: '';
    width: 318px;
    height: 219px;
    position: absolute;
    top: 43px;
    left: -86px;
    background: rgba(99, 116, 189, 0.15);
    -webkit-transform: rotate(4.02deg);
    -ms-transform: rotate(4.02deg);
    transform: rotate(35.02deg);
    border-radius: 95% 47% 75% 48%;
  }
`;
const CardName = styled.div`
  margin-bottom: 7px;
  font-weight: 400;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.7);
`;

const UserName = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  margin-bottom: 24px;
`;

const CardNumber = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  margin-bottom: 24px;
`;

const Bottom = styled.div`
  gap: 40px;

  dl {
    dt {
      font-weight: 400;
      font-size: 10px;
      line-height: 12px;
      color: rgba(255, 255, 255, 0.7);
    }

    dd {
      font-weight: 400;
      font-size: 10px;
      line-height: 12px;
      color: #ffffff;
    }
  }
`;

const CardType = styled.div`
  position: absolute;
  top: 29px;
  right: 20px;

  width: 55px;
  height: 17px;
  color: #fff;
`;
