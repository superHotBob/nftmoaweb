import React from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom';
import styled from 'styles/theme';
import temp02img from 'assets/common/temp02.png';
import rankUpIcon from 'assets/icon/rank_up.png';
import rankDownIcon from 'assets/icon/rank_down.png';
import timeIcon from 'assets/icon/time.png';

const CommunityItem: React.FC<any> = ({ uid, title, memberName, viewCount, ...props }) => {
  return (
    <Wrap {...props}>
      <Link to={`/community/${uid}`}>
        <h2>{title}</h2>
        <Author>
          {/* <img src={author.photo} /> */}
          <div className="info">
            <span>{memberName}</span>
            <span className="read">Views {viewCount}</span>
          </div>
        </Author>
      </Link>
    </Wrap>
  );
};

export default CommunityItem;

const Wrap = styled.div`
  padding: 20px 17px;

  h2 {
    margin-bottom: 13px;
    color: #101010;
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
  }

  + div {
    border-top: 1px solid #eaeaea;
  }
`;

const Author = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: 100%;
  width: 100%;

  > img {
    width: 20px;
    height: 20px;
    border-radius: 100px;
  }

  .info {
    display: flex;
    align-items: left;
    justify-content: center;
    margin-left: 6px;
    width: 100%;
    font-size: 10px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.5);

    .read {
      margin-left: auto;
    }
  }
`;
