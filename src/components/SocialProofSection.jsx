import React from 'react';
import './SocialProofSection.css';

const SocialProofSection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5511999999999'; // Substitua pelo número real
    const message = encodeURIComponent('Olá! Quero começar minha transformação hoje!');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const socialProof = [
    {
      id: 1,
      icon: '👥',
      number: '10K+',
      description: 'Alunos Ativos'
    },
    {
      id: 2,
      icon: '💪',
      number: '500+',
      description: 'Transformações Completadas'
    },
    {
      id: 3,
      icon: '⭐',
      number: '4.9',
      description: 'Avaliação Média'
    },
    {
      id: 4,
      icon: '🏆',
      number: '98%',
      description: 'Taxa de Satisfação'
    }
  ];

  return (
    <section className="social-proof-section" id="social-proof">
      <div className="container">
        <div className="social-proof-content">
          <div className="social-proof-text">
            <div className="section-header">
              <h2 className="section-title">RESULTADOS COMPROVADOS</h2>
            </div>
            <p className="social-proof-description">
              Junte-se a milhares de pessoas que já transformaram suas vidas com nosso método de treinamento personalizado.
            </p>
            <button 
              className="btn btn-primary btn-lg social-proof-cta"
              onClick={handleWhatsAppClick}
            >
              QUERO COMECAR AGORA
              <span className="btn-arrow">→</span>
            </button>
          </div>
          
          <div className="social-proof-stats">
            <div className="stats-grid">
              {socialProof.map((stat) => (
                <div key={stat.id} className="stat-card">
                  <div className="stat-icon">
                    <span>{stat.icon}</span>
                  </div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-description">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
