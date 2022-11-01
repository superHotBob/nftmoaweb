import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import epics from './epics';
import reducers from './reducers';

export default function initStore(initialState?: any) {
  const epicMiddleware = createEpicMiddleware();
  const reduxMiddleware = applyMiddleware(epicMiddleware);

  let store = createStore(reducers, initialState, reduxMiddleware);

  if (process.env.NODE_ENV === 'development') {
    store = createStore(reducers, composeWithDevTools(applyMiddleware(epicMiddleware)));
  }
  epicMiddleware.run(epics);

  return store;
}
