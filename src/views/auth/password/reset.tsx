import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CancelIcon } from 'assets/svg/deleteCircle.svg';
import { ReactComponent as SecurityIcon } from 'assets/svg/security.svg';
import { useNavigate } from 'react-router-dom';
import { Button, Input, WrapButton, WrapIcon } from 'styles';

const PasswordResetView: React.FC<any> = () => {
  const navigate = useNavigate();
  const newpwRef: any = React.useRef(null);
  const newpwConfirmRef: any = React.useRef(null);
  const [inputs, setInputs] = React.useState({ pw: '', pwConfirm: '' });
  const handleSubmit = () => {
    navigate('/');
  };

  return (
    <Wrap>
      <Header>
        <h2>Reset the Password</h2>
        <CancelIcon onClick={() => navigate(-1)} />
      </Header>

      <PageIntro className={'wrap-list'}>
        <WrapIcon w={80} h={80}>
          <SecurityIcon />
        </WrapIcon>
        <p>Please enter your new password</p>
      </PageIntro>

      <View>
        <Form>
          <Input label={'new Password'} ref={newpwRef} placeholder={'*******'} onChange={() => setInputs({ ...inputs, pw: newpwRef?.current.getValue() })} h={47} />
          <Input label={'confirm password'} ref={newpwConfirmRef} placeholder={'Confirm Password'} onChange={() => setInputs({ ...inputs, pwConfirm: newpwConfirmRef?.current.getValue() })} h={47} />
        </Form>
      </View>

      <WrapButton nopd={true}>
        <Button color="border" full text="OK" rect onClick={handleSubmit} />
      </WrapButton>
    </Wrap>
  );
};

export default PasswordResetView;

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

  & > div {
    margin-bottom: 23px;
  }
`;
