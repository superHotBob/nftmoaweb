import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CancleIcon } from 'assets/svg/deleteCircle.svg';
import { ReactComponent as QRcode } from 'assets/svg/qrcode.svg';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Label, Labelbox, MoaLogo, SelectLabel, StepItem, WrapButton, WrapIcon } from 'styles';
import { MY_TOKEN_ORDER } from 'api/mock/wallet';
import { digit } from 'utils';

const WalletTokenOrderView: React.FC<any> = () => {
  const navigate = useNavigate();
  const { balance, logoUrl, purchase, symbol, methods, fee, total, token, amount, usd } = MY_TOKEN_ORDER;
  const handleSubmit = () => {
    navigate('/wallet/token/order/success');
  };

  return (
    <Wrap>
      <ScanQR>
        <WrapIcon w={48} h={48}>
          <QRcode />
        </WrapIcon>
      </ScanQR>

      <Section>
        <StepItem num={2} title={'Order preview'} />
      </Section>

      <StyledBalance className={'wrap-list s-b'}>
        <Label label={'Your Balance'}>
          <Balance>$ {digit(balance, 0, true, true)}</Balance>
        </Label>
        <MoaLogo />
      </StyledBalance>

      <Card>
        <div className="section wrap-list s-b">
          <Token>
            <img src={logoUrl} />
            <dl>
              <dt>{token}</dt>
              <dd>{symbol}</dd>
            </dl>
          </Token>
          <Price>
            <dl>
              <dt>$ {usd}</dt>
              <dd>
                {amount} {symbol}
              </dd>
            </dl>
          </Price>
        </div>
        <div className="section">
          <CardInfo>
            <Label label={'Payment Method'}>
              <CardNumber>{methods.cardNumber}</CardNumber>
            </Label>
            <img src={methods.cardTypeImgUrl} />
          </CardInfo>
        </div>
        <div className={'section'}>
          <table>
            <tr>
              <th>Purchase Price</th>
              <td>${digit(20000, 0, true, true)}</td>
            </tr>
            <tr>
              <th>fee</th>
              <td>${digit(30.96, 2, true, true)}</td>
            </tr>
          </table>
        </div>
        <div className={'section'}>
          <table>
            <tr>
              <th>total</th>
              <td className="bold">${digit(230.06, 2, true, true)}</td>
            </tr>
          </table>
        </div>

        <div className={'nftmoa-notice t-c'}>
          Processed by Cryptoline every purchases
          <br />
          secured by the
          <Link to=""> Privacy Policy</Link>
        </div>
      </Card>
      <Button full rect color={'black'} text={'CONFIRM ORDER'} h={52} onClick={handleSubmit} />
    </Wrap>
  );
};

export default WalletTokenOrderView;

const Wrap = styled.div`
  background: #f8fafc;
  padding: 20px;
`;
const ScanQR = styled.button`
  position: fixed;
  top: 0;
  right: 20px;
  z-index: 99;
`;
const Section = styled.div`
  margin-bottom: 20px;
`;
const Balance = styled.div`
  font-weight: 700;
  font-size: 30px;
  line-height: 26px;
  /* or 87% */

  display: flex;
  align-items: center;
  letter-spacing: -0.01em;

  color: #000000;
`;

const StyledBalance = styled.div`
  padding: 0 20px;
  margin-bottom: 19px;
  align-items: flex-end !important;
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #efefef;
  box-sizing: border-box;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  border-radius: 17px;
  padding-bottom: 25px;
  margin-bottom: 23px;

  & > .section {
    padding: 23px 30px;
  }

  & > .section + .section {
    border-top: 1px solid #eaeaea;
  }

  table {
    th {
      text-align: left;
      padding-bottom: 10px;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.5);
    }

    td {
      padding-bottom: 10px;
      text-align: right;
      font-weight: 400;
      font-size: 16px;
      color: #000000;
    }
  }
`;

const Token = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  & > img {
    width: 48px;
    height: 48px;
    margin-right: 13px;
  }

  & > dl {
    dt {
      font-weight: 700;
      font-size: 16px;
      color: #000000;
    }
    dd {
      font-weight: 700;
      font-size: 12px;
      line-height: 26px;
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;

const Price = styled.div`
  & > dl {
    text-align: right;
    dt {
      font-weight: 700;
      font-size: 16px;
      color: #000000;
    }
    dd {
      font-weight: 700;
      font-size: 12px;
      line-height: 26px;
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;

const CardNumber = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #000000;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end !important;

  img {
    width: 44px;
    height: 15px;
  }
`;
