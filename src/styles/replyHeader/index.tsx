import React from 'react';
import styled from 'styled-components';
import { ReactComponent as HistoryIcon } from 'assets/svg/history.svg';
import { ReactComponent as FavoriteIcon } from 'assets/svg/favorite.svg';

import moment from 'moment';

const HeadReplyStyles: React.FC<any> = ({ profileImage, userName, timestamp, isFavorite, viewAmount }) => {
  return (
    <Header>
      {/* <div className="profile-image">
        <img src={profileImage} />
      </div> */}
      <div className="user-name">
        <span>{userName}</span>
      </div>
      {timestamp && (
        <div className="timestamp">
          <HistoryIcon width={8} height={8} />
          <span>{moment(timestamp).format('LLL')}</span>
        </div>
      )}
      <div className="area-left">
        {/* {(isFavorite || (isFavorite === false && isFavorite !== null)) && (
          <div className="favorite">
            <Favorite isFavorite={isFavorite}>
              <FavoriteIcon width={15} height={15} />
            </Favorite>
          </div>
        )} */}
        {viewAmount && (
          <div className="views">
            <span>View {viewAmount}</span>
          </div>
        )}
      </div>
    </Header>
  );
};

export default HeadReplyStyles;

const Header = styled.div`
  margin: 6px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  span {
    font-weight: 400;
    font-size: 11px;
    line-height: 26px;
    color: rgba(0, 0, 0, 0.5);
  }

  .area-left {
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    top: 0;
  }

  .profile-image {
    width: 22px;
    height: 20px;
    border-radius: 50%;
    margin-right: 10px;
    overflow: hidden;
  }

  .user-name {
    margin-right: 15px;
  }

  .timestamp {
    display: flex;
    flex-direction: row;
    align-items: center;

    & > span {
      margin-left: 1px;
    }
  }

  .favorite,
  .views {
    display: flex;
    align-items: center;

    & > div {
      display: flex;
      align-items: center;
      display: flex;
      margin-right: 5px;
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
