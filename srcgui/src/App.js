import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';

import InformacionServicios from './componentes/InformacionServicios';
import MenuInicio from './container/MenuInicio';
import Login from './componentes/Login';
import PQRS from './componentes/PQRS';
import ConsultaFactura from './componentes/ConsultaFactura';

function App() {
    return (
      <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={MenuInicio} />
          <Route exact path="/ConsultaFactura" component={ConsultaFactura} />
          <Route exact path="/InformacionServicios" component={InformacionServicios} />
          <Route exact path="/PQRS" component={PQRS} />
          <Route exact path="/Login" component={Login} />
          
        </Switch>
      </div>
      </BrowserRouter>
    );
}
  
export default App;
