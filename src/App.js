import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/navbar.js'
import LandingPage from './components/landingpage/aboutus.js';
import Merchandise from './components/merchandise/merchandise.js';
import Footer from './components/footer/footer'


const App = () => (
  <div>
  <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/merchandise" element={<Merchandise />} />
    </Routes>
  <Footer />
    </div>
)

export default App;
