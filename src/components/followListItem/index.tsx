import React from 'react';
import styled from 'styled-components';
import { AuthorName, Button } from 'styles';

const FollowListItemComponent: React.FC<any> = ({ id, author, profileImage, itemAmount, ownerAmount, isFollow }) => {
  return (
    <Wrap className="item-follow">
      <img src={profileImage} />
      <AuthorName center name={author} />
      <dl className="wrap-list">
        <dt>Item</dt>
        <dd>{itemAmount}</dd>
        <dt>Owners</dt>
        <dd>{ownerAmount}</dd>
      </dl>
      <Button text="Follow" color="blue" h={30} />
    </Wrap>
  );
};

export default FollowListItemComponent;

const Wrap = styled.div`
  padding: 20px;
  width: 140px;
  background: #ffffff;
  border: 1px solid #efefef;
  box-sizing: border-box;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  align-items: center;
  text-align: center;
  & > img {
    width: 60px;
    height: 60px;
    border-radius: 90px;
    overflow: hidden;
    margin-bottom: 7px;
  }

  & > dl {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    margin-bottom: 10px;

    dt {
      text-align: center;
      font-weight: 600;
      font-size: 10px;
      color: rgba(0, 0, 0, 0.5);
      width: 50%;
      margin-bottom: 5px;
    }
    dd {
      text-align: center;
      font-weight: 700;
      font-size: 12px;
      color: #000000;
      width: 50%;
      margin-bottom: 5px;
    }
  }
`;
