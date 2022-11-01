import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CameraIcon } from 'assets/svg/camera.svg';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input, Password, WrapButton } from 'styles';
import { Checkbox } from 'antd';

const WalletCardRegisterView: React.FC<any> = () => {
  const navigate = useNavigate();
  const cardNumRef: any = React.useRef(null);
  const validityRef: any = React.useRef(null);
  const cvcRef: any = React.useRef(null);
  const pwRef: any = React.useRef(null);
  const [inputs, setInputs] = React.useState({ cardNum: '', validity: '', cvcNum: '', pw: '', isChecked: false });
  const handleSubmit = () => {
    console.log(inputs, 'inputs');
    navigate('/token/order');
  };

  const handleChecked = (v: any) => {
    const { target } = v;
    setInputs({ ...inputs, isChecked: target.checked });
  };

  return (
    <Wrap>
      <Form>
        <Input
          ref={cardNumRef}
          pl={25}
          label={'card number'}
          placeholder={'0000 - 0000 - 0000 - 0000'}
          onChange={() => setInputs({ ...inputs, cardNum: cardNumRef?.current.getValue() })}
          suffix={
            <StyledCameraIcon>
              <CameraIcon width={28} height={18} />
            </StyledCameraIcon>
          }
        />
        <div className="wrap-list s-b">
          <Input ref={validityRef} label={'Validity'} placeholder={'MM/YY'} onChange={() => setInputs({ ...inputs, validity: validityRef?.current.getValue() })} />
          <Input ref={cvcRef} label={'CVC'} placeholder={'421'} onChange={() => setInputs({ ...inputs, cvcNum: cvcRef?.current.getValue() })} />
        </div>
        <Password ref={pwRef} label={'password'} placeholder={'the first two digits of a code'} onChange={() => setInputs({ ...inputs, pw: pwRef?.current.getValue() })} />
        <Checkbox onChange={handleChecked}>
          I understand that moa cannot recover this password.
          <Link className={'link-learn'} to="">
            Learn more about this.
          </Link>
        </Checkbox>
      </Form>
      <WrapButton nopd={true}>
        <Button rect full color={'border'} text={'CREATE PASSWORD'} onClick={handleSubmit} />
      </WrapButton>
    </Wrap>
  );
};

export default WalletCardRegisterView;

const Wrap = styled.div`
  padding: 33px 20px 0;
  background-color: #f8fafc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .wrap-list {
    gap: 27px;

    & > div {
      flex: 1;
    }
  }

  a.link-learn {
    display: block;
    text-decoration: underline;
  }
`;

const Form = styled.div`
  & > div {
    margin-bottom: 30px;
  }
`;

const StyledCameraIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    path {
      fill: #c4c4c4;
    }
  }
`;
