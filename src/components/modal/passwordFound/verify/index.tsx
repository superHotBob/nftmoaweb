import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MailIcon } from 'assets/svg/mail.svg';
import { Form, Input } from 'antd';
import { Button } from 'styles';
import PinInput from 'react-pin-input';

const VerifiedCodeComponent: React.FC<any> = () => {
  const [value, setValue] = React.useState<string>('');
  const [isInvalid, setIsInvalid] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const [minutes, setMinutes] = React.useState<any>('0' + 5);
  const [seconds, setSeconds] = React.useState<any>('0' + 0);

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
        <h2>Finding a Password</h2>
        <MailIcon className="icon-mail" width={25} height={20} />
        <p>
          Code have been sent to your email
          <br />
          <strong>justin@justin.com</strong>
        </p>
      </Header>
      <Form>
        {/* <PinInput
          length={4}
          initialValue=""
          onChange={(value, index) => {}}
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
              setMinutes('0' + 5);
              setSeconds('0' + 0);
              setValue('');
            }}
          >
            Resend Code
          </button>
        </TimerResend> */}
        <Form.Item>
          <Button color="border" full text="VERIFY" rect />
        </Form.Item>
      </Form>
    </Wrap>
  );
};

export default VerifiedCodeComponent;

const Wrap = styled.div`
  padding: 0 20px;
`;
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

    strong {
      color: #000000;
    }
  }
`;

const TimerResend = styled.div`
  padding-top: 20px;
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

const WrapCode = styled.div<{ isInvalid?: boolean }>`
  display: flex;
  justify-content: center;
  max-width: 220px;
  width: 220px;
  margin: 0 auto 35px;

  --ReactInputVerificationCode-itemWidth: 36px;
  --ReactInputVerificationCode-itemHeight: 70px;
  --ReactInputVerificationCode-itemSpacing: 20px;

  .ReactInputVerificationCode__item {
    background: transparent;
    border-bottom: 1px solid ${({ isInvalid }) => (isInvalid ? '#EF6C65' : '#EAE9E9')};
    box-shadow: none;
    outline: none;
    font-weight: 400;
    font-size: 56px;
    color: #000000;
  }

  .ReactInputVerificationCode__item.is-active {
    box-shadow: none;
    outline: none;
    border-bottom: 1px solid #36c6d9;
  }
`;

const Seconds = styled.div`
  margin-top: 20px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.002em;
  color: rgba(255, 255, 255, 0.4);
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
