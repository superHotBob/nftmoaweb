import React from 'react';
import styled from 'styled-components';

import { AuthorName } from 'styles';

const AuthorItemComponent: React.FC<any> = ({ nftName, nftBg, authorName, nftThumb, content, name, image, ...props }) => {
  return (
    <Wrap {...props}>
      <div className="author-banner">
        <img src={image ? image : nftBg} />
      </div>

      <div className="author-card">
        <img className="author-profile" src={image ? image : nftThumb} />
        <h2>{name ? name : nftName}</h2>
        <AuthorName name={authorName} center />
        <p>{content}</p>
      </div>
    </Wrap>
  );
};

export default AuthorItemComponent;

const Wrap = styled.div`
  width: 100%;
  max-height: 300px;
  height: 300px;
  min-height: 300px;
  position: relative;
  text-align: center;
  background: #ffffff;
  border: 1px solid #efefef;
  box-sizing: border-box;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.06);
  border-radius: 10px;

  & + & {
    margin-top: 11px;
  }

  .author-banner {
    height: 170px;
    margin-bottom: 30px;
    border-radius: 9px 9px 0px 0px;
    overflow: hidden;

    & > img {
      object-fit: cover;
    }
  }

  .author-card {
    & > h2 {
      margin-bottom: 7px;
      font-family: 'Noto Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      color: #000000;
    }

    .author-profile {
      position: absolute;
      top: 132px;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 58px;
      height: 58px;
      border: 2px solid #ffffff;
      border-radius: 50%;
      overflow: hidden;
    }

    & > p {
      width: 257px;
      height: 32px;
      margin: 0 auto;
      font-family: 'Noto Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 15px;
      text-align: center;
      color: #717171;
      padding-bottom: 24px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
`;
