import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styles/theme';
import ScrollWrap from 'components/common/slideWrap';
import Section from 'components/common/section';
import RankItem from 'components/rankItem';
import ArticleItem from 'components/articleItem';
import CommunityItem from 'components/communityItem';
import CollectionItem from 'components/topSellerItem';
import BrowseFavoriteItem from 'components/browseFavoriteItem';
import QnaItem from 'components/qnaItem';
import { ReactComponent as SelectDownArrowIcon } from 'assets/svg/downArrow.svg';
import { Carousel, Select } from 'antd';

import { ReactComponent as SearchIcon } from 'assets/svg/search.svg';

import { incrementCount, decrementCount, resetCount } from 'store/reducers/System';
import { Banners, Rollings, Tab, ThumbTitle } from 'styles';
import { BANNERS, TEMP_ARTICLE, COLLECTION_ITEM, COMMUNITY, CTG, CTG_TAG, QNA_ITEM, BROWSERS, RANKS, TOP_SELLERS, TRENDINGS } from 'api/mock/home';
import AuthorItemComponent from 'components/authorItem';
import { AD_LIST } from 'api/mock/search';
import { BottomSheet } from 'react-spring-bottom-sheet';
import MainHeader from 'components/Header/MainHeader';
import SignInComponent from 'components/modal/signIn';
import SignUpComponent from 'components/modal/signUp';
import PasswordFoundComponent from 'components/modal/passwordFound';
import VerifiedCodeComponent from 'components/modal/passwordFound/verify';
import PasswordResetComponent from 'components/modal/passwordFound/reset';

import { logout } from 'store/reducers/System';

import APIService from 'api/index';
import Cookies from 'js-cookie';

const apiService = new APIService();

