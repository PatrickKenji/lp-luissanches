import React from 'react';
import './Hero.css';

const Hero = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5511999999999'; // Substitua pelo número real
    const message = encodeURIComponent('Olá! Quero começar minha transformação hoje!');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title animate-fade-in-left">
              TRANSFORME SEU CORPO E{' '}
              <span className="highlight">GARANTA RESULTADOS REAIS</span>
            </h1>
            <p className="hero-description animate-fade-in-left">
              Treinos 100% personalizados, acompanhamento constante e suporte direto. 
              Não é sobre treinos prontos, é sobre uma metodologia que realmente funciona.
            </p>
            <button 
              className="btn btn-primary btn-lg hero-cta animate-fade-in-left"
              onClick={handleWhatsAppClick}
            >
              QUERO COMEÇAR AGORA
              <span className="btn-arrow">→</span>
            </button>
          </div>
          <div className="hero-image">
            <div className="hero-image-container">
              <img 
                src="/luis.jpg" 
                alt="Personal Trainer profissional"
                className="hero-image-photo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


