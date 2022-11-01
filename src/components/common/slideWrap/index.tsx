import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styles/theme';

const ScrollWrap: React.FC<any> = ({ title, moreLink, underMoreLink, padding = true, children, ...props }) => {
  return (
    <Outer {...props} padding={padding}>
      {title && <Title>{title}</Title>}
      <Wrap padding={padding}>{children}</Wrap>
      {(moreLink || underMoreLink) && (
        <Link className={underMoreLink ? 'link-more-under' : 'link-more'} to={moreLink ? moreLink : underMoreLink}>
          + more
        </Link>
      )}
    </Outer>
  );
};

export default ScrollWrap;
const Outer = styled.div<{ padding?: boolean }>`
  position: relative;

  & > div {
    ${p => !p.padding && 'padding:0'}
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
const Wrap = styled.div<{ padding?: boolean }>`
  display: flex;
  flex-wrap: nowrap;
  padding: 0 20px 10px 20px;
  width: 100%;
  overflow: hidden;
  overflow-x: auto;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  padding: 30px 20px 0;
  line-height: 26px;
  font-size: 16px;
  font-weight: 700;

  + div {
    padding: 0 20px 35px;
  }
`;
