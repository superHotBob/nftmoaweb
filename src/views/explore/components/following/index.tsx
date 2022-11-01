import React from 'react';
import AuthorItem from 'components/authorItem';
import styled from 'styled-components';
import ScrollWrap from 'components/common/slideWrap';
import FollowListItem from 'components/followListItem';
import { NotFoundData } from 'styles';

const FollowingCompoent: React.FC<any> = ({ list }) => {
  if (list.length < 1) return <NotFoundData title={'No followings here'} desc={'Explore something for you on our marketplace'} />;
  return (
    <Wrap>
      {list.map((item: any, idx: number) => {
        if (item.type === 'author') {
          return <AuthorItem {...item} key={idx} />;
        } else if (item.type === 'follow_list') {
          return (
            <ScrollWrap padding={false} className="wrap-follow-list">
              {item.list.map((item: any, idx: number) => (
                <FollowListItem key={idx} {...item} />
              ))}
            </ScrollWrap>
          );
        }
      })}
    </Wrap>
  );
};

export default FollowingCompoent;
const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  .wrap-follow-list {
    height: 214px;
    position: relative;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;

    & > div {
      gap: 10px;
      position: absolute;
      top: 0;
      left: -30px;
      width: calc(100% + 60px);
      padding: 0 30px;
    }
  }
`;
