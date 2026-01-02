import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="sobre" className="about-section">
      <div className="container">
        <div className="about-content">
          {/* Coluna da Imagem */}
          <div className="about-image-wrapper">
            <div className="about-image-container">
              <img 
                src="/luis.jpg" 
                alt="Luis Sanches - Personal Trainer"
                className="about-image"
              />
              <div className="about-image-overlay"></div>
            </div>
            <div className="about-experience-badge">
              <span className="experience-number">9+</span>
              <span className="experience-text">Anos de Experiência</span>
            </div>
          </div>

          {/* Coluna do Conteúdo */}
          <div className="about-text-content">
            <div className="about-header">
              <span className="about-label">Conheça minha história</span>
              <h2 className="about-title">
                Sobre <span className="title-highlight">Luis Sanches</span>
              </h2>
            </div>

            <div className="about-story">
              <p className="about-paragraph">
                Minha jornada no mundo fitness começou há mais de 9 anos, quando descobri 
                que <strong>treinos genéricos não entregam resultados reais</strong>. Cada 
                pessoa é única, com objetivos, limitações e histórias diferentes.
              </p>

              <p className="about-paragraph">
                Foi aí que desenvolvi o <strong>Método Sanches</strong> - uma abordagem 
                100% personalizada que considera não apenas seus objetivos físicos, mas 
                também seu estilo de vida, rotina e necessidades individuais.
              </p>

              <p className="about-paragraph">
                Hoje, com <strong>mais de 200 clientes transformados</strong>, minha missão 
                é clara: ajudar você a alcançar seus objetivos através de um acompanhamento 
                constante, treinos personalizados e suporte direto.
              </p>
            </div>

            <div className="about-mission">
              <div className="mission-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <div className="mission-content">
                <h3 className="mission-title">Minha Missão</h3>
                <p className="mission-text">
                  Transformar vidas através de treinos personalizados, acompanhamento 
                  constante e uma metodologia que realmente funciona. Não é sobre 
                  quantidade, é sobre qualidade e resultados reais.
                </p>
              </div>
            </div>

            <div className="about-cta">
              <button className="about-cta-button" onClick={() => {
                const phoneNumber = '5544999044206';
                const message = encodeURIComponent('Olá Luis! Quero conhecer melhor o Método Sanches.');
                window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
              }}>
                <span>Falar Comigo</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

