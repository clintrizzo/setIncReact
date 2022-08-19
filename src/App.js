import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default App;