const HomeView: React.FC<any> = ({ user, ...props }) => {
  const navigate = useNavigate();
  const [topItemDate, setTopItemDate] = React.useState('day');
  const [topSellerDate, setTopSellerDate] = React.useState('day');
  const count = useSelector((store: IStore) => store.System.count);
  // const [visibleSignInput, setVisibleSignInput] = React.useState(false);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = React.useState('ART');
  const [modalPage, setModalPage] = React.useState('SIGNIN'); // 'SIGNIN', 'PWFOUND', 'PWCODE', 'PWRESET'
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [visibleSignIn, setVisibleSignIn] = React.useState(false);
  const [articleList, setArticleList] = React.useState([]);
  const [community, setCommunity] = React.useState([]);
  const [faq, setFaq] = React.useState([]);
  const { Option } = Select;

  const tradingSlider = React.useRef(null);

  const handleChangeTopItem = (value: string) => {
    setTopItemDate(value);
  };

  const handleChangeSeller = (value: string) => {
    setTopSellerDate(value);
  };

  const NowModalPage = React.useMemo(() => {
    if (modalPage === 'SIGN') return SignInComponent;
    if (modalPage === 'FOUNDPW') return PasswordFoundComponent;
    return SignInComponent;
  }, [modalPage]);

  const getData = async () => {
    const articleData = await apiService.getArticleList({ page: 1, size: 10 });

    setArticleList(articleData.list);
  };

  const getCommunity = async () => {
    const communityData = await apiService.getCommunityList({ uid: 17, page: 1 });

    setCommunity(communityData.list);
  };

  const getFaqCtg = async () => {
    const faqData = await apiService.getFaqCtg();

    setFaq(faqData.list);
  };

  const handleSearch = (e: any) => {
    let searchWord;
    if (e.keyCode && e.keyCode === 13) {
      searchWord = e.target.value;

      navigate(`/search/result?name=${searchWord}`);
    } else if (!e.keyCode) {
      const getValue = (document.getElementById('nft-search') as HTMLInputElement).value;
      searchWord = getValue;
      navigate(`/search/result?name=${searchWord}`);
    }
  };

  const handleTradingTab = (tab: string) => {
    setActiveTab(tab);
    if (tradingSlider.current) {
      (tradingSlider.current as any).goTo(0);
    }
  };

  const handleLogin = () => {
    setModalPage('LOGIN');
    setVisibleSignIn(true);
  };

  const handleLogout = () => {
    Cookies.remove('refreshToken');
    Cookies.remove('accessToken');
    Cookies.remove('expired');
    dispatch(logout());
  };

  const handleSignUp = () => {
    setModalPage('SIGNUP');
    setVisibleSignIn(true);
  };

  const handleLoginComplete = () => {
    setVisibleSignIn(false);
  };

  React.useEffect(() => {
    getData();
    getFaqCtg();
    getCommunity();
  }, []);

  return (
    <Wrap>
      <MainHeader callLogin={handleLogin} callSign={handleSignUp} callLogout={handleLogout} />
      <SearchBig>
        <div className="wrap">
          <input placeholder="Search anyihing NFT items _" id="nft-search" onKeyDown={handleSearch} />
          <SearchIcon className="icon_search" onClick={handleSearch} />
        </div>
        <p>
          Here’s the NFT Items, collection name <strong>nftmoa.</strong>
        </p>
      </SearchBig>

      <Rollings list={BANNERS} />

      <ScrollWrap className={'browse-nft'}>
        {BROWSERS.map((item, idx) => (
          <BrowseFavoriteItem key={idx} {...item} setIsFavorite={setIsFavorite} />
        ))}
      </ScrollWrap>

      <Section
        round
        moreLink={'/rank/item'}
        className="wrap-top-item"
        title={
          <div>
            <span>Top Items in</span>
            <Select suffixIcon={<SelectDownArrowIcon />} bordered={false} defaultValue={topItemDate} onChange={handleChangeTopItem}>
              <Option value="day">1 Day Ago</Option>
              <Option value="week">Last Week</Option>
              <Option value="month">Last Month</Option>
            </Select>
          </div>
        }
      >
        {RANKS[topItemDate].map((item: any, index: number) => {
          if (index > 4) return false;
          return <RankItem {...item} key={index} />;
        })}
      </Section>

      <ScrollWrap title="Browse by Category" className={'browse-ctg'}>
        {CTG.map((item, index) => (
          <ThumbTitle key={index} {...item} />
        ))}
      </ScrollWrap>

      <ScrollWrap title="Today’s Article" className={'article'}>
        {articleList.length > 0 && articleList.map((item, index) => <ArticleItem {...item} key={index} />)}
      </ScrollWrap>

      <Banners list={AD_LIST} />

      <Section
        title={
          <div className="wrap-list">
            Community
            <p style={{ marginLeft: 6, fontSize: 10, fontWeight: 800, color: 'rgba(0, 0, 0, 0.5)' }}>
              <span style={{ color: '#C4C4C4' }}>by</span> nftmoa.
            </p>
          </div>
        }
        style={{ backgroundColor: '#F5F5F5' }}
        round
        underMoreLink="/community"
      >
        {community.slice(0, 3).map((item, index) => (
          <CommunityItem {...item} key={index} />
        ))}
      </Section>

      <ScrollWrap
        className={'wrap-top-seller'}
        moreLink={'/rank/seller'}
        title={
          <div>
            <span>Top Sellers in</span>
            <Select suffixIcon={<SelectDownArrowIcon />} bordered={false} defaultValue={topSellerDate} onChange={handleChangeSeller}>
              <Option value="day">1 Day Ago</Option>
              <Option value="week">Last Week</Option>
              <Option value="month">Last Month</Option>
            </Select>
          </div>
        }
      >
        {TOP_SELLERS[topSellerDate].map((item: any, index: number) => {
          if (index > 11) return false;
          return <CollectionItem {...item} key={index} />;
        })}
      </ScrollWrap>

      <Section title="Trending in Categories" className={'ctgTrending'} style={{ backgroundColor: '#F5F5F5' }}>
        <div style={{ marginBottom: 26 }}>
          <ScrollWrap padding={false}>
            <Tab style={{ height: 40 }} active={activeTab} padding={false}>
              {CTG_TAG.map((item, index) => (
                <Tab.Item key={index} value={item} circle onClick={() => handleTradingTab(item)} />
              ))}
            </Tab>
          </ScrollWrap>
        </div>
        <Carousel ref={tradingSlider}>
          {TRENDINGS[`${activeTab.toLocaleLowerCase()}`].map((item: any, index: number) => (
            <AuthorItemComponent {...item} key={index} />
          ))}
        </Carousel>
      </Section>

      <ScrollWrap title="MOA A to Z" className={'qna'}>
        {faq.map((item, index) => (
          <QnaItem {...item} key={index} />
        ))}
        {/* {QNA_ITEM.map((item, index) => (
          <QnaItem {...item} key={index} />
        ))} */}
      </ScrollWrap>

      <BottomSheet open={visibleSignIn} onDismiss={() => setVisibleSignIn(false)} snapPoints={({ minHeight }) => minHeight}>
        {/* modalPage 이후 useStore로 관리 고려*/}
        {/* <NowModalPage /> */}
        {modalPage === 'LOGIN' && <SignInComponent modalPage={setModalPage} complete={handleLoginComplete} />}
        {modalPage === 'SIGNUP' && <SignUpComponent modalPage={setModalPage} />}
        {modalPage === 'PWFOUND' && <PasswordFoundComponent modalPage={setModalPage} />}
        {modalPage === 'PWCODE' && <VerifiedCodeComponent modalPage={setModalPage} />}
        {modalPage === 'PWRESET' && <PasswordResetComponent modalPage={setModalPage} />}
      </BottomSheet>
    </Wrap>
  );
};

