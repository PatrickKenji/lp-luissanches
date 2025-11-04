import React from 'react';
import './Footer.css';

const Footer = () => {
  const phoneNumber = '5511999999999'; // Substitua pelo número real
  const instagramUrl = 'https://www.instagram.com/seuinstagram'; // Substitua pela URL real
  const location = 'São Paulo, SP'; // Substitua pela localização real

  const footerLinks = [
    { name: 'Método', href: '#metodo' },
    { name: 'Resultados', href: '#resultados' },
    { name: 'Consultoria', href: '#consultoria' },
    { name: 'Comunidade', href: '#comunidade' }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os treinos personalizados.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open(instagramUrl, '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleCTAClick = () => {
    const message = encodeURIComponent('Olá! Quero começar minha transformação hoje!');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  // Formata o número de telefone para exibição
  const formatPhoneNumber = (phone) => {
    // Formato: (11) 99999-9999
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 13) {
      return `(${cleaned.substring(2, 4)}) ${cleaned.substring(4, 9)}-${cleaned.substring(9)}`;
    }
    return phone;
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main-content">
          {/* Coluna Esquerda: Logo, Descrição e CTA */}
          <div className="footer-column footer-about">
            <div className="footer-logo">
              <img 
                src="/logo.png" 
                alt="Personal Trainer Logo"
                className="logo-image"
              />
            </div>
            
            <p className="footer-description">
              Treinos 100% personalizados com metodologia comprovada. 
              Mais de 5 anos de experiência transformando vidas através do acompanhamento 
              constante e suporte direto. Resultados reais para quem busca evoluir com saúde e propósito.
            </p>

            <button 
              className="footer-cta-button"
              onClick={handleCTAClick}
            >
              <span className="cta-icon">💬</span>
              <span className="cta-text">Falar com personal agora</span>
            </button>
          </div>

          {/* Coluna do Meio: Áreas de Atuação */}
          <div className="footer-column footer-services">
            <h3 className="footer-column-title">ÁREAS DE ATUAÇÃO</h3>
            <ul className="footer-services-list">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-service-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna Direita: Contato e Redes Sociais */}
          <div className="footer-column footer-contact-info">
            <h3 className="footer-column-title">CONTATO</h3>
            
            <div className="contact-info-list">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span className="contact-text">{location}</span>
              </div>
              
              <a 
                href={`tel:${phoneNumber}`}
                className="contact-item contact-link"
                onClick={handlePhoneClick}
              >
                <span className="contact-icon">📞</span>
                <span className="contact-text">{formatPhoneNumber(phoneNumber)}</span>
              </a>
              
              <button 
                className="contact-item contact-link contact-whatsapp"
                onClick={handleWhatsAppClick}
              >
                <span className="contact-icon">💬</span>
                <span className="contact-text">WhatsApp</span>
              </button>
            </div>

            <h3 className="footer-column-title footer-social-title">SIGA-NOS</h3>
            
            <div className="footer-social-icons">
              <button 
                className="social-icon-button"
                onClick={handleInstagramClick}
                aria-label="Instagram"
              >
                <span className="social-icon-text">📷</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>© 2025 Luis Sanches Personal Trainer. Todos os direitos reservados.</p>
            <p className="footer-credits">Desenvolvido por <strong>Arkharium</strong></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


