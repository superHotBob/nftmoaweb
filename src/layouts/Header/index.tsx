import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styles/theme';

import MainHeader from './MainHeader';
import SearchHeader from './SearchHeader';
import SubHeader from './SubHeader';

export default () => {
  useEffect(() => {}, []);
  const location = useLocation();
  const oneDepth = location.pathname.split('/')[1];

  return (
    <>
      {oneDepth === '' && <MainHeader />}
      {oneDepth === 'search' && <SearchHeader />}
      {oneDepth !== 'search' && oneDepth !== '' && <SubHeader />}
    </>
  );
};