export default HomeView;

const Wrap = styled.div`
  position: relative;
  padding-top: 12px;
  color: ${p => p.theme.COLORS.TEXT_PRIMARY};
  ${p => p.theme.TEXTS.BOARD_CONTENT};

  .browse-ctg {
    background: #f5f5f5;

    a {
      font-weight: 800;
      font-size: 16px;
      letter-spacing: -1px;
      text-transform: uppercase;
      color: #ffffff;
    }
  }

  .wrap-top-seller {
    & > div {
      flex-direction: column;
      height: 222px;
      flex-wrap: wrap;
    }
  }

  .wrap-top-item,
  .wrap-top-seller {
    .ant-select:not(.ant-select-customize-input) .ant-select-selector {
      border: none;
    }
    .ant-select-selection-item {
      color: #0085ff;
      text-decoration: underline;
      font-weight: 800;
      font-size: 16px;
      padding-right: 24px;
    }
    .ant-select-arrow {
      transform-origin: 50% 37%;
      top: 43%;
      path {
        fill: none;
      }
    }
    .ant-select-open {
      .ant-select-arrow {
        transform: rotate(-180deg);
      }
    }
  }

  .ctgTrending {
    padding: 24px 20px 60px;
    .item-list-tag {
      & + span {
        margin-left: 8px;
      }
    }

    & .ant-carousel {
      & .slick-dots-bottom {
        bottom: -23px;

        & > li {
          width: 8px !important;
          height: 8px !important;
          border-radius: 50%;
          overflow: hidden;

          &.slick-active {
            width: 26px !important;
            border-radius: 70px;
          }

          & > button {
            width: 100%;
            height: 100%;
            background: #c4c4c4 !important;
            opacity: 1 !important;
          }
        }
      }
    }
  }
`;

const SearchBig = styled.div`
  margin-bottom: 25px;
  padding: 0 20px;

  .wrap {
    position: relative;
    padding: 12px;
    background: rgb(255, 0, 0);
    background: linear-gradient(90deg, rgba(255, 0, 0, 1) 0%, rgba(255, 0, 214, 1) 51%, rgba(0, 29, 132, 1) 100%);
  }

  input {
    display: block;
    padding: 12px;
    width: 100%;
    height: 52px;
    font-size: 16px;
    line-height: 26px;
    border: 0 none;
    background: #fff;

    &::placeholder {
      color: rgba(0, 0, 0, 0.25);
    }
  }

  .icon_search {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  p {
    margin-top: 5px;
    padding: 0 15px;
    font-size: 11px;
    line-height: 26px;

    color: rgba(0, 0, 0, 0.5);

    strong {
      color: #000;
      font-weight: bold;
    }
  }
`;
