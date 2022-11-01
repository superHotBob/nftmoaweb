import React from 'react';
import styled from 'styled-components';
import { AuthorName } from 'styles';
import { ReactComponent as FavoriteIcon } from 'assets/svg/favorite.svg';
import { ReactComponent as UnFavoriteIcon } from 'assets/svg/unFavorite.svg';

const BrowserItemComponent: React.FC<any> = ({ id, nftName, nftImage, author, isFavorite, setIsFavorite, ...props }) => {
  return (
    <BrowserItem {...props} isFavorite={isFavorite} imageUrl={nftImage}>
      <div>
        <h2>{nftName}</h2>
        <AuthorName name={author} center={false} color="#fff" />
      </div>
      <FavoriteIcon onClick={() => setIsFavorite(!isFavorite)} />
    </BrowserItem>
  );
};

export default BrowserItemComponent;

const BrowserItem = styled.div<{ imageUrl?: any; isFavorite?: boolean }>`
  display: flex;
  flex-basis: 130px;
  min-width: 130px;
  height: 130px;
  border-radius: 10px;
  background: url(${p => p.imageUrl}) no-repeat center center;
  background-size: cover;
  overflow: hidden;
  object-fit: cover;
  padding: 6px 10px;
  flex-direction: column;
  justify-content: space-between;

  & + & {
    margin-left: 10px;
  }

  h2 {
    line-height: 1;
    font-weight: 700;
    font-size: 12px;
    color: #ffffff;
  }

  & > svg {
    fill: ${p => (p.isFavorite ? '#ff0000' : 'transparent')};
    & > path {
      stroke: ${p => (p.isFavorite ? '#ff0000' : '#fff')};
    }
  }
`;
