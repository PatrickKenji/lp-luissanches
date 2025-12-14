import React from 'react';
import './SocialProofSection.css';

const SocialProofSection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5544999044206';
    const message = encodeURIComponent('Olá! Quero participar do grupo gratuito!');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const benefits = [
    {
      id: 1,
      icon: '💡',
      title: 'Dicas Exclusivas',
      description: 'Receba dicas diárias de treino, nutrição e motivação'
    },
    {
      id: 2,
      icon: '🎯',
      title: 'Meta Coletiva',
      description: 'Faça parte de uma comunidade focada em resultados'
    },
    {
      id: 3,
      icon: '📱',
      title: 'Suporte Imediato',
      description: 'Tire suas dúvidas em tempo real comigo e outros membros'
    },
    {
      id: 4,
      icon: '🎁',
      title: '100% Gratuito',
      description: 'Acesso completo sem nenhum custo ou compromisso'
    }
  ];

  return (
    <section className="social-proof-section" id="comunidade">
      <div className="container">
        <div className="social-proof-content">
          <div className="social-proof-text">
            <div className="section-header">
              <h2 className="section-title">JUNTE-SE À COMUNIDADE</h2>
            </div>
            <p className="social-proof-description">
              Participe do nosso grupo exclusivo e gratuito no WhatsApp. Receba dicas diárias, 
              compartilhe sua jornada e faça parte de uma comunidade que está transformando vidas.
            </p>
            <button 
              className="btn btn-primary btn-lg social-proof-cta"
              onClick={handleWhatsAppClick}
            >
              QUERO ENTRAR NO GRUPO
              <span className="btn-arrow">→</span>
            </button>
          </div>
          
          <div className="social-proof-stats">
            <div className="stats-grid">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="stat-card">
                  <div className="stat-icon">
                    <span>{benefit.icon}</span>
                  </div>
                  <div className="stat-title">{benefit.title}</div>
                  <div className="stat-description">{benefit.description}</div>
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

