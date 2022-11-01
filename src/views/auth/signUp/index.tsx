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
import APIService from 'api';

const apiService = new APIService();

const SignUpView: React.FC<any> = () => {
  const navigate = useNavigate();
  const emailRef: any = React.useRef(null);
  const nameRef: any = React.useRef(null);
  const pwRef: any = React.useRef(null);
  const pwConfirmRef: any = React.useRef(null);
  const [inputs, setInputs] = React.useState({ email: '', name: '', password: '', rePassword: '' });
  const handleSubmit = async () => {
    const emailChck = await apiService.emailCheck(inputs.email);

    if (!emailChck.duplicated) {
      const signUpChk = await apiService.signUp(inputs);

      if (signUpChk?.status === 200) {
        alert('회원가입 완료');
        navigate('/signin');
      }

      console.log(signUpChk, 'signUpChk');
    } else {
      alert('used Email please new Email');
    }
    console.log(emailChck, 'emailChck');
  };
  return (
    <Wrap>
      <Header>
        <h2>Sign Up with</h2>
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
          <Input label={'Name'} ref={nameRef} placeholder={'name'} onChange={() => setInputs({ ...inputs, name: nameRef?.current.getValue() })} />
          <Password label={'Password'} ref={pwRef} placeholder={'*******'} onChange={() => setInputs({ ...inputs, password: pwRef?.current.getValue() })} />
          <Password label={'Password'} ref={pwConfirmRef} placeholder={'Confirm Password'} onChange={() => setInputs({ ...inputs, rePassword: pwConfirmRef?.current.getValue() })} />
        </Form>
        <WrapButton nopd={true}>
          {/* <ul className="wrap-list wrap-list-icon">
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
          </ul> */}
          <Button rect color={'border'} full text={'SIGN UP'} onClick={handleSubmit} />
        </WrapButton>
      </View>
    </Wrap>
  );
};

export default SignUpView;

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
