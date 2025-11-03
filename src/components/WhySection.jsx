import React from 'react';
import './WhySection.css';

const WhySection = () => {
  const features = [
    {
      id: 1,
      icon: '🎯',
      title: 'Treinos 100% personalizados',
      description: 'Feitos com base nos seus objetivos, histórico e rotina. Nada de cópias ou planilhas genéricas.'
    },
    {
      id: 2,
      icon: '📈',
      title: 'Acompanhamento real e constante',
      description: 'Eu acompanho cada aluno de perto, com feedbacks e ajustes contínuos conforme o progresso.'
    },
    {
      id: 3,
      icon: '💬',
      title: 'Suporte direto comigo',
      description: 'Você fala comigo, não com uma automação. Estou sempre disponível pra tirar dúvidas e ajustar o que for preciso.'
    },
    {
      id: 4,
      icon: '📱',
      title: 'Tudo organizado em um só lugar',
      description: 'Seus treinos, vídeos, histórico e evolução ficam centralizados no aplicativo que uso para acompanhar cada detalhe.'
    },
    {
      id: 5,
      icon: '⚖️',
      title: 'Foco em performance e saúde',
      description: 'O objetivo é fazer você evoluir com equilíbrio, construindo um corpo forte e funcional sem exageros.'
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = '5511999999999'; // Substitua pelo número real
    const message = encodeURIComponent('Olá! Quero conhecer mais sobre o seu acompanhamento!');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="why-section" id="why">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">POR QUE COMIGO?</h2>
        </div>
        
        <div className="why-content-wrapper">
          <div className="why-services-column">
            <div className="services-timeline">
              {features.map((feature, index) => (
                <div key={feature.id} className={`service-item service-${index + 1}`}>
                  <div className="service-visual">
                    <span className="service-icon">{feature.icon}</span>
                    {index < features.length - 1 && <div className="service-connector"></div>}
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{feature.title}</h3>
                    <p className="service-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="why-image-column">
            <div className="why-image-container">
              <img src="/luis.jpg" alt="Personal Trainer" className="why-image-photo" />
            </div>
          </div>
        </div>
        
        <div className="why-cta-wrapper">
          <button 
            className="btn btn-primary btn-lg why-cta-button"
            onClick={handleWhatsAppClick}
          >
            VAMOS CONVERSAR
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhySection;