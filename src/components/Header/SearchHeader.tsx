import React, { useEffect } from 'react';
import { Link, useSearchParams, useLocation, useNavigate, useParams } from 'react-router-dom';
import qs from 'query-string';
import styled from 'styles/theme';

import { ReactComponent as LogoSvg } from 'assets/svg/logo.svg';
import { ReactComponent as BackArrowSvg } from 'assets/svg/backArrow.svg';
import { ReactComponent as SearchSvg } from 'assets/svg/search.svg';
import { ReactComponent as DeleteCircle } from 'assets/svg/deleteCircle.svg';

export default () => {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { search } = useLocation();

  const { name } = qs.parse(search);

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

  const handleKeywordDelete = (e: any) => {
    const nftmoaSearch = document.getElementById('nft-search') as HTMLInputElement;
    nftmoaSearch.value = '';
    navigate(`/search`);
  };

  useEffect(() => {
    const nftmoaSearch = document.getElementById('nft-search') as HTMLInputElement;

    if (name) {
      nftmoaSearch.value = name ? (name as string) : '';
    }
  }, []);

  return (
    <SearchHeader>
      <BackButton>
        {name && name.length > 0 && <LogoSvg />}
        {!name && <BackArrowSvg />}
      </BackButton>
      <InputArea>
        <input id="nft-search" type={'search'} placeholder={'Search anyihing NFT items _'} onKeyDown={handleSearch} />
      </InputArea>
      <SearchButton>
        {name && name.length > 0 && <DeleteCircle onClick={handleKeywordDelete} />}
        {!name && <SearchSvg onClick={handleSearch} />}
      </SearchButton>
    </SearchHeader>
  );
};

const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  position: fixed;
  top: 0;
  left: 0;
  order: 0;
  padding: 0 10px 12px;
  width: 100%;
  height: 63px;
  background: #fff;
  z-index: 10;

  &:after {
    content: '';
    position: absolute;
    top: 51px;
    left: 0;
    width: 100%;
    height: 12px;
    background-color: #ff0000;
    background-image: linear-gradient(90deg, #ff0000 0%, #ff0089 50%, #011c84 100%);
  }
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 30px;
  margin-right: 5px;
  padding: 0;
  width: 30px;
  height: 30px;

  cursor: pointer;
`;

const InputArea = styled.div`
  width: 100%;
  input {
    width: 100%;
    border: 0 none;
    font-size: 16px;

    &::placeholder {
      color: #bfbfbf;
    }
  }
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 24px;
  padding: 0;
  width: 24px;
  height: 24px;

  cursor: pointer;
`;
