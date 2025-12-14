import React, { useState } from 'react';
import './BeforeAfterSection.css';

const BeforeAfterSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const transformations = [
    {
      id: 1,
      name: 'Maria Silva',
      time: '6 meses',
      beforeWeight: '85kg',
      afterWeight: '62kg',
      description: 'Perdeu 23kg e ganhou autoestima. Hoje se sente confiante e saudável!',
      icon: '👩‍🦰'
    },
    {
      id: 2,
      name: 'João Santos',
      time: '4 meses',
      beforeWeight: 'Confortável',
      afterWeight: 'Definido',
      description: 'Ganhou massa muscular e definição. Alcançou o corpo dos sonhos!',
      icon: '🧔‍♂️'
    },
    {
      id: 3,
      name: 'Ana Costa',
      time: '8 meses',
      beforeWeight: 'Sede',
      afterWeight: 'Força',
      description: 'Saúde completa restaurada. Energia renovada e vitalidade!',
      icon: '👩🏻‍🦱'
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '5544999044206';
    const message = encodeURIComponent('Quero ter resultados como esses! Como posso começar?');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="before-after-section" id="resultados">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">TRANSFORMAÇÕES REAIS</h2>
          <p className="section-subtitle">
            Veja os resultados incríveis dos nossos alunos em poucos meses
          </p>
        </div>

        <div className="transformations-carousel-wrapper">
          <button 
            className="carousel-nav carousel-prev"
            onClick={prevSlide}
            aria-label="Transformação anterior"
          >
            ←
          </button>

          <div className="transformations-carousel-container">
            <div className="transformations-viewport">
              {transformations.map((transformation, index) => {
                const offset = index - activeSlide;
                return (
                  <div 
                    key={transformation.id} 
                    className={`transformation-slide ${Math.abs(offset) <= 1 ? 'visible' : ''} offset-${offset}`}
                  >
                    <div className="transformation-card">
                      <div className="transformation-header">
                        <div className="student-avatar">
                          <span className="avatar-icon">{transformation.icon}</span>
                        </div>
                        <div className="student-info">
                          <h3 className="student-name">{transformation.name}</h3>
                          <p className="transformation-time">Em apenas {transformation.time}</p>
                        </div>
                      </div>

                      <div className="transformation-comparison">
                        <div className="comparison-side before">
                          <div className="comparison-label">ANTES</div>
                          <div className="comparison-metric">{transformation.beforeWeight}</div>
                          <div className="comparison-placeholder before-placeholder">
                            <span>📸</span>
                            <p>Foto antes</p>
                          </div>
                        </div>

                        <div className="comparison-divider">
                          <span className="arrow-icon">→</span>
                        </div>

                        <div className="comparison-side after">
                          <div className="comparison-label after-label">DEPOIS</div>
                          <div className="comparison-metric after-metric">{transformation.afterWeight}</div>
                          <div className="comparison-placeholder after-placeholder">
                            <span>📸</span>
                            <p>Foto depois</p>
                          </div>
                        </div>
                      </div>

                      <p className="transformation-description">{transformation.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button 
            className="carousel-nav carousel-next"
            onClick={nextSlide}
            aria-label="Próxima transformação"
          >
            →
          </button>
        </div>

        <div className="transformation-indicators">
          {transformations.map((_, index) => (
            <button
              key={index}
              className={`indicator-dot ${index === activeSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para transformação ${index + 1}`}
            />
          ))}
        </div>

        <div className="cta-container">
          <button 
            className="btn btn-primary btn-lg"
            onClick={handleWhatsAppClick}
          >
            QUERO TER RESULTADOS COMO ESSES
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;