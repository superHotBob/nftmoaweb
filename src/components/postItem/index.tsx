import React from 'react';
import styled from 'styled-components';

const PostItemComponent: React.FC<any> = ({ id, thumb, title, at, content, ...props }) => {
  return (
    <PostItem>
      <img src={thumb} />
      <Article>
        <h2>{title}</h2>
        <h6>{at}</h6>
        <p>{content}</p>
      </Article>
    </PostItem>
  );
};

export default PostItemComponent;

const PostItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  & > img {
    width: 70px;
    height: 70px;
    margin-right: 27px;
    background-color: #000;
  }
`;
const Article = styled.div`
  flex: 1;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;

  & > h2 {
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.01em;
    color: #101010;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & > h6 {
    font-weight: 600;
    font-size: 10px;
    line-height: 26px;
    letter-spacing: 0.01em;
    text-decoration-line: underline;
    color: #000000;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & > p {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: rgba(16, 16, 16, 0.5);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
