import ArticleItem from 'components/articleItem';
import Section from 'components/common/section';
import ScrollWrap from 'components/common/slideWrap';
import { url } from 'inspector';
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import HashTag from 'styles/hashTag';
import articleDetail from './api/articleDetail.json';

import APIService from 'api/index';

const apiService = new APIService();

const ArticleDetailView: React.FC<any> = () => {
  const { id } = useParams();
  // const { tags, title, contents, author, date, bg } = articleDetail[Number(id) - 1];

  const [articleList, setArticleList] = React.useState([]);
  const [articleContent, setArticleContent] = React.useState<any>();

  const getData = async () => {
    const articleList = await apiService.getArticleList({ page: 1, size: 10 });
    const articleData = await apiService.getArticleDetail({ id });

    setArticleContent(articleData);
    setArticleList(articleList.list);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <Wrap>
      <TitleContainer>
        {/* {tags && <HashTag style={{ paddingTop: 28, marginBottom: 19, ...(bg ? { color: 'rgba(255, 255, 255, 0.5)' } : { color: 'rgba(0, 0, 0, 0.5)' }) }} tags={tags} />} */}
        <Title>{articleContent?.title}</Title>
      </TitleContainer>
      {/* <ArticleInfo>
        <div>{author.name}</div>
        <div>{articleContent?.createdAt}</div>
      </ArticleInfo> */}
      <Contents>
        {articleContent?.photos.map((content: any, idx: number) => (
          <img src={content.uri} key={idx} />
        ))}
        <Content>{articleContent?.content}</Content>
      </Contents>
      {/* <AuthorInfo>
        <img src={author.photo} />
        <ul>
          <li>{author.name}</li>
          <li>{author.email}</li>
        </ul>
      </AuthorInfo> */}
      <ScrollWrap title="Related" style={{ backgroundColor: '#F5F5F5' }} round>
        {articleList.map((item, index) => (
          <ArticleItem {...item} key={index} />
        ))}
      </ScrollWrap>
    </Wrap>
  );
};

export default ArticleDetailView;

const Wrap = styled.div`
  border-top: 8px solid #f4f4f4;
`;
const TitleContainer = styled.div<{ bg?: string }>`
  padding: 0 30px;
  margin-bottom: 23px;
  ${p => p.bg && `background-image: url(${p.bg})`};
`;

const Title = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 26px;
  line-height: 36px;
  letter-spacing: 0.01em;
`;

const Contents = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: #101010;

  & > img {
    width: 100%;
    margin-top: 16px;
  }
`;

const ArticleInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 30px;
  margin: 0 -10px;

  & > div {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 26px;
    color: rgba(0, 0, 0, 0.5);
    position: relative;
    padding: 0 10px;

    &:first-child::after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      width: 1px;
      height: 14px;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`;

const Content = styled.p`
  padding: 20px 30px;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 30px 55px;

  & > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 13px;
  }

  ul {
    & > li {
      font-family: 'Noto Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      color: rgba(0, 0, 0, 0.5);

      & + & {
        margin-top: 4px;
      }
    }
  }
`;
