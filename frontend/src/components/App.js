import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import Dashboard from './todo/DashBoard';

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Header />
          <Dashboard />
        </div>
      </Provider>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
