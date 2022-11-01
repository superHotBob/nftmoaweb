import React from 'react';
import styled from 'styled-components';
import { ReplyAction, ReplyHeader } from 'styles';

const ReplyItemComponent: React.FC<any> = ({ userName, isFavorite, setOpen, timestamp, profileImage, rereply, content }) => {
  return (
    <>
      <Reply className="reply-first">
        <div className="reply-inner">
          <ReplyHeader profileImage={profileImage} userName={userName} timestamp={timestamp} isFavorite={null} />
          <Contents>{content}</Contents>
          <ReplyAction isFavorite={isFavorite} setOpen={setOpen} />
        </div>

        {rereply?.map((item: any, idx: number) => (
          <Reply key={idx} style={{ borderTop: '1px solid #f4f4f4' }}>
            <div className="reply-inner">
              <ReplyHeader profileImage={item.profileImage} userName={item.userName} timestamp={item.timestamp} isFavorite={null} />
              <Contents>{item.content}</Contents>
              <ReplyAction isFavorite={isFavorite} setOpen={setOpen} />
            </div>
            {item.rerereply?.map((item: any, idx: number) => (
              <Reply key={idx} style={{ borderTop: '1px solid #f4f4f4' }}>
                <div className="reply-inner">
                  <ReplyHeader profileImage={item.profileImage} userName={item.userName} timestamp={item.timestamp} isFavorite={null} />
                  <Contents>{item.content}</Contents>
                  <ReplyAction isFavorite={isFavorite} setOpen={setOpen} />
                </div>
              </Reply>
            ))}
          </Reply>
        ))}
      </Reply>
    </>
  );
};

export default ReplyItemComponent;

const Reply = styled.div`
  padding: 20px 0 0 0;
  margin-left: 20px;

  &.reply-first {
    padding-right: 20px;
  }

  & + div {
    padding-top: 20px;
    border-top: 1px solid #f4f4f4;
  }

  & div.reply-inner {
    padding-bottom: 25px;
  }
`;

const Contents = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: #000000;
  margin-top: 6px;
  margin-bottom: 15px;
  padding-left: 30px;
`;
