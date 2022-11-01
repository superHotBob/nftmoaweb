import React from 'react';
import styled from 'styles/theme';
import { useNavigate } from 'react-router-dom';

const ArticleItem: React.FC<any> = ({ title, content, uid, photos, ...props }) => {
  const navigate = useNavigate();
  return (
    <Wrap {...props} onClick={() => navigate(`/article/${uid}`, uid)}>
      <div>
        <h2>{title}</h2>
        {photos.length > 0 && <img src={photos[0].uri} />}
        {photos.length === 0 && <p>{content}</p>}
      </div>
    </Wrap>
  );
};

export default ArticleItem;

const Wrap = styled.div`
  display: flex;
  flex-basis: 300px;
  max-width: 300px;
  min-height: 200px;
  background: #ffffff;
  border: 1px solid #efefef;
  box-sizing: border-box;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.06);
  border-radius: 10px;

  & + div {
    margin-left: 15px;
  }

  > div {
    position: relative;
    padding: 20px 15px 20px;
    width: 300px;
    min-height: 162px;
    font-size: 14px;
    overflow: hidden;

    h2 {
      margin-bottom: 20px;
      color: #101010;
      font-weight: bold;
      line-height: 20px;
    }

    p {
      line-height: 20px;
    }
  }

  img {
    height: auto;
  }
`;

const Author = styled.div`
  position: absolute;
  bottom: 22px;
  left: 15px;

  display: flex;

  > img {
    width: 40px;
    height: 40px;
    border-radius: 100px;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    margin-left: 13px;

    font-size: 10px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.5);
  }
`;
