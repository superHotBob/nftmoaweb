import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MailIcon } from 'assets/svg/mail.svg';
import { ReactComponent as TwitterIcon } from 'assets/svg/twitter.svg';
import { ReactComponent as FacebooklIcon } from 'assets/svg/facebook.svg';
import { ReactComponent as GoogleIcon } from 'assets/svg/google.svg';
import { Form, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { ReactComponent as InvisibleEyeIcon } from 'assets/svg/invisibleEye.svg';
import { Button } from 'styles';
import { Link, useNavigate } from 'react-router-dom';

import cookie from 'js-cookie';

import { useSelector, useDispatch } from 'react-redux';
import { login } from 'store/reducers/System';

import APIService from 'api';

const apiService = new APIService();

const SignInComponent: React.FC<any> = ({ modalPage }) => {
  const navigate = useNavigate();
  const emailRef: any = React.useRef(null);
  const nameRef: any = React.useRef(null);
  const pwRef: any = React.useRef(null);
  const pwConfirmRef: any = React.useRef(null);
  const [inputs, setInputs] = React.useState({ email: '', name: '', password: '', rePassword: '' });
  const handleSubmit = async () => {
    console.log(inputs, 'inputs');
    const emailChck = await apiService.emailCheck(inputs.email);

    if (!emailChck.duplicated) {
      const signUpChk = await apiService.signUp(inputs);

      if (signUpChk?.status === 200) {
        alert('회원가입 완료');
        modalPage('LOGIN');
      }

      console.log(signUpChk, 'signUpChk');
    } else {
      alert('used Email please new Email');
    }
    console.log(emailChck, 'emailChck');
  };

  return (
    <Wrap>
      <Sec>
        <h2>SIGN UP</h2>
        <p>By signing in you are agreeing our Term and privacy policy</p>
        <ul className="wrap-list wrap-list-icon">
          <li className="block">
            <button type="button">
              <GoogleIcon />
            </button>
          </li>
          <li>
            <button type="button">
              <FacebooklIcon />
            </button>
          </li>
          <li>
            <button type="button">
              <TwitterIcon />
            </button>
          </li>
        </ul>
      </Sec>
      <Hr />
      <WrapForm>
        <Form>
          <Form.Item name="email" rules={[{ required: false, message: 'Please input your Username!' }]}>
            <Input ref={emailRef} size="large" placeholder="Email Address" onChange={() => setInputs({ ...inputs, email: emailRef?.current.input.value })} />
          </Form.Item>
          <Form.Item name="name" rules={[{ required: false, message: 'Please input your Username!' }]}>
            <Input ref={nameRef} placeholder={'name'} onChange={() => setInputs({ ...inputs, name: nameRef?.current.input.value })} />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password
              ref={pwRef}
              size="large"
              type="password"
              placeholder="Password"
              iconRender={(visible: any) => (visible ? <InvisibleEyeIcon /> : <InvisibleEyeIcon />)}
              onChange={() => setInputs({ ...inputs, password: pwRef?.current.input.value })}
            />
          </Form.Item>
          <Form.Item name="password-confirm">
            <Input.Password
              ref={pwConfirmRef}
              size="large"
              type="password"
              placeholder="Confirm Password"
              onChange={() => setInputs({ ...inputs, rePassword: pwConfirmRef?.current.input.value })}
              iconRender={(visible: any) => (visible ? <InvisibleEyeIcon /> : <InvisibleEyeIcon />)}
            />
          </Form.Item>
          <Form.Item className="center">Please verify your email to continue.</Form.Item>
          <Form.Item>
            <Button h={52} color="border" full text="OK" radius={10} onClick={handleSubmit} />
          </Form.Item>
        </Form>
      </WrapForm>
    </Wrap>
  );
};

export default SignInComponent;

const Wrap = styled.div`
  ul.wrap-list-icon {
    margin: 30px 0 0 0;
    width: 100%;

    flex-wrap: wrap;
    gap: 10px;
    li {
      width: calc(50% - 5px);
    }

    .block {
      width: 100%;
    }

    button {
      padding: 9px 0;
      width: 100%;
      height: 51px;
      background: #ffffff;
      border: 1px solid #efefef;
      box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.06);
      border-radius: 10px;
    }
  }
`;

const Sec = styled.div`
  padding: 20px 20px;

  h2 {
    font-weight: 800;
    font-size: 30px;
    line-height: 35px;
    color: #101010;

    + p {
      margin-top: 7px;
      font-weight: 500;
      font-size: 10px;
      line-height: 16px;
      letter-spacing: 0.01em;
      color: #747474;
      margin-bottom: 30px;
    }
  }
`;

const WrapForm = styled.div`
  margin-top: 20px;
  padding: 0 20px;

  .center {
    text-align: center;
  }

  .link {
    display: inline-block;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    text-decoration-line: underline;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 25px;
  }
`;

const Hr = styled.hr`
  position: relative;
  margin: 0;
  border: 1px solid #eaeaea;
  &:before {
    content: 'or';
    position: absolute;
    top: -50%;
    margin-top: -12px;
    left: 50%;
    margin-left: -6px;
    color: #747474;
  }
`;
