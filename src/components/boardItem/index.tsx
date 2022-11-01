import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { digit } from 'utils';

const BoardItemComponent: React.FC<any> = ({ id, title, desc, thumbnail, online, members, ...props }) => {
  const navigate: any = useNavigate();

  return (
    <BoardItem onClick={() => navigate(`/community/${id}`)}>
      <img className={'thumbnail'} src={thumbnail} />
      <div>
        <h2>{title}</h2>
        <p className={'desc'}>{desc}</p>
        <ul>
          <li className="user-name">
            <span>{online} Online</span>
          </li>
          <li className="views">
            <span>{digit(members)} Members</span>
          </li>
        </ul>
      </div>
    </BoardItem>
  );
};

export default BoardItemComponent;

const BoardItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
  justify-content: flex-start;
  padding: 20px 18px;

  & + & {
    border-top: 1px solid #eaeaea;
  }

  .thumbnail {
    width: 100px;
    height: 100%;
    border-radius: 16px;
  }

  h2 {
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #17181a;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .desc {
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    color: #61656a;
    margin-bottom: 5px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    & > li {
      position: relative;
      font-weight: 400;
      font-size: 10px;
      line-height: 16px;
      color: #17181a;
      padding-right: 10px;

      & + li {
        padding-left: 10px;
        &::after {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          border-radius: 50%;
          padding: 1px;
          background: #000;
        }
      }
    }
  }
`;
