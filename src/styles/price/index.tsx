import React from 'react';
import styled from 'styled-components';

const PriceStyles: React.FC<any> = ({ icon, iconW, iconH, price, fontSize = 16, timestamp, prefix, color, suffix, ...props }) => {
  return (
    <Price className={'nftmoa-price-container'} color={color} iconW={iconW} iconH={iconH} fontSize={fontSize}>
      {icon && <img src={icon} className={'logo'} />}
      <p className={'price'} {...props}>
        {prefix && prefix}
        {price}
      </p>
      {timestamp && <span className={'timestamp'}>({timestamp})</span>}
      {suffix && suffix}
    </Price>
  );
};

export default PriceStyles;

const Price = styled.div<{ iconW?: number; iconH?: number; fontSize?: number; color?: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  & > img {
    display: flex;
    margin-right: 5px;
    width: ${p => (p.iconW ? p.iconW : 10)}px;
    height: ${p => (p.iconH ? p.iconH : 15)}px;
    object-fit: contain;
  }

  & > p.price {
    font-weight: 700;
    font-size: ${p => p.fontSize}px;
    color: ${p => (p.color ? p.color : '#000')};
  }

  .timestamp {
    display: inline-block;
    bottom: 0;
    margin-left: 3px;
    font-weight: 400;
    font-size: 10px;
    letter-spacing: 0.01em;
    color: #0094ff;
    white-space: nowrap;
    display: flex;
    align-self: flex-end;
    line-height: 1.4;
  }
`;
