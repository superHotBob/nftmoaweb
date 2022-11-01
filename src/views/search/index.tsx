import React from 'react';
import styled from 'styles/theme';
import ScrollWrap from 'components/common/slideWrap';
import { Banners, ThumbTitle } from 'styles';

import SearchHeader from 'components/Header/SearchHeader';
import Section from 'components/common/section';
import PostItem from 'components/postItem';
import NftProductCompoent from 'components/nftProductItem';
import UserItem from 'components/userItem';
import AuthorItemComponent from 'components/authorItem';
import { CTG } from 'api/mock/home';
import { PROFILE_CREATE, PROFILE_OWNED } from 'api/mock/profile';
import { AD_LIST, BANNER_IMG, POST_LIST, USER_LIST } from 'api/mock/search';
import { ReactComponent as HistoryIcon } from 'assets/svg/history.svg';
import { ReactComponent as DeleteIcon } from 'assets/svg/deleteCircle.svg';

const SearchView: React.FC<any> = ({ user, ...props }) => {
  const [visibleHistory, setVisibleHistory] = React.useState(false);

  const handleSearchWatch = () => {
    const nftmoaSearch = document.getElementById('nftmoa-search') as HTMLInputElement;
    if (nftmoaSearch.value.length > 0) {
      console.log(nftmoaSearch.value, 'dddd');
      setVisibleHistory(true);
    } else {
      setVisibleHistory(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleSearchWatch);
    return () => {
      window.removeEventListener('keydown', handleSearchWatch);
    };
  }, []);
  return (
    <Wrap>
      <SearchHeader />
      {visibleHistory ? (
        <History>
          <div>
            <dl>
              <dt>
                <HistoryIcon width={14} height={14} />
              </dt>
              <dd>nft</dd>
            </dl>
            <DeleteIcon onClick={() => console.log('delete')} />
          </div>
        </History>
      ) : (
        <>
          <Banners list={BANNER_IMG} />

          <Section className="wrap-post">
            {POST_LIST.map((item, idx) => (
              <PostItem key={idx} {...item} />
            ))}
          </Section>

          <Section title="Items" className="wrap-items">
            {PROFILE_OWNED.map((item, idx) => (
              <NftProductCompoent key={idx} {...item} />
            ))}
          </Section>

          <ScrollWrap className="wrap-banner">
            {BANNER_IMG.map((item, idx) => (
              <img key={idx} src={item.imgUrl} />
            ))}
          </ScrollWrap>

          <Section title="Users" className="wrap-users">
            {USER_LIST.map((item, idx) => (
              <UserItem key={idx} {...item} />
            ))}
          </Section>

          <Section title="Collection">
            {PROFILE_CREATE.map((item, idx) => (
              <AuthorItemComponent key={idx} {...item} />
            ))}
          </Section>

          <ScrollWrap title="Browse by Category" className={'browse-ctg'}>
            {CTG.map((item, index) => (
              <ThumbTitle key={index} {...item} />
            ))}
          </ScrollWrap>

          <Banners list={AD_LIST} />
        </>
      )}
    </Wrap>
  );
};

export default SearchView;

const Wrap = styled.div`
  position: relative;
  padding-top: 26px;

  & > .wrap-banner {
    & > div {
      gap: 8px;

      & > img {
        width: 335px;
        min-width: 335px;
        height: 150px;
        border-radius: 10px;
      }
    }
  }

  & > .wrap-post {
    padding: 30px 20px;
    border-bottom: 1px solid #eaeaea;

    div.box-section {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }

  & > .wrap-items {
    div.box-section {
      display: flex;
      flex-wrap: wrap;
    }
  }

  & > .wrap-users {
    div.box-section {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }
`;

const History = styled.div`
  padding: 0 20px;
  height: 100vh;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    & > dl {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex: 1;
      dt {
        display: flex;
        margin-right: 12px;
      }

      dd {
        flex: 1;
        font-family: 'Apple SD Gothic Neo';
        font-weight: 600;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: -0.01em;
        color: #000000;
      }
    }
  }
`;
