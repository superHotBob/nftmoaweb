import React from 'react';
import styled from 'styled-components';
import bg_scan from 'assets/bg/scan.png';

const ScanningComponent: React.FC<any> = () => {
  return (
    <Wrap>
      <div>
        <p>Scanning Factory...</p>
        <img src={bg_scan} />
      </div>
    </Wrap>
  );
};

export default ScanningComponent;

const Wrap = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000000;

  & > div {
    text-align: center;
    & > p {
      font-weight: 700;
      font-size: 20px;
      line-height: 26px;
      letter-spacing: 0.01em;
      text-transform: uppercase;
      color: #ffffff;
      margin-bottom: 16px;
    }
    & > img {
      width: 145px;
      height: 145px;
    }
  }
`;
