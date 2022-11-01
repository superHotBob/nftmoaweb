import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CancleIcon } from 'assets/svg/deleteCircle.svg';
import { ReactComponent as EditIcon } from 'assets/svg/edit.svg';
import { ReactComponent as PlusGradientRedIcon } from 'assets/svg/plusGradientRed.svg';
import { ReactComponent as InstagramIcon } from 'assets/svg/instagram.svg';
import { ReactComponent as TwitterIcon } from 'assets/svg/twitter.svg';

import { useNavigate } from 'react-router-dom';
import { Upload } from 'antd';
import { Button, Input, Password } from 'styles';
import { BottomSheet } from 'react-spring-bottom-sheet';
import PasswordFoundComponent from 'components/modal/passwordFound';
import VerifiedCodeComponent from 'components/modal/passwordFound/verify';
import PasswordResetComponent from 'components/modal/passwordFound/reset';
import WalletListComponent from 'components/modal/wallet/list';
import WalletScanQRComponent from 'components/modal/wallet/scan';

const ProfileEditView: React.FC<any> = () => {
  const navigate = useNavigate();
  const nicknameRef: any = React.useRef(null);
  const emailRef: any = React.useRef(null);
  const passwordRef: any = React.useRef(null);
  const instagramRef: any = React.useRef(null);
  const twitterRef: any = React.useRef(null);
  const [open, setOpen] = React.useState({ wallet: false, password: false });
  const [modalPage, setModalPage] = React.useState('WALLETLIST');
  const [inputs, setInputs] = React.useState({ nickname: '', email: '', password: '', instagram: '', twitter: '' });

  const handleSubmit = () => {
    console.log(inputs);
  };

  return (
    <Wrap>
      <Header>
        <h2>Edit Profile</h2>
        <CancleIcon onClick={() => navigate(-1)} />
      </Header>

      <ProfileImage>
        <dl className="wrap-list">
          <dt>
            <Upload>
              <EditIcon />
            </Upload>
          </dt>
          <dd>
            <p>
              We recommend an image of at least
              <br /> 800x800px.
            </p>
            <button className="wrap-list" onClick={() => setOpen({ wallet: true, password: false })}>
              <PlusGradientRedIcon style={{ marginRight: 7 }} />
              <span>Connect Wallet</span>
            </button>
          </dd>
        </dl>
      </ProfileImage>

      <Input ref={nicknameRef} label={'nickname'} onChange={() => setInputs({ ...inputs, nickname: nicknameRef?.current.getValue() })} />
      <Input ref={emailRef} label={'email'} onChange={() => setInputs({ ...inputs, email: emailRef?.current.getValue() })} />
      <Password last={true} ref={passwordRef} label={'password'} onChange={() => setInputs({ ...inputs, password: passwordRef?.current.getValue() })} />
      <p className="notice" onClick={() => setOpen({ wallet: false, password: true })}>
        Forgot Password?
      </p>
      <Input ref={instagramRef} label={'instagram'} suffix={<InstagramIcon />} onChange={() => setInputs({ ...inputs, instagram: instagramRef?.current.getValue() })} />
      <Input ref={twitterRef} label={'twitter'} suffix={<TwitterIcon width={24} height={17} />} onChange={() => setInputs({ ...inputs, twitter: twitterRef?.current.getValue() })} />

      <StyledButton>
        <Button color={'border'} full text={'OK'} radius={10} onClick={handleSubmit} h={52} />
      </StyledButton>

      <BottomSheet open={open.password || open.wallet} onDismiss={() => setOpen({ wallet: false, password: false })} snapPoints={({ minHeight }) => minHeight}>
        {open.password && (
          <>
            {modalPage === 'PWFOUND' && <PasswordFoundComponent />}
            {modalPage === 'PWCODE' && <VerifiedCodeComponent />}
            {modalPage === 'PWRESET' && <PasswordResetComponent />}
          </>
        )}
        {open.wallet && (
          <>
            {modalPage === 'WALLETLIST' && <WalletListComponent />}
            {modalPage === 'WALLETSCANQR' && <WalletScanQRComponent />}
          </>
        )}
      </BottomSheet>
    </Wrap>
  );
};

export default ProfileEditView;

const Wrap = styled.div`
  padding: 22px 20px;

  .notice {
    margin-top: 13px;
    margin-bottom: 20px;
    padding-left: 17px;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    text-decoration-line: underline;
    color: rgba(0, 0, 0, 0.5);
  }
`;

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
  margin-bottom: 20px;
  padding: 0 20px;
  z-index: 99;

  & > h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #000000;
  }
`;

const ProfileImage = styled.div`
  dl {
    align-items: center;

    dt {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 80px;
      overflow: hidden;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.5);
      background: linear-gradient(180deg, #00d1ff 0%, #ff0000 100%);
      background: -ms-linear-gradient(180deg, #00d1ff 0%, #ff0000 100%);
      background: -moz-linear-gradient(180deg, #00d1ff 0%, #ff0000 100%);
      background: -webkit-linear-gradient(180deg, #00d1ff 0%, #ff0000 100%);
      border-radius: 120px;
    }

    dd {
      margin-left: 16px;

      & > p {
        margin-bottom: 14px;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: rgba(0, 0, 0, 0.5);
      }

      & > button {
        & > span {
          display: block;
          font-weight: 700;
          font-size: 14px;
          line-height: 26px;
          letter-spacing: 0.01em;
          background: linear-gradient(94.15deg, #ff0005 -5.83%, #f80089 45.18%, #091b84 95.14%);
          background: -ms-linear-gradient(94.15deg, #ff0005 -5.83%, #f80089 45.18%, #091b84 95.14%);
          background: -moz-linear-gradient(94.15deg, #ff0005 -5.83%, #f80089 45.18%, #091b84 95.14%);
          background: -webkit-linear-gradient(94.15deg, #ff0005 -5.83%, #f80089 45.18%, #091b84 95.14%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      }
    }
  }
`;

const StyledButton = styled.div`
  margin: 30px 0;
`;
