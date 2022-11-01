import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AuthorName, Price } from 'styles';
import { digit } from 'utils';

const ListItemComponent: React.FC<any> = ({ imageUrl, title1, title2, cryptoUrl, price, timestamp, author, usd, ...props }) => {
  const navigate = useNavigate();

  return (
    <Wrap {...props}>
      <img src={imageUrl} />
      <Info>
        <h3>{title1}</h3>
        <div className={'wrap-list s-b header'}>
          <div>
            <h2>{title2}</h2>
          </div>
          <Price icon={cryptoUrl} price={price} color={'#000'} />
        </div>

        <div className={'wrap-list s-b line-section'}>
          <p className={'timestamp'}>{timestamp}</p>
        </div>

        <div className={'wrap-list s-b line-section'}>
          <p className={'bold'}>from</p>
          <AuthorName name={author} fontSize={12} color={'#000'} />
        </div>

        <Button>Buy now</Button>
      </Info>
    </Wrap>
  );
};

export default ListItemComponent;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 333px;
  height: 138px;

  > img {
    max-width: 100px;
    flex-basis: 100px;
    object-fit: cover;
  }

  .nftmoa-author-name {
    margin: 0;
  }
`;

const Info = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;

  * {
    font-weight: 500;
    font-size: 12px;
    color: #000;
  }

  .header {
    align-items: flex-end;
  }

  h3 {
    font-weight: 700;
    font-size: 12px;
    width: 100%;
    margin-bottom: 3px;
  }

  h2 {
    font-weight: 700;
    font-size: 16px;
  }

  .timestamp {
    width: 100%;
    text-align: right;
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
  }

  .line-section {
    margin-top: 5px;
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
