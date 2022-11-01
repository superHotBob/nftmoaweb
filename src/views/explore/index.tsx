import React from 'react';
import styled from 'styles/theme';
import { Tab, Filter, ThumbTitle, Banners } from 'styles';
import AllComponent from './components/all';
import FollowingComponent from './components/following';
import { ALL_LIST, FOLLOWING_LIST } from 'api/mock/explore';
import ScrollWrap from 'components/common/slideWrap';
import { AD_LIST } from 'api/mock/search';
import { CTG } from 'api/mock/home';

const ExploreView: React.FC<any> = ({ user, ...props }) => {
  const [activeTab, setActiveTab] = React.useState('All');
  const [tagList, setTagList] = React.useState(['3,000 ETH', 'Art']);
  const [categories, setCategories] = React.useState({ art: false, music: false, games: false, photography: false, domains: false });
  const [saleType, setSaleType] = React.useState({ timedAuction: false, userOnly: false, fixedPrice: false, openFor: false });

  return (
    <Wrap>
      <Tab active={activeTab}>
        <Tab.Item value="All" onClick={() => setActiveTab('All')} />
        <Tab.Item badge={99} value="Following" onClick={() => setActiveTab('Following')} />
      </Tab>

      <Filter
        tagList={tagList}
        setTagList={setTagList}
        categories={categories}
        setCategories={setCategories}
        saleType={saleType}
        setSaleType={setSaleType}
        filterList={{ price: true, category: true, sale: true }}
      />

      <List>
        {activeTab === 'All' && <AllComponent list={ALL_LIST} />}
        {activeTab === 'Following' && <FollowingComponent list={FOLLOWING_LIST} />}
      </List>

      <ScrollWrap title="Browse by Category" style={{ background: '#F5F5F5', marginBottom: 30 }}>
        {CTG.map((item, index) => (
          <ThumbTitle key={index} {...item} />
        ))}
      </ScrollWrap>

      <Banners list={AD_LIST} className="wrap-ad" />
    </Wrap>
  );
};

export default ExploreView;

const Wrap = styled.div`
  position: relative;
  padding-top: 26px;
  margin-bottom: 11px;
`;

const List = styled.div`
  padding: 30px 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
