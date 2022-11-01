import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CancelIcon } from 'assets/svg/deleteCircle.svg';
import { useNavigate } from 'react-router-dom';

const ListStyle: React.FC<any> = ({ prefix, icon, title, suffix, fontSize = 12, onClick }) => {
  const navigate = useNavigate();

  return (
    <Wrap onClick={onClick}>
      <Leftbox fontSize={fontSize}>
        {prefix && prefix}
        {icon && <img src={icon} />}
        <h2 className={'list-title'}>{title}</h2>
      </Leftbox>
      {suffix ? (
        suffix
      ) : (
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.06673 15.0332L0.733398 13.6832L6.45007 7.96657L0.733398 2.2499L2.06673 0.899902L9.1334 7.96657L2.06673 15.0332Z" fill="black" />
        </svg>
      )}
    </Wrap>
  );
};

export default ListStyle;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & + & {
    padding-top: 20px;
  }
`;

const Leftbox = styled.div<{ fontSize?: number }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  h2 {
    margin-left: 10px;
    font-weight: 900;
    font-size: ${p => p.fontSize}px;
    line-height: 26px;
    color: #000000;
  }
`;
