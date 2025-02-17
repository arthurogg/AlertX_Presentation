/* App.js */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import FeaturesSection from './components/FeatureSection/FeatureSection';
import Footer from './components/Footer/Footer';
import Contributors from './components/contributors/contributors';
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
              <FeaturesSection />
            </>
          } />
          <Route path="/contributors" element={<Contributors />} />
          <Route path="/temoignages" element={<Temoignages />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;