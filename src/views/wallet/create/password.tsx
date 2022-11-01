import React from 'react';
import styled from 'styled-components';
import { Checkbox } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { Button, FixedButton, Password } from 'styles';
import logo from 'assets/common/logo.png';
import { ReactComponent as CancelIcon } from 'assets/svg/deleteCircle.svg';

const MoaWalletPasswordView: React.FC<any> = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/wallet');
  };

  return (
    <Wrap>
      <Header>
        <div className="wrap-list">
          <img src={logo} />
          <h2>MOA Wallet</h2>
        </div>
        <CancelIcon onClick={() => navigate(-1)} />
      </Header>

      <PageIntro>
        <h3>Create Password</h3>
        <p className="desc">This password unlocks Moa wallet only on this device.</p>
      </PageIntro>

      <Form>
        <Password bar={false} placeholder={'password with more than 8 digits'} />
        <Password bar={false} placeholder={'Confirm Password'} />
        <Checkbox>
          I understand that moa cannot recover this password. <br /> <Link to="">Learn more about this.</Link>
        </Checkbox>
      </Form>
      <FixedButton>
        <Button color="border" full rect text="CREATE PASSWORD" onClick={handleSubmit} />
      </FixedButton>
    </Wrap>
  );
};

export default MoaWalletPasswordView;

const Wrap = styled.div`
  .btn-container {
    padding: 0 20px;
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

  & > .wrap-list {
    & > img {
      width: 30px;
      height: 30px;
      margin-right: 7px;
    }

    & > h2 {
      font-weight: 700;
      font-size: 24px;
      color: #000000;
    }
  }
`;

const PageIntro = styled.div`
  padding: 20px 25px;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 30px;

  & > h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: -0.01em;
    margin-bottom: 12px;
    color: #000000;
  }

  & > .desc {
    font-weight: 400;
    font-size: 14px;
    line-height: 26px;
    color: #6f6f6f;
  }
`;

const Form = styled.div`
  padding: 0 20px 30px;
  margin-bottom: 23px;

  .nftmoa-input-password {
    margin-bottom: 12px;
  }

  .ant-checkbox-wrapper {
    margin-top: 18px;
  }

  .ant-checkbox-inner {
    border-color: #7e7e7e !important;
  }

  .ant-checkbox + span {
    font-weight: 500;
    font-size: 12px;
    line-height: 19px;
    color: #6f6f6f;
  }

  a {
    text-decoration: underline;
  }
`;
