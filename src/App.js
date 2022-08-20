import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar'
import About from './components/landingpage/aboutus.js'
import Footer from './components/footer/footer'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
