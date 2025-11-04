import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Usa matchMedia para evitar reflows forçados
    const mqMobile = window.matchMedia('(max-width: 768px)');
    
    const checkMobile = () => {
      const isMobileValue = mqMobile.matches;
      setIsMobile(isMobileValue);
      if (!isMobileValue) {
        setIsMenuOpen(false); // Fecha menu se redimensionar para desktop
      }
    };
    
    // Scroll handler com requestAnimationFrame para evitar reflows
    let scrollTimeout;
    const handleScroll = () => {
      if (scrollTimeout) {
        cancelAnimationFrame(scrollTimeout);
      }
      scrollTimeout = requestAnimationFrame(() => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 50);
      });
    };
    
    checkMobile(); // Inicial
    mqMobile.addEventListener('change', checkMobile);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      mqMobile.removeEventListener('change', checkMobile);
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        cancelAnimationFrame(scrollTimeout);
      }
    };
  }, []);

  // Previne scroll quando menu está aberto no mobile
  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, isMobile]);

  const handleWhatsAppClick = () => {
    const phoneNumber = '5511999999999'; // Substitua pelo número real
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os treinos personalizados.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleNavClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen && isMobile ? 'menu-open' : ''}`}>
        <div className="container">
          <div className="header-content">
            {/* Logo - escondida quando menu está aberto no mobile */}
            <div className={`logo ${isMenuOpen && isMobile ? 'hidden-on-menu-open' : ''}`}>
              <img 
                src="/logo.png" 
                alt="Personal Trainer Logo"
                className="logo-image"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="nav nav-desktop">
              <a href="#metodo" className="nav-link">MÉTODO</a>
              <a href="#resultados" className="nav-link">RESULTADOS</a>
              <a href="#consultoria" className="nav-link">CONSULTORIA</a>
              <a href="#comunidade" className="nav-link">COMUNIDADE</a>
            </nav>

            {/* Desktop CTA Button */}
            <button 
              className="btn btn-secondary btn-sm btn-desktop"
              onClick={handleWhatsAppClick}
            >
              COMEÇAR AGORA
            </button>

            {/* Mobile Hamburger Button */}
            <button 
              className={`hamburger ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobile && (
        <>
          <div 
            className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-hidden="true"
          ></div>
          
          {/* Mobile Sidebar Drawer */}
          <aside className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
            <div className="drawer-header">
              <div className="logo drawer-logo">
                <img 
                  src="/logo.png" 
                  alt="Personal Trainer Logo"
                  className="logo-image"
                />
              </div>
              <button 
                className="drawer-close"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                ×
              </button>
            </div>
            
            <nav className="drawer-nav">
              <a href="#metodo" className="drawer-nav-link" onClick={handleNavClick}>MÉTODO</a>
              <a href="#resultados" className="drawer-nav-link" onClick={handleNavClick}>RESULTADOS</a>
              <a href="#consultoria" className="drawer-nav-link" onClick={handleNavClick}>CONSULTORIA</a>
              <a href="#comunidade" className="drawer-nav-link" onClick={handleNavClick}>COMUNIDADE</a>
            </nav>

            <div className="drawer-cta">
              <button 
                className="btn btn-primary btn-lg drawer-btn"
                onClick={() => {
                  handleWhatsAppClick();
                  handleNavClick();
                }}
              >
                COMEÇAR AGORA
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </aside>
        </>
      )}
    </>
  );
};

export default Header;
