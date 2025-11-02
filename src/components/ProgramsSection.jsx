import React from 'react';
import './ProgramsSection.css';

const ProgramsSection = () => {
  const programs = [
    {
      id: 1,
      title: 'YOGA',
      description: 'Conecte-se com seu corpo através de movimentos fluidos e respiração consciente.',
      icon: '🧘‍♀️',
      color: '#FF6B6B'
    },
    {
      id: 2,
      title: 'CARDIO AND HIIT',
      description: 'Queime calorias e melhore sua resistência com treinos de alta intensidade.',
      icon: '💪',
      color: '#4ECDC4'
    },
    {
      id: 3,
      title: 'STRENGTH TRAINING',
      description: 'Construa músculos fortes e definidos com exercícios de força progressiva.',
      icon: '🏋️‍♂️',
      color: '#45B7D1'
    },
    {
      id: 4,
      title: 'MOBILITY',
      description: 'Melhore sua flexibilidade e movimentação para uma vida mais ativa.',
      icon: '🤸‍♀️',
      color: '#96CEB4'
    }
  ];

  const handleWhatsAppClick = (program) => {
    const phoneNumber = '5511999999999'; // Substitua pelo número real
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o programa ${program.title}.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="programs-section" id="programs">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">OUR PROGRAMS</h2>
        </div>
        
        <div className="programs-grid">
          {programs.map((program) => (
            <div key={program.id} className="program-card">
              <div className="program-image">
                <div 
                  className="program-icon"
                  style={{ backgroundColor: program.color }}
                >
                  <span className="icon">{program.icon}</span>
                </div>
              </div>
              
              <div className="program-content">
                <div className="program-header">
                  <h3 className="program-title">{program.title}</h3>
                  <span className="program-arrow">→</span>
                </div>
                <p className="program-description">{program.description}</p>
                <button 
                  className="program-cta"
                  onClick={() => handleWhatsAppClick(program)}
                >
                  Saiba Mais
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="programs-indicator">
          <div className="indicator-line"></div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;


