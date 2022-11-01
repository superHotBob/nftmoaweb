import AuthorItem from 'components/authorItem';
import NftProductItem from 'components/nftProductItem';
import React from 'react';
import styled from 'styled-components';
import { Tabs } from 'styles';
import { NotFoundData } from 'styles';

const AllComponent: React.FC<any> = ({ list }) => {
  if (list.length < 1) return <NotFoundData title={'No followings here'} desc={'Explore something for you on our marketplace'} />;
  return (
    <Wrap>
      {list.map((item: any, index: number) => {
        if (item.type === 'nft') {
          return <NftProductItem {...item} key={index} />;
        } else if (item.type === 'author') {
          return <AuthorItem style={{ margin: '15px 4px 30px' }} {...item} key={index} />;
        }
      })}
    </Wrap>
  );
};

export default AllComponent;

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;
