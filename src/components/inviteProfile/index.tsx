import React from 'react';
import styled from 'styled-components';
import { ReactComponent as BellIcon } from 'assets/svg/bell.svg';
import { ReactComponent as FollowIcon } from 'assets/svg/follow.svg';
import { useNavigate } from 'react-router-dom';
import { AuthorName, AuthorProfile } from 'styles';

const InviteProfileComponent: React.FC<any> = ({ profileImage, author, level }) => {
  const navigate = useNavigate();

  return (
    <Wrap className={'wrap-invite-profile'}>
      <Profile>
        <AuthorProfile icon={profileImage} mark={false} />
        <dl>
          <dt>
            <AuthorName name={author} iconW={16} iconH={16} fontSize={14} />
          </dt>
          <dd>{level}</dd>
        </dl>
      </Profile>
      <Utils>
        <li>
          <BellIcon />
        </li>
        <li>
          <FollowIcon />
        </li>
      </Utils>
    </Wrap>
  );
};

export default InviteProfileComponent;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .util-bar {
  }
`;

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  max-width: 50%;

  dl {
    width: 100%;
    margin-left: 7px;
    dt {
    }
    dd {
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      color: #101010;
    }
  }
`;

const Utils = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  gap: 10px;
`;
