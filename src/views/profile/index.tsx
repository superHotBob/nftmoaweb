import React from 'react';
import styled from 'styles/theme';
import { ReactComponent as SettingIcon } from 'assets/svg/setting.svg';
import { ReactComponent as PlusIcon } from 'assets/svg/plus.svg';
import { ReactComponent as Instagram } from 'assets/svg/btnInsta.svg';
import { ReactComponent as Twitter } from 'assets/svg/btnTwitter.svg';
import { ReactComponent as SearchIcon } from 'assets/svg/search.svg';
import { ReactComponent as ClosedIcon } from 'assets/svg/deleteTag.svg';
import NftProductItem from 'components/nftProductItem';
import AuthorItem from 'components/authorItem';
import { PROFILE_OWNED, PROFILE_CREATE, PROFILE } from 'api/mock/profile';
import { Button, Filter, Follows, ProfileImage, WrapIcon } from 'styles';
import Tab from 'styles/tab';
import { useNavigate } from 'react-router-dom';

const ProfileView: React.FC<any> = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = React.useState(true);
  const [openSearch, setOpenSearch] = React.useState(false);
  const [tagList, setTagList] = React.useState(['3,000 ETH', 'Art']);
  const [categories, setCategories] = React.useState({ art: false, music: false, games: false, photography: false, domains: false });
  const [saleType, setSaleType] = React.useState({ timedAuction: false, userOnly: false, fixedPrice: false, openFor: false });
  const [activeTab, setActiveTab] = React.useState('Owned');
  const { name, profileImage, publicKey, followers, following, likes } = PROFILE;
  const shortening = (v = '') => v.slice(0, 4) + '....' + v.slice(v.length - 4, v.length);

  const handleEditProfile = () => {
    navigate('/profile/edit');
  };

  const handleFollow = () => {
    console.log('follow');
  };

  return (
    <Wrap>
      {isLogin ? (
        <StyledSetting>
          <WrapIcon w={40} h={40} onClick={() => navigate('/profile/create/step1')}>
            <PlusIcon />
          </WrapIcon>
          <WrapIcon w={40} h={40}>
            <SettingIcon />
          </WrapIcon>
        </StyledSetting>
      ) : (
        <StyledSearch open={openSearch}>
          {openSearch && <div>search</div>}
          {openSearch ? <ClosedIcon className="icon-search" onClick={() => setOpenSearch(false)} /> : <SearchIcon className="icon-search" onClick={() => setOpenSearch(true)} />}
        </StyledSearch>
      )}
      <Profile>
        <ProfileImage image={profileImage} border={false} unit={[`${isLogin && 'edit'}`]} />
        <h2>{isLogin ? shortening(publicKey) : name}</h2>
        <div className="wrap-list">
          <Button onClick={isLogin ? handleEditProfile : handleFollow} shadow={isLogin ? true : false} text={isLogin ? 'Edit Profile' : 'Follow'} color={isLogin ? 'primary' : 'blue'} />
          <Instagram onClick={() => console.log('instagram')} />
          <Twitter onClick={() => console.log('twitter')} />
        </div>
        <Follows follower={followers} following={following} like={likes} />
      </Profile>

      <Tab active={activeTab}>
        <Tab.Item badge={99} value="Owned" onClick={() => setActiveTab('Owned')} />
        <Tab.Item badge={4} value="Created" onClick={() => setActiveTab('Created')} />
        <Tab.Item value="Activity" onClick={() => setActiveTab('Activity')} />
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

      <ListContent>
        {activeTab === 'Owned' && (
          <OwnedCards>
            {PROFILE_OWNED.map((item, idx) => (
              <NftProductItem {...item} key={idx} />
            ))}
          </OwnedCards>
        )}
        {activeTab === 'Created' && (
          <CreatedCards>
            {PROFILE_CREATE.map((item, idx) => (
              <AuthorItem {...item} key={idx} />
            ))}
          </CreatedCards>
        )}
        {activeTab === 'Activity' && <div>Activity</div>}
      </ListContent>
    </Wrap>
  );
};

export default ProfileView;

const Wrap = styled.div`
  position: relative;
`;

const OwnedCards = styled.div`
  padding: 5px 15px 20px;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const CreatedCards = styled.div`
  padding: 20px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Profile = styled.div`
  padding-top: 13px;
  text-align: center;
  margin-bottom: 20px;

  & > h2 {
    margin-bottom: 14px;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #000000;
    text-decoration-line: underline;
  }

  .wrap-list {
    gap: 10px;
    justify-content: center;
    align-items: center;
    margin-bottom: 23px;

    & > svg {
      fill: #fff;
    }
  }
`;

const StyledSearch = styled.div<{ open?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 50px;
  z-index: 9999;
  background: ${p => (p.open ? '#fff' : 'transparent')};

  .icon-search {
    margin-right: 20px;
  }
`;

const StyledSetting = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
  position: fixed;
  top: 2px;
  right: 20px;
  height: 50px;
  z-index: 9999;
`;

const ListContent = styled.div``;
