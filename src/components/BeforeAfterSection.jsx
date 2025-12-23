import React, { useEffect, useState } from 'react';
import './BeforeAfterSection.css';

const BeforeAfterSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const transformations = [
    {
      id: 1,
      name: 'Maria Silva',
      time: '6 meses',
      beforeWeight: 'Sem definição',
      afterWeight: 'Bem definido',
      description: 'Perdeu peso, ganhou definição muscular e hoje se sente confiante com o corpo.',
      icon: '👩‍🦰',
      beforeImage: '/antes1.webp',
      afterImage: '/depois1.webp'
    },
    {
      id: 2,
      name: 'João Santos',
      time: '4 meses',
      beforeWeight: 'Acima do peso',
      afterWeight: 'Peso saudável',
      description: 'Focou apenas em perda de peso, reduzindo medidas e melhorando a saúde geral.',
      icon: '🧔‍♂️',
      beforeImage: '/antes2.webp',
      afterImage: '/depois2.webp'
    },
    {
      id: 3,
      name: 'Ana Costa',
      time: '8 meses',
      beforeWeight: 'Pouca força',
      afterWeight: 'Mais força',
      description: 'Ganhou força e desempenho, evoluindo nas cargas e na performance dos treinos.',
      icon: '👩🏻‍🦱',
      beforeImage: '/antes3.webp',
      afterImage: '/depois3.webp'
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

  // Carrossel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % transformations.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [transformations.length]);

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
                      <div className="transformation-comparison">
                        <div className="comparison-side before">
                          <div className="comparison-info">
                            <div className="comparison-label">ANTES</div>
                            <div className="comparison-metric">{transformation.beforeWeight}</div>
                          </div>
                          {transformation.beforeImage ? (
                            <div className="comparison-media before-media">
                              <img
                                src={transformation.beforeImage}
                                alt={`Antes de ${transformation.name}`}
                                loading="lazy"
                                className="comparison-image"
                              />
                            </div>
                          ) : (
                            <div className="comparison-placeholder before-placeholder">
                              <span>📸</span>
                              <p>Foto antes</p>
                            </div>
                          )}
                        </div>

                        <div className="comparison-divider">
                          <span className="arrow-icon">→</span>
                        </div>

                        <div className="comparison-side after">
                          <div className="comparison-info">
                            <div className="comparison-label after-label">DEPOIS</div>
                            <div className="comparison-metric after-metric">{transformation.afterWeight}</div>
                          </div>
                          {transformation.afterImage ? (
                            <div className="comparison-media after-media">
                              <img
                                src={transformation.afterImage}
                                alt={`Depois de ${transformation.name}`}
                                loading="lazy"
                                className="comparison-image"
                              />
                            </div>
                          ) : (
                            <div className="comparison-placeholder after-placeholder">
                              <span>📸</span>
                              <p>Foto depois</p>
                            </div>
                          )}
                        </div>
                      </div>

                      <p className="transformation-description">{transformation.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="transformation-indicators">
          <button
            className="indicator-nav indicator-nav-prev"
            onClick={prevSlide}
            aria-label="Transformação anterior"
          >
            ←
          </button>

          <div className="indicator-dots">
            {transformations.map((_, index) => (
              <button
                key={index}
                className={`indicator-dot ${index === activeSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir para transformação ${index + 1}`}
              />
            ))}
          </div>

          <button
            className="indicator-nav indicator-nav-next"
            onClick={nextSlide}
            aria-label="Próxima transformação"
          >
            →
          </button>
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