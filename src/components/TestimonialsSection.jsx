import React, { useState } from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const whatsappProofs = [
    {
      id: 1,
      image: '/prova1.jpeg',
      name: 'Paulo Roberto'
    },
    {
      id: 2,
      image: '/prova2.jpeg',
      name: 'Renato T.'
    },
    {
      id: 3,
      image: '/prova3.jpeg',
      name: 'Izabel M.'
    },
    {
      id: 4,
      image: '/prova4.jpeg',
      name: 'Fátima'
    },
    {
      id: 5,
      image: '/prova5.jpeg',
      name: 'Carlos Mitsuru'
    },
    {
      id: 6,
      image: '/prova6.jpeg',
      name: 'Celly Rezende'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % whatsappProofs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + whatsappProofs.length) % whatsappProofs.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">O QUE MEUS ALUNOS DIZEM</h2>
          <p className="testimonials-subtitle">
            Depoimentos reais de quem transformou resultados comigo
          </p>
        </div>
        
        <div className="phone-carousel-wrapper">
          <button 
            className="carousel-nav carousel-prev"
            onClick={prevSlide}
            aria-label="Anterior"
          >
            ←
          </button>

          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="phone-screen">
                <img 
                  src={whatsappProofs[currentIndex].image}
                  alt={`Depoimento de ${whatsappProofs[currentIndex].name}`}
                  className="proof-screenshot"
                />
              </div>
            </div>
            <div className="proof-name">{whatsappProofs[currentIndex].name}</div>
          </div>

          <button 
            className="carousel-nav carousel-next"
            onClick={nextSlide}
            aria-label="Próximo"
          >
            →
          </button>
        </div>

        <div className="carousel-indicators">
          {whatsappProofs.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;