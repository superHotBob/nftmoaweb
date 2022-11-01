import React from 'react';
import styled from 'styled-components';
import { ReactComponent as HistoryIcon } from 'assets/svg/history.svg';
import { ReactComponent as ReplyIcon } from 'assets/svg/reply.svg';
import { ReactComponent as FavoriteIcon } from 'assets/svg/favorite.svg';
import { ReactComponent as ShareIcon } from 'assets/svg/share.svg';

const ReplyActionStyles: React.FC<any> = ({ isFavorite, setOpen }) => {
  return (
    <Action>
      <li className="btn-reply" onClick={() => setOpen(true)}>
        <ReplyIcon />
        <span>Reply</span>
      </li>
      <li className="btn-share">
        <ShareIcon />
        <span>Share</span>
      </li>
      <li className="favorite">
        <Favorite isFavorite={isFavorite}>
          <FavoriteIcon width={16} height={15} />
        </Favorite>
        <span>Like</span>
      </li>
    </Action>
  );
};

export default ReplyActionStyles;

const Action = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding-left: 30px;

  & > li {
    font-weight: 400;
    font-size: 10px;
    line-height: 26px;
    display: flex;
    align-items: center;
    margin-right: 25px;

    & > span {
      display: inline-block;
      margin-left: 6px;
    }

    &.favorite {
      display: flex;
      align-items: center;
      position: absolute;
      right: 0;
      top: 0;

      & > div {
        display: flex;
        align-items: center;
        display: flex;
        margin-right: 5px;
      }
    }
  }
`;

const Favorite = styled.div<{ isFavorite?: boolean }>`
  & > svg {
    fill: ${p => (p.isFavorite ? '#ff0000' : 'transparent')};
    & > path {
      stroke: ${p => (p.isFavorite ? '#ff0000' : '#808080')};
    }
  }
`;
