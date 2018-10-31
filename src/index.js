import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(<App />, document.querySelector('.container'));
