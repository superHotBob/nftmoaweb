import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MailIcon } from 'assets/svg/mail.svg';
import { Form, Input } from 'antd';
import { Button } from 'styles';

const PasswordFoundComponent: React.FC<any> = () => {
  return (
    <Wrap>
      <Header>
        <h2>Finding a Password</h2>
        <MailIcon className="icon-mail" width={25} height={20} />
        <p>Please enter your email address.</p>
      </Header>
      <WrapForm>
        <Form>
          <Form.Item name="email" rules={[{ required: false, message: 'Please input your Email' }]}>
            <Input type="email" size="large" placeholder="Email" />
          </Form.Item>
          <Form.Item className="btn-send">
            <Button h={52} color="border" full text="SEND" radius={10} />
          </Form.Item>
        </Form>
      </WrapForm>
    </Wrap>
  );
};

export default PasswordFoundComponent;

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

  .btn-send {
    margin-top: 177px;
  }
`;
