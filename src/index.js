import React from 'react';
import {Provider} from 'react-redux';
import createStore from './createStore';
import App from './app/App';

const store = createStore();

const Main = function(){
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  );
}

export default Main;
