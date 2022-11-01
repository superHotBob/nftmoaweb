import React from 'react';
import styled from 'styles/theme';
import { AuthorProfile, Price } from 'styles';

const RankSellerItem: React.FC<any> = ({ rank, author, profileImage, cryptoIcon, price, timestamp, ...props }) => {
  return (
    <Wrap {...props}>
      <Rank>
        <strong>{rank}</strong>
      </Rank>
      <Thumbnail>
        <AuthorProfile icon={profileImage} />
      </Thumbnail>
      <Info>
        <div>
          <h2>{author}</h2>
        </div>
        <ul className="wrap-list">
          <li>
            <Price icon={cryptoIcon} price={price} iconW={7} iconH={12} fontSize={14} timestamp={timestamp} />
          </li>
        </ul>
      </Info>
    </Wrap>
  );
};

export default RankSellerItem;

const Wrap = styled.div`
  display: flex;
  min-height: 100px;
  background: #ffffff;
  box-sizing: border-box;

  & + div {
    border-top: 1px solid #eaeaea;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Rank = styled.div`
  flex-basis: 45px;

  strong {
    font-size: 16px;
    line-height: 26px;
    font-weight: 800;
  }

  > hr {
    width: 8px;
    height: 1px;
    background: #dddddd;
  }
`;

const Thumbnail = styled.div`
  flex-basis: 50px;
  overflow: hidden;
`;

const Info = styled.div`
  align-items: start !important;
  justify-content: flex-start;
  flex-basis: calc(100% - 105px);
  padding: 18px 12px;
  line-height: 18px;

  h2 {
    color: #000;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  ul.wrap-list {
    margin: 0 -8px;

    & > li {
      position: relative;
      padding: 0 8px;
      display: flex;
      justify-content: center;
      align-items: center;

      & + li {
        &::after {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          width: 1px;
          height: 7px;
          background-color: rgba(0, 0, 0, 0.2);
          transform: translateY(-50%);
        }
      }
    }
  }
`;
