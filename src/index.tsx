import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import { hydrate, render } from 'react-dom';

import Root from './Root';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root') as HTMLDivElement;

if (rootElement.hasChildNodes()) {
  hydrate(<Root />, rootElement);
} else {
  render(<Root />, rootElement);
}

// ReactDOM.render(
//   <React.StrictMode>
//     <Root />
//   </React.StrictMode>,
//   rootElement
// );

serviceWorker.unregister();
// serviceWorker.register();
