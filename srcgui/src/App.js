import React, { Component } from 'react';
import 'antd/dist/antd.css';

import BaseRouter from './routes'; 

import { connect } from 'react-redux';
import * as actions from './store/actions/auth';

class App extends Component {
  render() {
    return (
      <div>
        <BaseRouter/> 
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUP: () => dispatch(actions.authCheckState())
  }
}

export default App;
