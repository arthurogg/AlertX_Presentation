import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleFeaturesScroll = (e) => {
    e.preventDefault();
    const featuresSection = document.querySelector('.features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openDocumentation = () => {
    window.open('https://service-de-notication-documentation.vercel.app/', '_blank');
  };
  const StartDocumentation = () => {
    window.open('https://service-de-notication-documentation.vercel.app/AboutRacine/Getting_Start/quickStart', '_blank');
  };


  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <h1 className="logo">
            <span className="logo-main">Alert</span>
            <span className="logo-accent">X</span>
          </h1>
        </div>
        
        <nav className={`navigation ${isMenuOpen ? 'menu-open' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" onClick={toggleMenu}>Accueil</Link></li>
            <li><a href="#features" onClick={(e) => { handleFeaturesScroll(e); toggleMenu(); }}>Fonctionnalités</a></li>
            <li><Link to="/temoignages" onClick={toggleMenu}>Témoignages</Link></li>        
          </ul>
        </nav>
        
        <div className="auth-buttons">
          <button 
            className="btn btn-login"
            onClick={StartDocumentation}
          >
            <span className="btn-icon">🚀</span>
            Commencer
          </button>
          <button 
            className="btn btn-signup"
            onClick={openDocumentation}
          >  
            <span className="btn-icon">📡</span>
            Voir la documentation
          </button>
        </div>
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
