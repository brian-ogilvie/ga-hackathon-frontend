import React, { Component } from 'react';
import './App.css';

import Sidebar from '../Sidebar/Sidebar'
import Dashoard from '../Dashboard/Dashboard'
import Header from '../Header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <Dashoard />
      </div>
    );
  }
}

export default App;
