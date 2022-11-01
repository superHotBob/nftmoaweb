import React, { useState, useEffect } from 'react';
import { Link, Outlet, NavLink, useLocation } from 'react-router-dom';
import styled from 'styles/theme';
import Header from './Header';
import Footer from './Footer';

import HomeSvg from 'assets/common/nav_home';
import SearchSvg from 'assets/common/nav_search';
import MoaSvg from 'assets/common/nav_moa';
import ExploreSvg from 'assets/common/nav_explore';
import ProfileSvg from 'assets/common/nav_profile';
import bg_round from 'assets/common/bg_round.png';
import useWindowDimensions from 'hook/useWindowDimensions';

export default () => {
  const { height } = useWindowDimensions();
  useEffect(() => {}, []);

  const me = {};
  const nav = [
    {
      name: 'home',
      link: '/',
      icon: HomeSvg
    },
    {
      name: 'search',
      link: '/search',
      icon: SearchSvg
    },
    {
      name: 'moa',
      link: '/moa',
      icon: MoaSvg
    },
    {
      name: 'explore',
      link: '/explore',
      icon: ExploreSvg
    },
    {
      name: 'profile',
      link: '/profile',
      icon: ProfileSvg
    }
  ];

  return (
    <Layout>
      <Container>
        <StyledOutlet minHeight={height - 50 - 89}>
          <Outlet />
        </StyledOutlet>
        <Footer />
      </Container>
      <Nav>
        {nav.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {({ isActive }) => <item.icon active={isActive} />}
          </NavLink>
        ))}
      </Nav>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  margin: 0 auto;
  max-width: 650px;
  min-height: 100vh;
  background-color: ${p => p.theme.COLORS.BG_BODY};
`;

const Container = styled.div`
  order: 1;
  width: 100%;
  padding: 50px 0 90px 0;
`;

const Nav = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 90px;
  background: #ffffff;
  border-top: 1px solid #cccccc;
  box-sizing: border-box;
  box-shadow: 0px -6px 10px rgba(0, 0, 0, 0.1);

  &.active:before {
    content: '';
    position: absolute;
    top: -13px;
    left: 0;
    width: 100%;
    height: 103px;
    background: url(${bg_round}) center -3px no-repeat;
  }

  a {
    position: relative;
    padding: 15px 0;
    width: 20%;
    text-align: center;
    z-index: 2;

    &.active {
      svg {
        path {
          stroke: linear-gradient(direction, #ff0000, #ff00d6, #001d84);
        }
      }
    }
  }
`;

const StyledOutlet = styled.div<{ minHeight?: number }>`
  min-height: ${p => p.minHeight}px;

  & > div {
    position: relative;
    min-height: ${p => p.minHeight}px;
  }
`;
