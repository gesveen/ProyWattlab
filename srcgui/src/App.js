import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';

import Menu from './componentes/Menu';
import InformacionServicios from './componentes/InformacionServicios';
import MenuInicio from './componentes/MenuInicio';
import Login from './componentes/Login';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Menu/>
        <Switch>
          <Route exact path="/home" component={MenuInicio} />
          <Route exact path="/InformacionServicios" component={InformacionServicios} />
          <Route exact path="/Login" component={Login} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
  
export default App;
