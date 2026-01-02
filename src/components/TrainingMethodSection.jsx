import React from 'react';
import './TrainingMethodSection.css';

const TrainingMethodSection = () => {
  const steps = [
    {
      id: 1,
      number: '1',
      title: 'Avaliação individual',
      description: 'A gente começa com uma conversa de 50 minutos pra entender seus objetivos, rotina e histórico. É a base pra montar algo realmente seu.'
    },
    {
      id: 2,
      number: '2',
      title: 'Montagem do treino personalizado',
      description: 'Em até 5 dias você recebe seu treino completo, pensado pra sua realidade, seja na academia ou em casa.'
    },
    {
      id: 3,
      number: '3',
      title: 'Acompanhamento ativo',
      description: 'No primeiro mês acompanho você semanalmente pra garantir adaptação e evolução. Depois o acompanhamento passa a ser quinzenal, conforme sua rotina e progresso.'
    },
    {
      id: 4,
      number: '4',
      title: 'Suporte constante',
      description: 'Pode me chamar sempre que precisar. Eu acompanho de perto, tiro dúvidas e ajusto o treino quando for necessário.'
    },
    {
      id: 5,
      number: '5',
      title: 'Evolução com propósito',
      description: 'O foco é te fazer evoluir de forma segura e consistente, sem pressa, mas com resultado.'
    },
    {
      id: 6,
      isCTA: true,
      title: 'Pronto pra começar?',
      description: 'Transforme sua vida hoje mesmo com um método comprovado e acompanhamento personalizado.'
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = '5544999044206';
    const message = encodeURIComponent('Olá! Quero começar o processo com você!');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="training-method-section" id="metodo">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">CONHEÇA MEU MÉTODO</h2>
          <p className="method-tagline">
            Um processo simples, humano e feito pra gerar resultado com saúde
          </p>
        </div>

        <div className="method-intro">
          <p className="intro-text">
            O meu acompanhamento não é sobre treinos prontos ou fórmulas mágicas.
            Eu sigo um processo que desenvolvi com base em experiência prática e estudo, 
            pra garantir que cada pessoa evolua no seu ritmo, com constância e propósito.
          </p>
        </div>

        <div className="steps-container">
          <h3 className="steps-title">Etapas do processo:</h3>
          <div className="steps-grid">
            {steps.map((step) => (
              <div 
                key={step.id} 
                className={`step-card ${step.isCTA ? 'step-cta' : ''}`}
              >
                {!step.isCTA && (
                  <div className="step-number">{step.number}</div>
                )}
                <h4 className="step-title">{step.title}</h4>
                <p className="step-description">{step.description}</p>
                {step.isCTA && (
                  <button 
                    className="step-cta-button"
                    onClick={handleWhatsAppClick}
                  >
                    COMEÇAR AGORA
                    <span className="btn-arrow">→</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrainingMethodSection;