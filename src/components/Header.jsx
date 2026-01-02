import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasHardwareAccel, setHasHardwareAccel] = useState(true);

  useEffect(() => {
    // Detecta aceleração de hardware
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    const hasGPU = !!(gl && gl.getExtension('WEBGL_lose_context'));
    setHasHardwareAccel(hasGPU);
    
    // Usa matchMedia para evitar reflows forçados
    const mqMobile = window.matchMedia('(max-width: 768px)');
    
    const checkMobile = () => {
      const isMobileValue = mqMobile.matches;
      setIsMobile(isMobileValue);
      if (!isMobileValue) {
        setIsMenuOpen(false); // Fecha menu se redimensionar para desktop
      }
    };
    
    // Scroll handler otimizado com throttling para reduzir lag
    let scrollTimeout;
    let lastScrollY = 0;
    const handleScroll = () => {
      if (scrollTimeout) {
        cancelAnimationFrame(scrollTimeout);
      }
      scrollTimeout = requestAnimationFrame(() => {
        const scrollPosition = window.scrollY;
        // Só atualiza se a mudança for significativa (reduz re-renders)
        if (Math.abs(scrollPosition - lastScrollY) > 5) {
          setIsScrolled(scrollPosition > 50);
          lastScrollY = scrollPosition;
        }
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

  // Previne scroll quando menu está aberto no mobile - otimizado para evitar reflow
  useEffect(() => {
    if (!isMobile) return;
    
    // Usa double RAF para evitar reflow forçado
    let rafId;
    const updateOverflow = () => {
      if (isMenuOpen) {
        // Salva a posição do scroll antes de bloquear (em um frame separado)
        rafId = requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          // Aplica mudanças em outro frame para evitar reflow
          rafId = requestAnimationFrame(() => {
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            document.body.style.overflow = 'hidden';
          });
        });
      } else {
        // Restaura a posição do scroll
        const savedScrollY = document.body.style.top;
        rafId = requestAnimationFrame(() => {
          document.body.style.position = '';
          document.body.style.top = '';
          document.body.style.width = '';
          document.body.style.overflow = '';
          if (savedScrollY) {
            // Usa setTimeout para evitar reflow ao restaurar scroll
            setTimeout(() => {
              window.scrollTo(0, parseInt(savedScrollY || '0') * -1);
            }, 0);
          }
        });
      }
    };
    
    updateOverflow();
    
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      // Cleanup
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, isMobile]);

  const handleWhatsAppClick = () => {
    const phoneNumber = '5544999044206';
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
      <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen && isMobile ? 'menu-open' : ''} ${!hasHardwareAccel ? 'no-gpu' : ''}`}>
        <div className="container">
          <div className="header-content">
            {/* Logo - escondida quando menu está aberto no mobile */}
            <div className={`logo ${isMenuOpen && isMobile ? 'hidden-on-menu-open' : ''}`}>
              <img 
                src="/logo.webp" 
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
            className={`menu-overlay ${isMenuOpen ? 'active' : ''} ${!hasHardwareAccel ? 'no-gpu' : ''}`}
            onClick={toggleMenu}
            aria-hidden="true"
          ></div>
          
          {/* Mobile Sidebar Drawer */}
          <aside className={`mobile-drawer ${isMenuOpen ? 'open' : ''} ${!hasHardwareAccel ? 'no-gpu' : ''}`}>
            <div className="drawer-header">
              <div className="logo drawer-logo">
                <img 
                  src="/logo.webp" 
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
