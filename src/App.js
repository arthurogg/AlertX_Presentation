/* App.js */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import About from './components/About/about';
import FeaturesSection from './components/FeatureSection/FeatureSection';
import Contributors from './components/contributors/contributors';
import Footer from './components/Footer/Footer';
import Temoignages from './components/temoignages/temoignages';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <About />
              <FeaturesSection />
              <Contributors />
            </>
          } />
          <Route path="/temoignages" element={<Temoignages />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;