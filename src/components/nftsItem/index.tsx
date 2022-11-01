import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CancleIcon } from 'assets/svg/deleteCircle.svg';
import { useNavigate } from 'react-router-dom';
import { AuthorName, Price } from 'styles';
import { digit } from 'utils';
import FullItemComponent from './fullItem';
import CardItemComponent from './cardItem';
import ListItemComponent from './listItem';

const NftsItem: React.FC<any> = (item: any) => {
  console.log(item);
  const navigate = useNavigate();
  const _renderComponent = (type: string) => {
    switch (type) {
      case 'list':
        return <ListItemComponent {...item} />;
      case 'card':
        return <CardItemComponent {...item} />;
      default:
        return <FullItemComponent {...item} />;
    }
  };
  return <Wrap>{_renderComponent(item.type)}</Wrap>;
};

export default NftsItem;

const Wrap = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 21px;
  border: 1px solid #efefef;
  box-shadow: 0px 0px 14px rgb(0 0 0 / 6%);
`;
