import React from 'react';
import styled from 'styles/theme';
import { AuthorName, Marketplace, Price } from 'styles';
import { useNavigate } from 'react-router-dom';

const RankItem: React.FC<any> = ({ rank, beforeRank, title, author, cryptoIcon, nftImageUrl, nftmarket, nftmarketIcon, mainnet, mainnetIcon, price, timestamp, ...props }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/rank/item');
  };

  return (
    <Wrap {...props} onClick={onClick}>
      <Rank>
        <strong>{rank}</strong>
      </Rank>
      <Thumbnail>
        <img src={nftImageUrl} />
      </Thumbnail>
      <Info>
        <div>
          <h2>{title}</h2>
          <AuthorName name={author} center={false} />
        </div>
        <ul className="wrap-list">
          <li>
            <Price icon={mainnetIcon} price={price} iconW={7} iconH={12} fontSize={14} timestamp={timestamp} />
          </li>
          <li>
            <Marketplace icon={nftmarketIcon} market={nftmarket} />
            {/* <img src={'https://user-images.githubusercontent.com/45615584/165744392-4adbf3b6-dfce-47cb-bc02-c15eed0f3a65.png'} /> */}
          </li>
        </ul>
      </Info>
    </Wrap>
  );
};

export default RankItem;

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
  flex-basis: 60px;

  img {
    width: 60px;
    height: 60px;
  }
`;

const Info = styled.div`
  align-items: start !important;
  justify-content: space-between !important;
  flex-basis: calc(100% - 105px);
  padding: 18px 12px;
  line-height: 18px;

  h2 {
    color: #000;
    font-size: 14px;
    font-weight: bold;
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
