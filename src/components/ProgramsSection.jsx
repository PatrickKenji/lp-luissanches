import React, { useEffect, useMemo, useState } from 'react';
import './ProgramsSection.css';

const ProgramsSection = () => {
  const programs = [
    {
      id: 1,
      icon: '💪',
      title: 'Hipertrofia e performance',
      description: 'Pra quem quer aumentar massa magra e evoluir no treino sem lesões, com base em técnica, progressão e equilíbrio.'
    },
    {
      id: 2,
      icon: '⚡',
      title: 'Força e condicionamento',
      description: 'Pra quem busca melhorar o desempenho físico e ganhar resistência, tanto em esportes quanto no dia a dia.'
    },
    {
      id: 3,
      icon: '🔥',
      title: 'Emagrecimento saudável',
      description: 'Pra quem quer reduzir gordura corporal e ganhar disposição, sem dietas malucas nem treinos exaustivos.'
    },
    {
      id: 4,
      icon: '🧘',
      title: 'Saúde e qualidade de vida',
      description: 'Pra quem quer se sentir bem, recuperar o prazer de treinar e manter o corpo ativo de forma leve e sustentável.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Responsivo: 3 desktop, 2 tablet, 1 mobile
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w <= 480) return 1;
      if (w <= 768) return 2;
      return 3;
    };
    const apply = () => {
      const next = compute();
      setItemsPerView(next);
      // corrige índice se necessário
      setCurrentIndex((prev) => Math.min(prev, Math.max(0, programs.length - next)));
    };
    apply();
    window.addEventListener('resize', apply);
    return () => window.removeEventListener('resize', apply);
  }, [programs.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= programs.length - itemsPerView ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? programs.length - itemsPerView : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="programs-section" id="programs">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">PRA QUEM É O MEU ACOMPANHAMENTO</h2>
          <p className="programs-intro">
            Não existe um único tipo de resultado. Cada pessoa tem uma motivação diferente 
            e o treino certo precisa respeitar isso.
          </p>
          <p className="programs-intro-secondary">
            O que eu faço é ajustar o caminho pra que você conquiste o que quer, 
            com saúde e constância.
          </p>
        </div>
        
        <div className="programs-carousel-wrapper">
          <button className="carousel-nav-button carousel-nav-prev" onClick={prevSlide}>
            ←
          </button>
          
          <div className="programs-carousel-container">
            <div 
              className="programs-carousel-track"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {programs.map((program) => (
                <div key={program.id} className="program-card">
                  <div className="program-image">
                    <div className="program-icon">
                      <span className="icon">{program.icon}</span>
                    </div>
                  </div>
                  
                  <div className="program-content">
                    <h3 className="program-title">{program.title}</h3>
                    <p className="program-description">{program.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className="carousel-nav-button carousel-nav-next" onClick={nextSlide}>
            →
          </button>
        </div>

        <div className="carousel-indicators">
          {Array.from({ length: Math.max(1, programs.length - itemsPerView + 1) }).map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;