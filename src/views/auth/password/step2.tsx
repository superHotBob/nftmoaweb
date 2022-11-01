import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CancelIcon } from 'assets/svg/deleteCircle.svg';
import { ReactComponent as SecurityIcon } from 'assets/svg/security.svg';
import { useNavigate } from 'react-router-dom';
import PinInput from 'react-pin-input';
import { Button, WrapButton, WrapIcon } from 'styles';

const PasswordCodeView: React.FC<any> = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState<string>('');
  const [isInvalid, setIsInvalid] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const [minutes, setMinutes] = React.useState<any>('0' + 5);
  const [seconds, setSeconds] = React.useState<any>('0' + 0);
  const handleSubmit = () => {
    navigate('/password/reset');
  };

  React.useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(seconds < 10 ? '0' + String(parseInt(seconds) - 1) : parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
        } else {
          setMinutes('0' + String(parseInt(minutes) - 1));
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return (
    <Wrap>
      <Header>
        <h2>Finding & Password</h2>
        <CancelIcon onClick={() => navigate(-1)} />
      </Header>

      <PageIntro className={'wrap-list'}>
        <WrapIcon w={80} h={80}>
          <SecurityIcon />
        </WrapIcon>
        <p>
          Code have been sent to your email <br />
          <b>justin@justin.com</b>
        </p>
      </PageIntro>

      <View>
        <Form>
          {/* <PinInput
            length={4}
            initialValue={value}
            onChange={(value, index) => {
              console.log(value);
              setValue(value);
            }}
            type="numeric"
            inputMode="tel"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}
            inputStyle={{ boxShadow: 'none', borderRadius: 0, borderTop: 'none', borderRight: 'none', borderLeft: 'none', borderBottom: '1px solid #EAE9E9' }}
            inputFocusStyle={{ borderColor: '#000' }}
            onComplete={(value, index) => {}}
            autoSelect={true}
          />
          <TimerResend>
            <Timer>
              {minutes} : {seconds}
            </Timer>
            <button
              onClick={() => {
                setValue('');
                setMinutes('0' + 5);
                setSeconds('0' + 0);
              }}
            >
              Resend Code
            </button>
          </TimerResend> */}
        </Form>
      </View>

      <WrapButton nopd={true}>
        <Button color="border" full text="VERIFY" rect onClick={handleSubmit} />
      </WrapButton>
    </Wrap>
  );
};

export default PasswordCodeView;

const Wrap = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
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
  margin-top: 50px;
`;

const PageIntro = styled.div`
  padding: 22px 0 16px;
  & > p {
    margin-left: 16px;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #747474;

    & > b {
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;
      letter-spacing: -0.01em;
      color: #000000;
    }
  }
`;

const Form = styled.div`
  flex: 1;

  & > div {
    margin-bottom: 23px;
  }
`;

const TimerResend = styled.div`
  max-width: 220px;
  width: 220px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 88px;

  & > button {
    flex: 1;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */

    display: flex;
    align-items: flex-end;
    text-align: center;
    text-decoration-line: underline;

    color: #000000;
  }
`;

const Timer = styled.div`
  flex: 1;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #565656;
`;
