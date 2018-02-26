import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line import/no-extraneous-dependencies
import App from './containers/App';
import './styles/appStyles.scss';

const store = {};

const render = (Component, storeInstance) => {
  ReactDOM.render(
    <AppContainer>
      <Component store={storeInstance} />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App, store);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(require('./containers/App').default, store); // eslint-disable-line global-require
  });
}
