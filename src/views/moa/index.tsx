import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styles/theme';
import temp01 from 'assets/temp/temp_content.png';

import { Carousel } from 'antd';

import { incrementCount, decrementCount, resetCount } from 'store/reducers/System';

const HomeView: React.FC<any> = ({ user, ...props }) => {
  return (
    <Wrap>
      <img src={temp01} />
    </Wrap>
  );
};

export default HomeView;

const Wrap = styled.div`
  position: relative;
`;
