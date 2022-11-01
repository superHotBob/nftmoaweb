import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import withLayout from 'layouts/EmptyLayout';
import styled from 'styles/theme';

import { incrementCount, decrementCount, resetCount } from 'store/reducers/System';

const HomeView: React.FC<RouteComponentProps> = ({ user, ...props }) => {
  const count = useSelector((store: IStore) => store.System.count);
  const dispatch = useDispatch();

  return (
    <Wrap>
      <p>
        <strong>{count}</strong>
      </p>
      <button type="button" onClick={() => dispatch(incrementCount())}>
        증가
      </button>
      <button type="button" onClick={() => dispatch(decrementCount())}>
        감소
      </button>
      <button type="button" onClick={() => dispatch(resetCount())}>
        리셋
      </button>
    </Wrap>
  );
};

export default withLayout(HomeView);

const Wrap = styled.div`
  position: relative;
  color: ${p => p.theme.COLORS.TEXT_PRIMARY};
  ${p => p.theme.TEXTS.BOARD_CONTENT};
`;
