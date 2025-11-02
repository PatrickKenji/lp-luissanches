import React from 'react';
import './Header.css';

const Header = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5511999999999'; // Substitua pelo número real
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os treinos personalizados.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <img 
              src="/logo.png" 
              alt="Personal Trainer Logo"
              className="logo-image"
            />
          </div>

          {/* Navigation */}
          <nav className="nav">
            <a href="#programs" className="nav-link">PROGRAMS</a>
            <a href="#testimonials" className="nav-link">TESTIMONIALS</a>
            <a href="#contact" className="nav-link">CONTACT</a>
          </nav>

          {/* CTA Button */}
          <button 
            className="btn btn-secondary btn-sm"
            onClick={handleWhatsAppClick}
          >
            SIGN IN FOR MEMBERS
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;


