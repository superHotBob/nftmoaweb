import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AuthorName, Price } from 'styles';
import { digit } from 'utils';

const FullItemComponent: React.FC<any> = ({ imageUrl, title1, title2, cryptoUrl, price, timestamp, author, usd, ...props }) => {
  const navigate = useNavigate();

  return (
    <Wrap {...props}>
      <img className={'bg'} src={imageUrl} />
      <Info>
        <h3>{title1}</h3>
        <h2>{title2}</h2>

        <div className={'wrap-list s-b line-section'}>
          <Price icon={cryptoUrl} price={price} color={'#fff'} suffix={<div className={'usd'}>(${digit(usd, 2, false, true)})</div>} />
          <p className={'timestamp'}>{timestamp}</p>
        </div>

        <div className={'wrap-list s-b line-section'}>
          <p>from</p>
          <AuthorName name={author} fontSize={12} color={'#fff'} />
        </div>

        <Button>Buy now</Button>
      </Info>
    </Wrap>
  );
};

export default FullItemComponent;

const Wrap = styled.div`
  height: 298px;
  overflow: hidden;

  img.bg {
    object-fit: cover;
  }
`;

const Info = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 17px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0) 0%, #000000 100%);

  * {
    font-weight: 500;
    font-size: 12px;
    color: #ffffff;
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
  }

  .usd {
    font-weight: 500;
    font-size: 12px;
    line-height: 19px;
    margin-left: 5px;
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
  margin: 9px 0 10px 0;
`;
