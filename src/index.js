import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/PostsIndex.jsx';
import PostNew from './components/PostNew.jsx';
import PostShow from './components/PostShow.jsx';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
         <Switch>
            <Route path="/posts/new" component={PostNew} />\
            <Route path="/posts/:id" component={PostShow} />
            <Route path="/" component={PostsIndex} />
         </Switch>
          
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
