import React from 'react';
import styled from 'styled-components';
import { ReactComponent as DoneIcon } from 'assets/svg/order-done.svg';
import { useNavigate } from 'react-router-dom';
import { Button, Input, MoaLogo, WrapButton } from 'styles';

const WalletTokenOrderSuccessView: React.FC<any> = () => {
  const navigate = useNavigate();

  return (
    <Wrap>
      <NoHeader />
      <View>
        <DoneIcon style={{ marginBottom: 87 }} />
        <StyledInput>
          <Input
            value={'0.5384'}
            readOnly
            bar={false}
            prefix={<img src="https://user-images.githubusercontent.com/45615584/163686085-556b2c63-4105-4df5-ab68-943091d29747.png" />}
            suffix={<span>ETH</span>}
          />
        </StyledInput>
        <p>ETH purchase completed</p>
        <MoaLogo />
      </View>
      <WrapButton>
        <Button rect full h={52} color={'black'} text={'DONE'} onClick={() => navigate('/wallet')} />
      </WrapButton>
    </Wrap>
  );
};

export default WalletTokenOrderSuccessView;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const View = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > p {
    margin-bottom: 12px;
    font-weight: 500;
    font-size: 12px;
    line-height: 19px;
    /* or 158% */

    text-align: center;
    letter-spacing: 0.01em;

    color: #6f6f6f;
  }
`;
const StyledInput = styled.div`
  max-width: 250px;
  margin-bottom: 21px;

  img {
    width: 28px;
    height: 28px;
    margin-right: 13px;
  }

  input {
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    /* or 162% */

    letter-spacing: -0.01em;

    color: #000000;
  }

  span {
    font-weight: 700;
    font-size: 12px;
    line-height: 26px;
    /* identical to box height, or 217% */

    display: flex;
    align-items: center;
    letter-spacing: -0.01em;

    color: #000000;
  }
`;

const NoHeader = styled.div`
  height: 50px;
  background: #fff;
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  z-index: 99;
`;
