import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Tron MX';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();