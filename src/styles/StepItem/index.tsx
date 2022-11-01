import React from 'react';
import styled, { css } from 'styled-components';

const StepsStyles: React.FC<any> = ({ num, title, desc, center = false, children, ...props }) => {
  return (
    <Steps className={'nftmoa-step-container'} {...props} center={center}>
      <dt>{num}</dt>
      <dd>
        {title && <h2>{title}</h2>}
        {desc && <p>{desc}</p>}
      </dd>
    </Steps>
  );
};

export default StepsStyles;

const center = css`
  justify-content: center;
`;

const Steps = styled.dl<{ center?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: flex-start;
  ${p => p.center && center}

  dt {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
    color: #fff;
    border-radius: 50%;
    font-weight: 600;
    font-size: 12px;
    text-align: center;
    margin-right: 15px;
  }
  dd {
    h2 {
      font-weight: 700;
      font-size: 16px;
      letter-spacing: -0.01em;
      color: #000000;
      margin-bottom: 4px;
    }
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 26px;
      letter-spacing: 0.01em;
      color: #6f6f6f;
    }
  }
`;
