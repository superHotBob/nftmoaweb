import React from 'react';
import styled from 'styled-components';
import { Comment } from 'antd';
import { ReactComponent as HistoryIcon } from 'assets/svg/history.svg';
import { ReactComponent as MoreIcon } from 'assets/svg/more-dot.svg';
import { ReactComponent as EmojiIcon } from 'assets/svg/emoji.svg';
import { ReactComponent as ShareIcon } from 'assets/svg/share.svg';
import { ReactComponent as EditIcon } from 'assets/svg/edit.svg';
import { useNavigate } from 'react-router-dom';
import { AvatarName } from 'styles/';

const CommentStyle: React.FC<any> = ({ cId, name, avatar, content, isOnline = false, timestamp, actions }) => {
  const [openMore, setOpenMore] = React.useState(false);
  const [me, setMe] = React.useState(true);

  const handleToggleMore = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setOpenMore(true);
    if (openMore) setOpenMore(false);
  };

  const onCommentEdit = () => {};

  const defaultAction = [
    <BtnMore key={'more'} onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleToggleMore(e)}>
      <MoreIcon className={'icon-more'} />
      {openMore && (
        <MoreUtil>
          <li>
            <EmojiIcon />
          </li>
          <li>
            <ShareIcon className={'icon-share'} />
          </li>
          {me && (
            <li onClick={onCommentEdit}>
              <EditIcon className={'icon-edit'} />
            </li>
          )}
        </MoreUtil>
      )}
    </BtnMore>
  ];

  return (
    <StyledComment>
      <Comment
        actions={actions ? actions : defaultAction}
        author={name}
        avatar={<AvatarName avatar={avatar} dot={isOnline} dotW={8} dotH={8} />}
        content={<p className={'content'}>{content}</p>}
        datetime={
          timestamp ? (
            <div className="timestamp">
              <HistoryIcon width={8} height={8} />
              <span>{timestamp}</span>
            </div>
          ) : (
            false
          )
        }
      />
    </StyledComment>
  );
};

export default CommentStyle;

const StyledComment = styled.div`
  .ant-comment-content-author-name {
    font-weight: 600;
    font-size: 14px;
    line-height: 26px;
    color: #000000;
  }

  .ant-comment-content {
    padding-right: 45px;
  }

  .ant-comment-actions {
    position: absolute;
    right: 0;
    top: 0;
    margin: 0;

    & > li {
      cursor: pointer;
    }
  }

  .content {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #000000;
    word-break: break-all;
    white-space: pre-line;
  }

  .timestamp {
    span {
      display: inline-block;
      margin-left: 3px;
      font-weight: 400;
      font-size: 10px;
      line-height: 26px;
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;

const BtnMore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;

  .icon-more {
    margin-right: 10px;
    path {
      fill: #808080;
    }
  }

  .icon-edit {
    path {
      fill: #000;
    }
  }
`;

const MoreUtil = styled.ul`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 9px;
  z-index: 90;

  & > li {
    padding: 15px 17px;
    line-height: 0;
  }
  & > li + li {
    border-top: 1px solid #eaeaea;
  }

  .icon-share {
    path {
      fill-opacity: 1;
    }
  }
`;
