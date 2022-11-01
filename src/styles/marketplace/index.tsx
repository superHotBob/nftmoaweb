import React from 'react';
import styled from 'styled-components';

const MarketplaceStyles: React.FC<any> = ({ icon, market, ...props }) => {
  return (
    <Marketplace {...props}>
      {icon && <img src={icon} />}
      <p className="market">{market}</p>
    </Marketplace>
  );
};

export default MarketplaceStyles;

const Marketplace = styled.div<{ semiBold?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > img {
    display: flex;
    margin-right: 3px;
    width: 12px;
    height: 12px;
  }

  .market {
    font-weight: 600;
    font-size: 10px;
    letter-spacing: 0.01em;
    color: #000000;
  }
`;
