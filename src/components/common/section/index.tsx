import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styles/theme';

const Section: React.FC<any> = ({ title, round, moreLink, underMoreLink, children, ...props }) => {
  return (
    <Wrap {...props}>
      {title && <h2>{title}</h2>}
      <div className={round ? 'roundBox' : 'box-section'}>{children}</div>
      {(moreLink || underMoreLink) && (
        <Link className={underMoreLink ? 'link-more-under' : 'link-more'} to={moreLink ? moreLink : underMoreLink}>
          + more
        </Link>
      )}
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  position: relative;
  padding: 24px 20px;
  width: 100%;

  & > h2 {
    margin-bottom: 20px;
    line-height: 26px;
    font-size: 16px;
    font-weight: 800;
  }

  & .roundBox {
    background: #ffffff;
    border: 1px solid #efefef;
    box-sizing: border-box;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.06);
    border-radius: 10px;
    overflow: hidden;
  }

  & .link-more {
    position: absolute;
    top: 30px;
    right: 25px;
    text-align: center;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: -0.01em;
    color: #000000;
  }

  & .link-more-under {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    text-align: center;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: -0.01em;
    color: #000000;
  }
`;
