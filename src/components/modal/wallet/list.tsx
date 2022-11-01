import React from 'react';
import styled from 'styled-components';
import { WALLET_LIST } from 'api/mock/wallet';
import WalletItem from 'components/walletItem';
import { Link, useNavigate } from 'react-router-dom';

const WalletListComponent: React.FC<any> = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  return (
    <Wrap>
      <Header>
        <h2>
          Connect
          <br />
          Your Wallet
        </h2>
        <p>
          By connecting your wallet, you agree to our <Link to="">Terms of Service </Link> and our <Link to="">Privacy Policy.</Link>
        </p>
      </Header>

      {WALLET_LIST.map((item, idx) => (
        <WalletItem key={idx} {...item} onClick={() => navigate('/wallet')} />
      ))}

      <Button onClick={() => setOpen(!open)}>What is a wallet?</Button>
      {open && (
        <div className="msg-wallet">
          Wallets are used to send, receive, and store digital assets like Ether. Wallets come in many forms. They are either built into your browser, an extension added to your browser, a piece of
          hardware plugged into your computer or even an app on your phone. For more information about wallets, see this explanation.
        </div>
      )}
    </Wrap>
  );
};

export default WalletListComponent;

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
  margin-bottom: 30px;

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
    letter-spacing: 0.01em;
    color: #6f6f6f;

    a {
      font-size: 14px;
      font-weight: 700;
      color: #000;
      text-decoration: underline;
    }
  }
`;

const Button = styled.div`
  margin-top: 20px;
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 0.01em;
  text-decoration-line: underline;
  color: #101010;
`;
