import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CancleIcon } from 'assets/svg/deleteCircle.svg';
import { useNavigate } from 'react-router-dom';
import { AvatarName, Button, MoaLogo } from 'styles';
import { INVITE } from 'api/mock/community';
import Box from 'styles/box';

const CommunityInviteView: React.FC<any> = () => {
  const navigate = useNavigate();
  const { from, avatar, groupName, online, members, isAccepted } = INVITE;
  return (
    <Wrap>
      <Box className={'wrap-box'}>
        <AvatarName className={'avatar'} w={80} h={80} avatar={avatar} />
        <sub>from {from}</sub>

        <h2>{groupName}</h2>

        <ul className="wrap-list">
          <li className={'icon-online'}>
            <span>{online} Online</span>
          </li>
          <li>
            <span>{members} Members</span>
          </li>
        </ul>

        <Button text={'ACCEPTED'} color={'blue'} rect full h={60} />
      </Box>

      <img src={'https://user-images.githubusercontent.com/45615584/170710777-0085107d-16db-4c66-a6b4-030d9d92d579.png'} />
    </Wrap>
  );
};

export default CommunityInviteView;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed !important;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: linear-gradient(180deg, #ff0052 0%, #f601d3 47.4%, #7b0fab 100%);

  & > img {
    width: 223px;
    height: 58px;
    margin-bottom: 5%;
  }

  .wrap-box {
    flex: 1;
    padding: 55px 25px 0;
    justify-content: space-between;

    .avatar {
      margin-top: 35px;
      margin-bottom: 5px;
    }

    sub {
      font-weight: 600;
      font-size: 14px;
      line-height: 26px;
      color: #000000;
      opacity: 0.5;
      margin-bottom: 38px;
    }

    h2 {
      margin-bottom: 20px;
      font-weight: 700;
      font-size: 20px;
      line-height: 26px;
      color: #000000;
    }

    ul {
      width: 100%;
      margin-bottom: 54px;

      > li {
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        color: #000000;
        flex: 1;
        padding: 0 11px;
      }

      .icon-online {
        & > span {
          position: relative;
          &::before {
            content: '';
            position: absolute;
            top: 2px;
            left: -5px;
            width: 12px;
            height: 12px;
            background-color: #00ff66;
            border-radius: 50%;
          }
        }
      }

      li + li {
        position: relative;

        &:after {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          width: 1px;
          height: 10px;
          background-color: rgba(131, 131, 131, 0.5);
          transform: translateY(-50%);
        }
      }
    }
  }
`;
