import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import withLayout from 'layouts/EmptyLayout';
import styled from 'styles/theme';
import temp01 from 'assets/common/temp01.png';

import ScrollWrap from 'components/common/slideWrap';
import Section from 'components/common/section';
import RankItem from 'components/rankItem';

import { Carousel } from 'antd';

import { incrementCount, decrementCount, resetCount } from 'store/reducers/System';

const HomeView: React.FC<any> = ({ user, ...props }) => {
  const count = useSelector((store: IStore) => store.System.count);
  const dispatch = useDispatch();

  const rankItem = [
    {
      rank: 1,
      beforeRank: 1,
      title: 'Aurorian #2956',
      cryptoIcon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11367.png',
      crypto: 'Aurory',
      nftmarket: 'Solanart',
      nftmarketIcon: 'https://solanart.io/logo.png',
      mainnet: 'eth',
      mainnetIcon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
      price: '2,365',
      timestamp: '12min ago'
    },
    {
      rank: 2,
      beforeRank: 3,
      title: 'Aurorian #2956',
      cryptoIcon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11367.png',
      crypto: 'Aurory',
      nftmarket: 'Solanart',
      nftmarketIcon: 'https://solanart.io/logo.png',
      mainnet: 'eth',
      mainnetIcon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
      price: '2,365',
      timestamp: '12min ago'
    },
    {
      rank: 3,
      beforeRank: 1,
      title: 'Aurorian #2956',
      cryptoIcon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11367.png',
      crypto: 'Aurory',
      nftmarket: 'Solanart',
      nftmarketIcon: 'https://solanart.io/logo.png',
      mainnet: 'eth',
      mainnetIcon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
      price: '2,365',
      timestamp: '12min ago'
    },
    {
      rank: 4,
      beforeRank: 4,
      title: 'Aurorian #2956',
      cryptoIcon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11367.png',
      crypto: 'Aurory',
      nftmarket: 'Solanart',
      nftmarketIcon: 'https://solanart.io/logo.png',
      mainnet: 'eth',
      mainnetIcon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
      price: '2,365',
      timestamp: '12min ago'
    },
    {
      rank: 5,
      beforeRank: 4,
      title: 'Aurorian #2956',
      cryptoIcon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11367.png',
      crypto: 'Aurory',
      nftmarket: 'Solanart',
      nftmarketIcon: 'https://solanart.io/logo.png',
      mainnet: 'eth',
      mainnetIcon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
      price: '2,365',
      timestamp: '12min ago'
    }
  ];

  const ctg = [
    { name: 'art', img: temp01 },
    { name: 'music', img: temp01 },
    { name: 'music', img: temp01 },
    { name: 'music', img: temp01 },
    { name: 'music', img: temp01 },
    { name: 'music', img: temp01 },
    { name: 'music', img: temp01 },
    { name: 'music', img: temp01 },
    { name: 'games', img: temp01 }
  ];

  return (
    <Wrap>
      <SearchBig>
        <div className="wrap">
          <input placeholder="Search anyihing NFT items _" />
        </div>
        <p>
          Here’s the NFT Items, collection name <strong>nftmoa.</strong>
        </p>
      </SearchBig>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
      <Section title="Marketplace Top5">
        {rankItem.map((item, index) => (
          <RankItem {...item} key={index} />
        ))}
      </Section>
      <ScrollWrap className={'explore'}>
        <ThumTitle>
          <Link to={'/explore'} className={'none'}>
            EXPLORE
          </Link>
        </ThumTitle>
        {ctg.map((item, index) => (
          <ThumTitle key={index}>
            <img src={item.img} />
            <Link to={item.name}>{item.name}</Link>
          </ThumTitle>
        ))}
      </ScrollWrap>
      <Section title="Today’s Article">
        {rankItem.map((item, index) => (
          <RankItem {...item} key={index} />
        ))}
      </Section>
      {/* <p>
        <strong>{count}</strong>
      </p> */}
      {/* <button type="button" onClick={() => dispatch(incrementCount())}>
        증가
      </button>
      <button type="button" onClick={() => dispatch(decrementCount())}>
        감소
      </button>
      <button type="button" onClick={() => dispatch(resetCount())}>
        리셋
      </button> */}
      {/* <p>{t(characters.amber.affiliation)}</p> */}
    </Wrap>
  );
};

export default HomeView;

const Wrap = styled.div`
  position: relative;
  color: ${p => p.theme.COLORS.TEXT_PRIMARY};
  ${p => p.theme.TEXTS.BOARD_CONTENT};

  .explore {
    padding: 37px 20px;
    background: #ff0096;
  }

  .ant-carousel {
    padding: 0 20px 22px;

    .slick-dots-bottom {
      bottom: -22px;
    }

    .slick-dots li {
      width: 8px;
      height: 8px;

      button {
        width: 8px;
        height: 8px;
        border-radius: 100px;
        background: #c4c4c4;
      }

      &.slick-active {
        button {
          background: #eb5d5d;
        }
      }
    }
  }
`;

const SearchBig = styled.div`
  margin-bottom: 25px;
  padding: 0 20px;

  .wrap {
    padding: 12px;
    background: rgb(255, 0, 0);
    background: linear-gradient(90deg, rgba(255, 0, 0, 1) 0%, rgba(255, 0, 214, 1) 51%, rgba(0, 29, 132, 1) 100%);
  }

  input {
    display: block;
    padding: 12px;
    width: 100%;
    height: 52px;
    font-size: 16px;
    line-height: 26px;
    border: 0 none;
    background: #fff;

    &::placeholder {
      color: rgba(0, 0, 0, 0.25);
    }
  }

  p {
    margin-top: 5px;
    padding: 0 15px;
    font-size: 13px;
    line-height: 26px;

    color: rgba(0, 0, 0, 0.5);

    strong {
      color: #000;
      font-weight: bold;
    }
  }
`;

const ThumTitle = styled.div`
  flex-basis: 90px;
  position: relative;
  width: 90px;
  height: 75px;
  border-radius: 6px;

  a,
  strong {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    min-width: 90px;
    width: 100%;
    height: 100%;
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;

    &.none {
      position: static;
    }
  }

  img {
    width: 90px;
    height: 75px;
  }

  & + div {
    margin-left: 6px;
  }
`;

const CarouselItem = styled.div`
  width: 100%;
  height: 150px;
  color: #fff;
  background: #364d79;
  border-radius: 10px;
`;
