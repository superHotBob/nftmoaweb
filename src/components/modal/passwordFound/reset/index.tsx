import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MailIcon } from 'assets/svg/mail.svg';
import { Form, Input } from 'antd';
import { Button } from 'styles';
import { ReactComponent as InvisibleEyeIcon } from 'assets/svg/invisibleEye.svg';

const PasswordResetComponent: React.FC<any> = () => {
  return (
    <Wrap>
      <Header>
        <h2>Reset the Password</h2>
        <MailIcon className="icon-mail" width={25} height={20} />
        <p>Please enter your new password</p>
      </Header>
      <WrapForm>
        <Form>
          <Form.Item name="password">
            <Input.Password size="large" type="password" placeholder="Password" iconRender={(visible: any) => (visible ? <InvisibleEyeIcon /> : <InvisibleEyeIcon />)} />
          </Form.Item>
          <Form.Item name="password-confirm">
            <Input.Password size="large" type="password" placeholder="Confirm Password" iconRender={(visible: any) => (visible ? <InvisibleEyeIcon /> : <InvisibleEyeIcon />)} />
          </Form.Item>
          <Form.Item className="btn-ok">
            <Button h={52} color="border" full text="OK" radius={10} />
          </Form.Item>
        </Form>
      </WrapForm>
    </Wrap>
  );
};

export default PasswordResetComponent;

const Wrap = styled.div``;
const Header = styled.div`
  text-align: center;
  margin-bottom: 31px;

  h2 {
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #747474;
  }

  .icon-mail {
    margin: 23px 0;
  }

  & > p {
    font-weight: 500;
    font-size: 10px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const WrapForm = styled.div`
  padding: 0 20px;

  .btn-ok {
    margin-top: 118px;
  }
`;
