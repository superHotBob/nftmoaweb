import React from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import SubHeader from 'components/Header/SubHeader';
import { MSG_ROOM_LIST } from 'api/mock/community';
import { Button, CommentItem } from 'styles';

const MessageRoomView: React.FC<any> = () => {
  const navigate = useNavigate();
  const { uname }: any = useParams();
  const { name, data, introComment, type, isOnline } = MSG_ROOM_LIST[`${String('justin').toLocaleLowerCase()}`]!;

  return (
    <Wrap>
      <SubHeader
        title={
          <PageTitle>
            <p className="name">{name}</p>
            {introComment && <sub>{introComment}</sub>}
          </PageTitle>
        }
      />

      {data.map((item: any, idx: number) => (
        <>
          <CommentItem name={item.name} avatar={item.avatar} isOnline={isOnline} content={item.content} timestamp={item.timestamp} />
          {type === 'WELCOME' && (
            <StyledButton>
              <Button rect w={230} h={40} text={'ACCEPTED'} color={'blue'} />
            </StyledButton>
          )}
        </>
      ))}
    </Wrap>
  );
};

export default MessageRoomView;

const Wrap = styled.div`
  padding: 14px 20px;
`;

const PageTitle = styled.div`
  line-height: 0;
  font-size: 0;

  .name {
    font-weight: 700;
    font-size: 18px;
    line-height: 32px;
    color: #000000;
  }

  sub {
    font-weight: 400;
    font-size: 10px;
    line-height: 18px;
    color: #000000;
  }
`;

const StyledButton = styled.div`
  padding-left: 40px;
`;
