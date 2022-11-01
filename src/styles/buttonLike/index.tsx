import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Like } from 'assets/svg/like.svg';
import { ReactComponent as Unlike } from 'assets/svg/unlike.svg';

const ButtonLikeStyles: React.FC<any> = ({ amount, isLike, handleLike, ...props }) => {
  return (
    <ButtonLike>
      {isLike ? (
        <button
          onClick={e => {
            handleLike(e, 'off');
          }}
        >
          <Like />
        </button>
      ) : (
        <button
          onClick={e => {
            handleLike(e, 'on');
          }}
        >
          <Unlike />
        </button>
      )}
      <p className="amount">{amount}</p>
    </ButtonLike>
  );
};

export default ButtonLikeStyles;
const ButtonLike = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14px;
    height: 13px;
    line-height: 1;

    & > svg {
      width: 100%;
      height: 100%;
    }
  }

  .amount {
    margin-left: 5px;
    font-weight: 400;
    font-size: 10px;
    color: rgba(0, 0, 0, 0.5);
  }
`;
