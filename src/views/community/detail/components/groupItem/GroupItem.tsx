import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MoreIcon } from 'assets/svg/arrow-more.svg';
import { ReactComponent as HashIcon } from 'assets/svg/hash.svg';
import { ReactComponent as LockIcon } from 'assets/svg/lock.svg';

const GroupItemComponent: React.FC<any> = ({ onClick, name, isPrivate, ...props }) => {
  return (
    <Wrap onClick={onClick}>
      <div className={'item-left wrap-list'}>
        <HashIcon />
        <Name>{name}</Name>
      </div>
      <div className={'item-right wrap-list'}>
        {isPrivate && <LockIcon />}
        <MoreIcon />
      </div>
    </Wrap>
  );
};

export default GroupItemComponent;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 20px;
  }

  .item-right {
    gap: 30px;
  }
`;
const Name = styled.div`
  margin-left: 10px;
  font-weight: 900;
  font-size: 12px;
  line-height: 26px;
  color: #000000;
`;
