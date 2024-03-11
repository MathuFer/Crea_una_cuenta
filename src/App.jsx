import React from 'react';
import Registro from './components/Registro';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';

const App = () => {
  return (
    <div className="App">
      <div className='Container'>
        <Registro />
      </div>
    </div>
  );
};

export default App;
