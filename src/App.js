import React, { Component } from 'react';
import './App.css';
import './components/navbar/navbar.css'
import Navbar from './components/navbar/navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default App;
