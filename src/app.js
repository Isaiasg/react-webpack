import index from './index.html';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import ButtonComponent from './components/ButtonComponent.jsx';

const store = configureStore();


const App = () => (
    <ButtonComponent />
);

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
  ,  document.getElementById('app')
);