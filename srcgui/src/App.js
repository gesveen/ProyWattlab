import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';

import { Provider } from 'react-redux';
import store from './store/store';
import BaseRouter from './routes';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <div>
            <BaseRouter />
          </div>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
