import React, { Component } from 'react';
import './App.css';

import Sidebar from '../Sidebar/Sidebar'
import Dashoard from '../Dashboard/Dashboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Dashoard />
      </div>
    );
  }
}

export default App;
