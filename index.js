import React from 'react';
import ReactDOM from 'react-dom';
require('./fetch-setup');

import App from './components/App';
import Pet from './components/Pet';

ReactDOM.render(
  <App />,
  document.getElementById('main')
);

// require('./test/index-test.js'); // Leave this in!
