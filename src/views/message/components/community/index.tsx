import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AvatarName, Badge } from 'styles';

const CommunityItemComponent: React.FC<any> = ({ list }) => {
  const navigate = useNavigate();

  return (
    <Wrap>
      {list.map((item: any, idx: number) => (
        <ListItem key={idx}>
          <h2>
            {item.groupName} ({item.total})
          </h2>
          {item.list.map((item: any, idx: number) => (
            <ChatItem key={idx} onClick={() => navigate(`/message/community/${item.name}`)}>
              <AvatarName dot={item.isOnline} size={'large'} gap={20} avatar={item.thumbUrl} name={item.name} desc={item.introComment} />
              <Badge count={item.chatTotal} color={'white'} w={28} h={28} />
            </ChatItem>
          ))}
        </ListItem>
      ))}
    </Wrap>
  );
};

export default CommunityItemComponent;

const Wrap = styled.div``;

const ListItem = styled.div`
  & + & {
    margin-top: 42px;
  }
  & > h2 {
    font-weight: 800;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
    margin-bottom: 33px;
  }
`;

const ChatItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 35px;
  }
`;
