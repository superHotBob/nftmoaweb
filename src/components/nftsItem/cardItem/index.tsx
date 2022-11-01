import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AuthorName, Price } from 'styles';
import { digit } from 'utils';

const CardItemComponent: React.FC<any> = ({ imageUrl, title1, title2, cryptoUrl, price, timestamp, author, usd, ...props }) => {
  const navigate = useNavigate();

  return (
    <Wrap {...props} imageUrl={imageUrl}>
      {/* <img className={'img-bg'} src={imageUrl} /> */}
      <Info>
        <div className={'wrap-content'}>
          <h3>{title1}</h3>
          <h2>{title2}</h2>

          <div className={'wrap-list s-b line-section'}>
            <Price icon={cryptoUrl} price={price} color={'#000'} suffix={<div className={'usd'}>(${digit(usd, 2, false, true)})</div>} />
            <p className={'timestamp'}>{timestamp}</p>
          </div>

          <div className={'wrap-list s-b line-section'}>
            <p>from</p>
            <AuthorName name={author} fontSize={12} color={'#000'} />
          </div>
        </div>
        <Button>Buy now</Button>
      </Info>
    </Wrap>
  );
};

export default CardItemComponent;

const Wrap = styled.div<any>`
  background: url(${p => p.imageUrl}) no-repeat;
  width: 335px;
  height: 300px;
  background-position: 0 -80px;
  background-size: contain;

  .name {
    text-decoration: underline;
  }
`;

const Info = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #fff;

  .wrap-content {
    padding: 0 17px;
  }

  * {
    font-weight: 500;
    font-size: 12px;
    color: #000;
  }

  h3 {
    font-weight: 700;
    font-size: 12px;
    line-height: 26px;
  }

  h2 {
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
  }

  .timestamp {
    font-weight: 500;
    font-size: 12px;
    line-height: 19px;
    color: #6f6f6f;
  }

  .usd {
    font-weight: 500;
    font-size: 12px;
    line-height: 19px;
    margin-left: 5px;
    color: #6f6f6f;
  }

  .line-section {
    margin-top: 7px;
  }
`;

const Button = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 26px;
  color: #0085ff;
  text-align: right;
  margin-top: 5px;
  padding: 9px 17px;
  background-color: rgba(0, 0, 0, 0.02);
`;
