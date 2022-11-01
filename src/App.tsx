import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';

import { theme, themeTypes } from 'styles/theme';

import DefaultLayout from 'layouts/DefaultLayout';
import ScrollTop from 'utils/scrollTop';

import Home from 'views/Home';
import Search from 'views/search';
import Moa from 'views/moa';
import Explore from 'views/explore';
import Profile from 'views/profile';
import ProfileEdit from 'views/profile/edit';
import { ProfileStepOne, ProfileStepTwo } from 'views/profile/create';
import ArticleDetail from 'views/article/detail';
import QnaDetail from 'views/qna/detail';
import SearchResult from 'views/search/result';
import Community from 'views/community';
import CommunityWrite from 'views/community/write';
import CommunityDetail from 'views/community/detail';
import CommunityChannelEdit from 'views/community/channel/edit';
import CommunityInvite from 'views/community/invite';
import { CommunityGroupList } from 'views/community/group';
import Wallet from 'views/wallet';
import { WalletTokenImport, WalletTokenBuy, WalletTokenSwap } from 'views/wallet/token';
import { WalletCreateAgree, WalletCreatePassword } from 'views/wallet/create';
import { WalletCardList, WalletCardRegister } from 'views/wallet/card';
import { WalletTokenOrder, WalletTokenOrderSuccess } from 'views/wallet/token/order';
import { SignUp, SignIn, PasswordFindStep1, PasswordFindStep2, PasswordReset } from 'views/auth';
import { RankItem, RankSeller } from 'views/rank';
import { MessageList, MessageRoom } from 'views/message';

import cookie from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from 'store/reducers/System';
import APIService from 'api';

const apiService = new APIService();

const RouteSwitch: React.FC<RouteSwitch> = ({ isLoggedIn }) => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/result" element={<SearchResult />} />
        <Route path="/moa" element={<Moa />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<ProfileEdit />} />
        <Route path="/profile/create/step1" element={<ProfileStepOne />} />
        <Route path="/profile/create/step2" element={<ProfileStepTwo />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/wallet/create/agree" element={<WalletCreateAgree />} />
        <Route path="/wallet/create/password" element={<WalletCreatePassword />} />
        <Route path="/wallet/token/buy" element={<WalletTokenBuy />} />
        <Route path="/wallet/token/swap" element={<WalletTokenSwap />} />
        <Route path="/wallet/token/import" element={<WalletTokenImport />} />
        <Route path="/wallet/token/order" element={<WalletTokenOrder />} />
        <Route path="/wallet/token/order/success" element={<WalletTokenOrderSuccess />} />
        <Route path="/wallet/card/list" element={<WalletCardList />} />
        <Route path="/wallet/register/card" element={<WalletCardRegister />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/write" element={<CommunityWrite />} />
        <Route path="/community/channel/edit/:gid" element={<CommunityChannelEdit />} />
        <Route path="/community/:uid" element={<CommunityDetail />} />
        <Route path="/community/group/:gid" element={<CommunityGroupList />} />
        <Route path="/community/invite" element={<CommunityInvite />} />
        <Route path="/article">
          <Route path=":id" element={<ArticleDetail />} />
        </Route>
        <Route path="/qna" element={<QnaDetail />} />
        <Route path="/rank/item" element={<RankItem />} />
        <Route path="/rank/seller" element={<RankSeller />} />
        <Route path="/message" element={<MessageList />} />
        <Route path="/message/direct/:uname" element={<MessageRoom />} />
        <Route path="/message/community/:uname" element={<MessageRoom />} />
        {!isLoggedIn && (
          <>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/password/find/step1" element={<PasswordFindStep1 />} />
            <Route path="/password/find/step2" element={<PasswordFindStep2 />} />
            <Route path="/password/reset" element={<PasswordReset />} />
          </>
        )}
        <Route path="*" element={<Navigate to={`/`} />} />
      </Route>
    </Routes>
  );
};

const Root = () => {
  const { isLoggedIn } = useSelector((store: IStore) => store.System);
  const dispatch = useDispatch();

  const getRefreshToken = async () => {
    const accessToken = cookie.get('accessToken');
    const refreshToken = cookie.get('refreshToken');
    const loginCheck = await apiService.refreshToken({ accessToken, refreshToken });

    if (loginCheck?.jwtToken) {
      cookie.set('accessToken', loginCheck?.jwtToken.accessToken);
      cookie.set('refreshToken', loginCheck?.jwtToken.refreshToken);
      cookie.set('expired', `${new Date().getTime()}`);
    }
  };

  if (cookie.get('accessToken')) {
    const expired = cookie.get('expired');
    const nowTime = new Date().getTime();

    const hourChk = nowTime - Number(expired);

    if (3600000 < hourChk) {
      cookie.remove('accessToken');
      cookie.remove('refreshToken');
      cookie.remove('expired');
      dispatch(logout());
      window.location.href = window.location.origin;
    } else {
      getRefreshToken();
      setInterval(() => {
        getRefreshToken();
      }, 3540000);
    }

    dispatch(login());
  }

  const themeValue = 'light';

  document.body.id = themeValue;

  // if (error) return <div>{error.message}</div>;
  // if (clientLoading) return <div>Root Loading</div>;

  // console.log(theme[themeValue as themeTypes] as any, "theme[themeValue as themeTypes] as any");

  // const CurrentLayout = DefaultLayout;

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme[themeValue as themeTypes] as any}>
        <ScrollTop />
        <RouteSwitch isLoggedIn={isLoggedIn} />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Root;
