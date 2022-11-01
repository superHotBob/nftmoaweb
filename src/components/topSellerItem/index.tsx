import React from 'react';
import styled from 'styles/theme';
import { Price } from 'styles';
import { ReactComponent as BadgeIcon } from 'assets/svg/certBadge.svg';
import { useNavigate } from 'react-router-dom';

const TopSellerItem: React.FC<any> = ({ rank, author, profileImage, cryptoIcon, price, ...props }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/rank/seller');
  };

  return (
    <Wrap {...props} onClick={onClick}>
      <p className="rank">{rank}</p>
      <Thumb>
        <div>
          <img src={profileImage} />
          <BadgeIcon width={20} height={20} />
        </div>
      </Thumb>
      <dl>
        <dt>{author}</dt>
        <dd>
          <Price icon={cryptoIcon} price={price} iconW={7} iconH={12} style={{ fontSize: 12 }} />
        </dd>
      </dl>
    </Wrap>
  );
};

export default TopSellerItem;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 200px;
  margin-right: 20px;

  &:not(:nth-child(3n)) {
    margin-bottom: 18px;
  }

  .rank {
    font-weight: 800;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.01em;
    color: #000000;
    margin-right: 14px;
  }

  & > dl {
    dt {
      font-weight: 600;
      font-size: 14px;
      letter-spacing: 0.01em;
      color: #000000;
    }
    dd {
    }
  }
`;

const Thumb = styled.div`
  margin-right: 14px;
  & > div {
    position: relative;
    & > img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
    }

    & > svg {
      position: absolute;
      right: 1px;
      bottom: 0;
    }
  }
`;
