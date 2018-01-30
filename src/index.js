import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import Pet from './components/Pet';
import './fetch-setup';

ReactDOM.render(
  <App />,
  document.getElementById('global')
);

// ReactDOM.render(
//   <Pet type="dog" gender="male" age={4} weight={10} name="Trident" id="asdf" />,
//   document.getElementById('global')
// );
