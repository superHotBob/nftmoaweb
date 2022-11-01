import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CancelIcon } from 'assets/svg/deleteCircle.svg';
import { ReactComponent as EmailIcon } from 'assets/svg/mail.svg';
import { ReactComponent as MailIcon } from 'assets/svg/mail.svg';
import { ReactComponent as TwitterIcon } from 'assets/svg/twitter.svg';
import { ReactComponent as FacebooklIcon } from 'assets/svg/facebook.svg';
import { ReactComponent as GoogleIcon } from 'assets/svg/google.svg';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input, Password, WrapButton, WrapIcon } from 'styles';
import cookie from 'js-cookie';

import { useSelector, useDispatch } from 'react-redux';
import { login } from 'store/reducers/System';

import APIService from 'api';

const apiService = new APIService();

const SignInView: React.FC<any> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef: any = React.useRef(null);
  const pwRef: any = React.useRef(null);
  const [inputs, setInputs] = React.useState({ email: '', password: '' });
  const handleSubmit = async () => {
    if (inputs.email.length > 0 && inputs.password.length > 0) {
      const loginCheck = await apiService.signIn(inputs);

      if (loginCheck?.jwtToken) {
        cookie.set('accessToken', loginCheck?.jwtToken.accessToken);
        cookie.set('refreshToken', loginCheck?.jwtToken.refreshToken);
        cookie.set('expired', `${new Date().getTime()}`);
        dispatch(login());
        navigate('/');
      }
    }
  };
  return (
    <Wrap>
      <Header>
        <h2>Sign in with</h2>
        <CancelIcon onClick={() => navigate(-1)} />
      </Header>

      <PageIntro className={'wrap-list'}>
        <WrapIcon w={80} h={80}>
          <EmailIcon />
        </WrapIcon>
        <p>
          By signing in you are agreeing our Term
          <br /> and privacy policy
        </p>
      </PageIntro>
      <View>
        <Form>
          <Input label={'Email address'} ref={emailRef} placeholder={'justin@nftmoa.io'} onChange={() => setInputs({ ...inputs, email: emailRef?.current.getValue() })} />
          <Password label={'Password'} ref={pwRef} placeholder={'*******'} onChange={() => setInputs({ ...inputs, password: pwRef?.current.getValue() })} />
          <Link to="/password/find/step1" className="link">
            Forgot Password?
          </Link>
          <Link to="/signup" className="link signup">
            sign Up
          </Link>
        </Form>
        <WrapButton nopd={true}>
          <ul className="wrap-list wrap-list-icon">
            <li>
              <MailIcon />
            </li>
            <li>
              <FacebooklIcon />
            </li>
            <li>
              <TwitterIcon />
            </li>
            <li>
              <GoogleIcon />
            </li>
          </ul>
          <Button rect color={'border'} full text={'SIGN IN'} onClick={handleSubmit} />
        </WrapButton>
      </View>
    </Wrap>
  );
};

export default SignInView;

const Wrap = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;

  ul.wrap-list-icon {
    margin: 20px auto;
    max-width: 275px;
    justify-content: space-between;
  }

  .link {
    display: inline-block;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    text-decoration-line: underline;
    color: rgba(0, 0, 0, 0.5);
    margin-top: 15px;
  }

  .signup {
    display: block;
  }
`;
const Header = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  height: 50px;
  margin-bottom: 20px;
  padding: 0 20px;

  & > h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #000000;
  }
`;

const View = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PageIntro = styled.div`
  padding: 22px 0 16px;
  & > p {
    margin-left: 16px;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #747474;
  }
`;

const Form = styled.div`
  flex: 1;

  & > div + div {
    margin: 0;
    margin-top: 23px;
  }
`;
