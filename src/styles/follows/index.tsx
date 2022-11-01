import React from 'react';
import styled from 'styled-components';

const FollowsStyles: React.FC<any> = ({ follower, following, like }) => {
  return (
    <Wrap>
      <li>
        <p>{follower}</p>
        <p>Followers</p>
      </li>
      <li>
        <p>{following}</p>
        <p>Following</p>
      </li>
      <li>
        <p>{like}</p>
        <p>Likes</p>
      </li>
    </Wrap>
  );
};

export default FollowsStyles;

const Wrap = styled.ul`
  margin: 0 auto;
  padding: 0 66px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > li + li {
    &:after {
      content: '';
      position: absolute;
      top: 10px;
      left: 0;
      width: 1px;
      height: 16px;
      background-color: #dbdbdb;
    }
  }
  & > li {
    position: relative;
    text-align: center;
    flex: 1;
    min-width: 55px;

    & > p:first-of-type {
      font-family: 'Noto Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 35px;
      /* identical to box height, or 175% */

      text-align: center;
      letter-spacing: 0.3px;

      color: #000000;
    }

    & > p:last-of-type {
      font-family: 'Noto Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 35px;
      /* identical to box height, or 292% */

      text-align: center;
      letter-spacing: 0.3px;

      color: #747474;
    }
  }
`;
