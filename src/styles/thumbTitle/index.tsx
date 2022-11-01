import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ThumbTitleStyles: React.FC<any> = ({ img, name, keyword, ...props }) => {
  const navigate = useNavigate();
  return (
    <ThumTitle onClick={() => navigate(`/search/result?keyword=${keyword}`)}>
      <img src={img} />
      <Link to={name}>{name}</Link>
    </ThumTitle>
  );
};

export default ThumbTitleStyles;

const ThumTitle = styled.div`
  flex-basis: 90px;
  position: relative;
  width: 90px;
  height: 90px;
  border-radius: 6px;

  a,
  strong {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    min-width: 90px;
    width: 100%;
    height: 100%;
    font-size: 16px;
    color: #fff;
    font-weight: 800;
    text-transform: uppercase;
    word-break: break-word;
    text-align: center;

    &.none {
      position: static;
    }
  }

  img {
    width: 90px;
    height: 90px;
  }

  & + div {
    margin-left: 6px;
  }
`;
