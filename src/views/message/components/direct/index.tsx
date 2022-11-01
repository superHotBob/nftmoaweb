import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AvatarName, Badge } from 'styles';

const DirectItemComponent: React.FC<any> = ({ list, total }) => {
  const navigate = useNavigate();

  return (
    <Wrap>
      {list.map((item: any, idx: number) => (
        <ListItem key={idx} onClick={() => navigate(`/message/direct/${item.name}`)}>
          <AvatarName dot={item.isOnline} size={'large'} gap={20} avatar={item.thumbUrl} name={item.name} desc={item.introComment} />
          <Badge count={item.chatTotal} color={'white'} w={28} h={28} />
        </ListItem>
      ))}
    </Wrap>
  );
};

export default DirectItemComponent;

const Wrap = styled.div`
  & > h2 {
    font-weight: 800;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
    margin-bottom: 33px;
  }
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 35px;
  }
`;
