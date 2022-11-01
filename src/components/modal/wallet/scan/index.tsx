import React from 'react';
import styled from 'styled-components';
import { WALLET_LIST } from 'api/mock/wallet';
import ListComponent from 'components/walletItem';
import { Link } from 'react-router-dom';
import { Button } from 'styles';

const WalletScanQRComponent: React.FC<any> = () => {
  return (
    <Wrap>
      <Header>
        <h2>Scan to connect</h2>
        <p>
          Open <b>{'Coinbase Wallet'}</b> on your mobile phone and scan
        </p>
      </Header>

      <StyledQR>
        <img src="https://user-images.githubusercontent.com/45615584/163587096-dd582a84-8443-4865-957c-37bae879fe9c.png" />
      </StyledQR>

      <Button color={'border'} text="CONNECT WALLET" radius={10} full h={52} onClick={() => console.log('connect wallet')} />
      <StyledLink>
        <Link to="">Skip for now</Link>
      </StyledLink>
    </Wrap>
  );
};

export default WalletScanQRComponent;

const Wrap = styled.div`
  padding: 20px;

  .msg-wallet {
    font-weight: 500;
    font-size: 12px;
    line-height: 19px;
    color: #6f6f6f;
  }
`;
const Header = styled.div`
  margin-bottom: 25px;

  & > h2 {
    font-weight: 800;
    font-size: 30px;
    line-height: 35px;
    text-transform: uppercase;
    color: #101010;
    margin: 0px 0px 10px;
  }

  & > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 26px;
    color: #6f6f6f;

    b {
      font-size: 14px;
      font-weight: 700;
      color: #000;
    }
  }
`;

const StyledQR = styled.div`
  margin-bottom: 100px;
  width: 248px;
  height: 248px;
  margin: 0 auto 80px;
`;

const StyledLink = styled.div`
  text-align: center;
  margin-top: 19px;
  margin-bottom: 50px;

  & > a {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #565656;
  }
`;
