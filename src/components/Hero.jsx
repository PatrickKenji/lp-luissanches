import React from 'react';
import './Hero.css';

const Hero = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5544999044206';
    const message = encodeURIComponent('Olá! Quero começar minha transformação hoje!');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleGetAPIClick = () => {
    // Scroll para a seção de consultoria
    document.getElementById('consultoria')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-animated-bg">
        <div className="hero-wave hero-wave-1"></div>
        <div className="hero-wave hero-wave-2"></div>
        <div className="hero-wave hero-wave-3"></div>
        <div className="hero-particles">
          {[...Array(window.innerWidth < 768 ? 5 : 20)].map((_, i) => (
            <span key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}></span>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="hero-content">
          {/* Conteúdo principal centralizado */}
          <div className="hero-main">
            <h1 className="hero-title">
              Resultados reais não vêm<br />
              <span className="hero-title-highlight">de treinos prontos</span>
            </h1>
            
            <p className="hero-description">
              Treinos 100% personalizados, acompanhamento constante e suporte direto. 
              Não é sobre treinos prontos, é sobre uma metodologia que realmente funciona.
            </p>

            <div className="hero-cta-group">
              <button 
                className="btn btn-secondary btn-lg"
                onClick={handleGetAPIClick}
              >
                VER PLANOS
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>

          {/* Card/Dashboard - Resultados e Estatísticas */}
          <div className="hero-card">
            <div className="hero-card-header">
              <div className="hero-card-title-section">
                <h3 className="hero-card-heading">Resultados Comprovados</h3>
                <p className="hero-card-subtitle">Transformações reais de clientes</p>
              </div>
              <div className="hero-card-badge">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
                <span>5.0</span>
              </div>
            </div>
            
            <div className="hero-card-stats">
              <div className="hero-stat-item">
                <div className="hero-stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="hero-stat-content">
                  <div className="hero-stat-value">200+</div>
                  <div className="hero-stat-label">Clientes Ativos</div>
                </div>
              </div>

              <div className="hero-stat-item">
                <div className="hero-stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 13H5V11H3V13ZM3 17H5V15H3V17ZM3 9H5V7H3V9ZM7 13H21V11H7V13ZM7 17H21V15H7V17ZM7 7V9H21V7H7Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="hero-stat-content">
                  <div className="hero-stat-value">100%</div>
                  <div className="hero-stat-label">Treinos Personalizados</div>
                </div>
              </div>

              <div className="hero-stat-item">
                <div className="hero-stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="hero-stat-content">
                  <div className="hero-stat-value">95%</div>
                  <div className="hero-stat-label">Taxa de Sucesso</div>
                </div>
              </div>

              <div className="hero-stat-item">
                <div className="hero-stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="hero-stat-content">
                  <div className="hero-stat-value">Suporte online</div>
                </div>
              </div>
            </div>

            <div className="hero-card-footer">
              <div className="hero-card-price">
                <span className="hero-card-from">A partir de</span>
                <span className="hero-card-amount">R$197<span className="hero-card-period">/mês</span></span>
              </div>
              <button className="hero-card-cta" onClick={handleWhatsAppClick}>
                Começar Agora
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


