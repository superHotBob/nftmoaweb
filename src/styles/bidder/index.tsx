import React from 'react';
import styled from 'styled-components';

const BidderStyles: React.FC<any> = ({ list, ...props }) => {
  return (
    <Bidder {...props}>
      {list.map((item: any, idx: number) => (
        <li key={idx}>
          <img src={item.profileImage} />
        </li>
      ))}
    </Bidder>
  );
};

export default BidderStyles;

const Bidder = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 12px;

  & > li {
    width: 25px;
    height: 25px;
    background: #ffffff;
    border: 2px solid #efefef;
    box-sizing: border-box;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.06);
    border-radius: 50%;
    overflow: hidden;
  }

  & > li + li {
    margin-left: -5px;
  }
`;
