import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { CTG } from 'api/mock/home';
import { PROFILE_CREATE, PROFILE_OWNED } from 'api/mock/profile';
import { AD_LIST, BANNER_IMG, USER_LIST } from 'api/mock/search';
import SearchHeader from 'components/Header/SearchHeader';
import AuthorItemComponent from 'components/authorItem';
import Section from 'components/common/section';
import ScrollWrap from 'components/common/slideWrap';
import NftProductCompoent from 'components/nftProductItem';
import UserItem from 'components/userItem';
import styled from 'styled-components';
import { Banners, Tabs, ThumbTitle } from 'styles';
import Filter from 'styles/filter';
import { ReactComponent as HistoryIcon } from 'assets/svg/history.svg';
import { ReactComponent as DeleteIcon } from 'assets/svg/deleteCircle.svg';
import qs from 'query-string';
import APIService from 'api/index';

const apiService = new APIService();

const SearchResultView: React.FC<any> = () => {
  const { search } = useLocation();
  const { name, keyword } = qs.parse(search);

  const [activeTab, setActiveTab] = React.useState('Collections');
  const [tagList, setTagList] = React.useState(['3,000 ETH', 'Art']);
  const [categories, setCategories] = React.useState({ art: false, music: false, games: false, photography: false, domains: false });
  const [saleType, setSaleType] = React.useState({ timedAuction: false, userOnly: false, fixedPrice: false, openFor: false });
  const [visibleHistory, setVisibleHistory] = React.useState(false);

  const [collection, setCollection] = React.useState<any[]>([]);
  const [token, setToken] = React.useState<any[]>([]);

  const handleSearchWatch = () => {
    const nftmoaSearch = document.getElementById('nftmoa-search') as HTMLInputElement;
    if (nftmoaSearch.value.length > 0) {
      // setVisibleHistory(true);
    } else {
      setVisibleHistory(false);
    }
  };

  const getSearch = async () => {
    // const searchResult = await apiService.searchMintable(keyword);
    console.log(name, 'name');
    const collectionResult = await apiService.getCollection({ name, keyword });

    setCollection(collectionResult.collections);
    setToken([]);
  };

  const getItem = async (address: any) => {
    const tokenResult = await apiService.getToken({ address });

    if (tokenResult.tokens.length > 0) {
      setToken(tokenResult.tokens);
    }
  };

  React.useEffect(() => {
    (name || keyword) && getSearch();

    window.addEventListener('keydown', handleSearchWatch);
    return () => {
      window.removeEventListener('keydown', handleSearchWatch);
    };
  }, [name, keyword]);

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
          <Tabs active={activeTab}>
            <Tabs.Item value="Collections" onClick={() => setActiveTab('Collections')}>
              Collections
            </Tabs.Item>
            {/* <Tabs.Item value="Items" onClick={() => setActiveTab('Items')}>
              Items
            </Tabs.Item> */}
            <Tabs.Item value="Users" onClick={() => setActiveTab('Users')}>
              Users
            </Tabs.Item>
          </Tabs>

          <Filter
            tagList={tagList}
            setTagList={setTagList}
            categories={categories}
            setCategories={setCategories}
            saleType={saleType}
            setSaleType={setSaleType}
            filterList={{ price: true, category: true, sale: true }}
          />

          {/* {activeTab === 'Items' && (
            
          )} */}

          {activeTab === 'Users' && (
            <Section title="Users" className="wrap-users">
              {USER_LIST.map((item, idx) => (
                <UserItem key={idx} {...item} />
              ))}
            </Section>
          )}

          {token.length === 0 && activeTab === 'Collections' && (
            <Section title="Collections" className="wrap-collections">
              {collection.length > 0 &&
                collection.map((item, idx) => (
                  <div key={idx} onClick={() => getItem(item.address)}>
                    <AuthorItemComponent {...item} />
                  </div>
                ))}
            </Section>
          )}

          {token.length > 0 && activeTab === 'Collections' && (
            <Section title="Items" className="wrap-items">
              {token.map((item, idx) => (
                <NftProductCompoent key={idx} {...item} />
              ))}
            </Section>
          )}

          <ScrollWrap title="Browse by Category" style={{ background: '#F5F5F5', marginBottom: 30 }}>
            {CTG.map((item, index) => (
              <ThumbTitle key={index} {...item} />
            ))}
          </ScrollWrap>

          <Banners list={AD_LIST} className="wrap-ad" />
        </>
      )}
    </Wrap>
  );
};

export default SearchResultView;

const Wrap = styled.div`
  position: relative;
  padding-top: 26px;

  & > .wrap-items {
    padding: 24px 20px 0;
    & > div {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  & > .wrap-users {
    & > div {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }

  & > .wrap-ad {
    margin-bottom: 30px;
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
