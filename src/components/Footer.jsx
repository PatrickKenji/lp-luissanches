import React from 'react';
import './Footer.css';

const Footer = () => {
  const footerLinks = [
    { name: 'Método', href: '#metodo' },
    { name: 'Resultados', href: '#resultados' },
    { name: 'Consultoria', href: '#consultoria' },
    { name: 'Comunidade', href: '#comunidade' }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: '📷', href: '#' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-logo">
              <img 
                src="/logo.png" 
                alt="Personal Trainer Logo"
                className="logo-image"
              />
            </div>
            
            <div className="footer-links">
              {footerLinks.map((link, index) => (
                <a key={index} href={link.href} className="footer-link">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.href} 
                className="social-link"
                aria-label={social.name}
              >
                <span className="social-icon">{social.icon}</span>
              </a>
            ))}
          </div>
          
          <div className="footer-copyright">
            <p>Copyright © 2024 Personal Trainer. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


