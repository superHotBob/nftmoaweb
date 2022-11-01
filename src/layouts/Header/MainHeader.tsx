import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styles/theme';

import logo from 'assets/common/logo.png';
import logoTxt from 'assets/common/logo_txt.png';
import { Button, WrapIcon } from 'styles';
import { ReactComponent as PlusIcon } from 'assets/svg/plus.svg';
import { useSelector, useDispatch } from 'react-redux';

export default () => {
  const { isLoggedIn } = useSelector((store: IStore) => store.System);
  const navigate = useNavigate();
  useEffect(() => {}, []);

  return (
    <MainHeader>
      <LogoTxt>
        <Link to="/">
          <img src={logo} />
          <img src={logoTxt} />
        </Link>
      </LogoTxt>
      <RightArea>
        <MintBtn>
          <button onClick={() => navigate('/profile/create/step1')}>
            <WrapIcon w={30} h={30}>
              <PlusIcon />
            </WrapIcon>
            <HexagonLabel>
              <div className="hexagon">Minting now!</div>
            </HexagonLabel>
          </button>
        </MintBtn>
        {!isLoggedIn && (
          <SignUp>
            <Button onClick={() => navigate('/signin')} text={'Sign Up'} h={30} w={54} fontSize={10} />
          </SignUp>
        )}
      </RightArea>
    </MainHeader>
  );
};

const MainHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  order: 0;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  background: #fff;
  z-index: 10;
`;

const LogoTxt = styled.h1`
  display: block;
  position: relative;
  padding: 10px 0;
  font-size: 0;

  & a {
    font-size: 0;

    & img:first-of-type {
      width: 30px;
    }

    & img + img {
      margin-left: 4px;
      width: auto;
    }
  }
`;

const RightArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const MintBtn = styled.div``;
const SignUp = styled.div`
  margin-left: 10px;
`;

const HexagonLabel = styled.div`
  position: absolute;
  right: 33px;
  top: 50%;
  transform: translateY(-50%);

  .hexagon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    position: relative;
    padding: 0px 6px;
    height: 16px;
    background-color: #f900d4;
    font-weight: 600;
    font-size: 10px;
    letter-spacing: -0.02em;
    white-space: nowrap;

    &::after {
      content: '';
      position: absolute;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
      left: 100%;
      border-left: 8px solid #f900d4;
    }
  }
`;
