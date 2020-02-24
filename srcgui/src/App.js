import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

import MenuInicio from './componentes/MenuInicio.js';
import Footer from './componentes/Footer';

function App(){
    return (
      <div className="App">
        <MenuInicio/>
        <Footer/>            
      </div>
    );
}
  
export default App;
