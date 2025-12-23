import React from 'react';
import './Footer.css';

const Footer = () => {
  const phoneNumber = '5544999044206';
  const instagramUrl = 'https://www.instagram.com/personallsanches/';
  const location = 'Maringá, PR';

  const quickLinks = [
    { name: 'Início', href: '#' },
    { name: 'Método', href: '#metodo' },
    { name: 'Resultados', href: '#resultados' },
    { name: 'Consultoria', href: '#consultoria' },
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Quero começar minha transformação hoje!');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open(instagramUrl, '_blank');
  };

  return (
    <footer className="footer-modern">
      {/* Seção CTA Principal */}
      <div className="footer-cta-section">
      <div className="container">
          <div className="footer-cta-content">
            <div className="footer-cta-text">
              <h2 className="footer-cta-title">Pronto para começar sua transformação?</h2>
              <p className="footer-cta-subtitle">Entre em contato agora e dê o primeiro passo</p>
            </div>
            <button className="footer-cta-button" onClick={handleWhatsAppClick}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              <span>Falar no WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal do Footer */}
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Coluna 1: Branding */}
            <div className="footer-brand">
              <div className="footer-logo">
                <img src="/logo.webp" alt="Luis Sanches" />
              </div>
              <p className="footer-tagline">
                Transformando vidas através de treinos personalizados e acompanhamento dedicado.
              </p>
              <div className="footer-social">
                <button onClick={handleInstagramClick} className="social-btn" aria-label="Instagram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </button>
              </div>
          </div>

            {/* Coluna 2: Links Rápidos */}
            <div className="footer-links-column">
              <h3 className="footer-column-title">Links Rápidos</h3>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                <li key={index}>
                    <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

            {/* Coluna 3: Contato */}
            <div className="footer-contact-column">
              <h3 className="footer-column-title">Contato</h3>
              <ul className="footer-contact-list">
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>{location}</span>
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>(44) 99904-4206</span>
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>contato@luissanches.com</span>
                </li>
              </ul>
            </div>
            </div>
          </div>
        </div>
        
      {/* Bottom Bar */}
        <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2025 Luis Sanches Personal Trainer. Todos os direitos reservados.
            </p>
            <p className="footer-dev">
              Desenvolvido por <span className="dev-name">Arkharium</span>
            </p>
          </div>
        </div>
      </div>

      {/* Background Shapes */}
      <div className="footer-shapes">
        <div className="footer-shape footer-shape-1"></div>
        <div className="footer-shape footer-shape-2"></div>
      </div>
    </footer>
  );
};

export default Footer;
