import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

// ActionsTypes
export const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT'
};

// Actions
export const incrementCount = createAction(actionTypes.INCREMENT);
export const decrementCount = createAction(actionTypes.DECREMENT);
export const resetCount = createAction(actionTypes.RESET);
export const login = createAction(actionTypes.LOGIN);
export const logout = createAction(actionTypes.LOGOUT);

// InitialState
const initialState = {
  routing: 'dkdkdkdkdk',
  count: 0,
  isLoggedIn: false
};

// Reducers
export const reducer = handleActions(
  {
    [actionTypes.INCREMENT]: (state, action) =>
      produce(state, draftState => {
        draftState.count += 1;
      }),
    [actionTypes.DECREMENT]: (state, action) =>
      produce(state, draftState => {
        draftState.count -= 1;
      }),
    [actionTypes.RESET]: (state, action) =>
      produce(state, draftState => {
        draftState.count = 0;
      }),
    [actionTypes.LOGIN]: (state, action) =>
      produce(state, draftState => {
        draftState.isLoggedIn = true;
      }),
    [actionTypes.LOGOUT]: (state, action) =>
      produce(state, draftState => {
        draftState.isLoggedIn = false;
      })
  },
  initialState
);
