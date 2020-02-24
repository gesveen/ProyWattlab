import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './componentes/Menu';
import Slides from './componentes/Slides';
import Footer from './componentes/Footer';

function App() {
  
  return (
    <div className="App">
      <Menu />
      <Slides />
      <Footer />
    </div>
  );
}

export default App;
