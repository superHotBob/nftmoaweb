import React from 'react';
import styled from 'styled-components';
import { AuthorName, Button } from 'styles';

const UserItemCompoent: React.FC<any> = ({ id, profileImage, author, itemAmount, ownerAmount, isFollow, ...props }) => {
  return (
    <UserItem>
      <img src={profileImage} />
      <User>
        <AuthorName name={author} fontSize={14} iconW={16} iconH={16} />
        <dl>
          <dt>Item</dt>
          <dd>{itemAmount}</dd>
          <dt>Owners</dt>
          <dd>{ownerAmount}</dd>
        </dl>
      </User>
      <Button text="Follow" color="blue" h={30} />
    </UserItem>
  );
};

export default UserItemCompoent;

const UserItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & > img {
    width: 60px;
    height: 60px;
    border-radius: 90px;
    margin-right: 17px;
  }
`;

const User = styled.div`
  flex: 1;

  & > dl {
    display: flex;
    flex-direction: row;

    dt {
      font-weight: 600;
      font-size: 10px;
      line-height: 26px;
      color: rgba(0, 0, 0, 0.5);
      margin-right: 6px;
    }

    dd {
      font-weight: 700;
      font-size: 12px;
      line-height: 26px;
      color: #000000;
      margin-right: 15px;
    }
  }
`;
