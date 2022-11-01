import React from 'react';
import styled from 'styled-components';
import { Bidder, ButtonLike, Marketplace, Price } from 'styles';

const NftProductCompoent: React.FC<any> = ({ bidders, nftThumb, nftName, price, isLike, likeAmount, nftmarketIcon, nftMarket, cryptoIcon, metaInfo, ...props }) => {
  const handleLike = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, action: string) => {
    e.preventDefault();
    action === 'off' ? console.log('좋아요 취소') : console.log('좋아요');
  };

  return (
    <Wrap {...props} className="item-ntf">
      <div className="inner">
        <Product>
          {bidders && <Bidder list={bidders} />}
          <div className="product-image">
            <img src={metaInfo ? metaInfo.image : nftThumb} alt={metaInfo ? metaInfo.name : nftName} />
          </div>
          <h2>{metaInfo ? metaInfo.name : nftName}</h2>
          <div className="wrap-list s-b">
            <Price icon={cryptoIcon} price={price} />
            <Marketplace icon={nftmarketIcon} market={nftMarket} />
          </div>
        </Product>
        <Transaction>
          <ButtonLike isLike={isLike} handleLike={handleLike} amount={likeAmount} />
          <ButtonBuy>Buy now</ButtonBuy>
        </Transaction>
      </div>
    </Wrap>
  );
};

export default NftProductCompoent;

const Wrap = styled.div`
  flex: 50%;
  max-width: 50%;
  margin-bottom: 15px;

  padding: 0 4px;

  .inner {
    background: #ffffff;
    border: 1px solid #efefef;
    box-sizing: border-box;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.06);
    border-radius: 10px;
  }
`;

const Product = styled.div`
  padding: 12px 12px 10px;

  & > .product-image {
    width: 100%;
    margin-bottom: 10px;
    border-radius: 6px;
    overflow: hidden;

    img {
      object-fit: cover;
    }
  }

  & > h2 {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 26px;
    color: #000000;
    margin-bottom: 5px;
  }
`;

const Transaction = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.02);
  padding: 10px 20px;
`;

const ButtonBuy = styled.button`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 26px;
  letter-spacing: -0.01em;
  color: #0085ff;
`;
