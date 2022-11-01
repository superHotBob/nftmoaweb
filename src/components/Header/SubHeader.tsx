import React, { useEffect } from 'react';
import { Link, useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import qs from 'query-string';
import styled from 'styles/theme';

import { ReactComponent as LogoSvg } from 'assets/svg/logo.svg';
import { ReactComponent as BackArrowSvg } from 'assets/svg/backArrow.svg';
import { ReactComponent as SearchSvg } from 'assets/svg/search.svg';
import { ReactComponent as DeleteCircle } from 'assets/svg/deleteCircle.svg';

export default ({ title, isBack = true, prefix, suffix }: any) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname, search } = useLocation();

  const qsParse = qs.parse(search);

  const oneDepth = pathname.split('/')[1];
  const twoDepth = pathname.split('/')[2];

  const titleObj: any = {
    explore: 'Explore',
    profile: 'Profile',
    editProfile: 'Edit Profile',
    community: 'Community',
    article: 'Article',
    qna: 'MOA A to Z',
    create: 'Create',
    wallet: 'MOA Wallet',
    token: 'MOA Wallet',
    register: 'Card Regist',
    item: 'Rankings',
    seller: 'Rankings'
  };

  useEffect(() => {
    const nftmoaSearch = document.getElementById('nftmoa-search') as HTMLInputElement;

    if (qsParse.search) {
      nftmoaSearch.value = qsParse.search as string;
    }

    // setSearchParams({ ddd: 'asdsad' });
  }, []);

  return (
    <SubHeader>
      {isBack && (
        <BackButton onClick={() => navigate(-1)}>
          <BackArrowSvg />
        </BackButton>
      )}
      {prefix && prefix}
      <TitleArea>
        {title && title}
        {/* {!title && !twoDepth ? titleObj[oneDepth] : titleObj[twoDepth]} */}
      </TitleArea>
      {suffix && suffix}
      {/* <SearchButton>
        {search.length > 0 && <DeleteCircle />}
        {search.length === 0 && <SearchSvg />}
      </SearchButton> */}
    </SubHeader>
  );
};

const SubHeader = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  order: 0;
  padding: 6px 10px;
  width: 100%;
  height: 50px;
  background: #fff;
  z-index: 10;
`;

const BackButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 30px;
  padding: 0;
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: 1;
`;

const TitleArea = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 18px;
  line-height: 32px;
  color: #000000;
  text-align: center;
`;
