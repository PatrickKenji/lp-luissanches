import React from 'react';
import './Footer.css';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5511999999999'; // Substitua pelo número real
    const message = encodeURIComponent('Olá! Quero fazer parte da comunidade e começar minha transformação!');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const footerLinks = [
    { name: 'Programs', href: '#programs' },
    { name: 'Membership', href: '#membership' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Community', href: '#community' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact us', href: '#contact' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Store', href: '#store' }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: '𝕏', href: '#' },
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
          
          <div className="footer-cta">
            <div className="cta-content">
              <h3 className="cta-title">GAIN YOUR CHANGE NOW!</h3>
              <p className="cta-description">
                Stay motivated and engaged with a little help from a supportive community of other members.
              </p>
              <button 
                className="btn btn-primary btn-lg footer-cta-button"
                onClick={handleWhatsAppClick}
              >
                JOIN NOW
                <span className="btn-arrow">→</span>
              </button>
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
            <p>Copyright © 2023 Rayclub. All rights reserved. Made with love by Rayclub Project.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


