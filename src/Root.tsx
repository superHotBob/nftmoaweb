import React from 'react';
import { Global } from '@emotion/react';
import { Provider } from 'react-redux';
import { Reset } from 'styles';
import configureStore from 'store';
import App from 'App';

import 'antd/dist/antd.css';

const Root: React.FC = () => {
  const store = configureStore();
  return (
    <React.StrictMode>
      <Global styles={Reset} />
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};

export default Root;
