import React, { useState } from 'react';
import './MembershipSection.css';

const MembershipSection = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('mensal');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const consultancyTypes = [
    {
      id: 'hibrido',
      title: 'HÍBRIDO',
      description: 'A melhor combinação entre atendimento presencial e online para resultados completos',
      recommended: false,
      benefits: [
        'Avaliação presencial completa',
        'Consultoria online com 2 sessões mensais',
        'Flexibilidade para sessões presenciais ou online',
        'Acompanhamento personalizado em tempo real'
      ],
      plans: {
        mensal: {
          price: 300,
          period: '1 mês',
          sessions: '2 aulas presenciais + consultoria online',
          perMonth: 300
        },
        trimestral: {
          price: 720,
          period: '3 meses',
          sessions: '6 aulas presenciais + consultoria online',
          perMonth: 240
        },
        semestral: {
          price: 1320,
          period: '6 meses',
          sessions: '12 aulas presenciais + consultoria online',
          perMonth: 220
        },
        anual: {
          price: 2400,
          period: '12 meses',
          sessions: '24 aulas presenciais + consultoria online',
          perMonth: 200
        }
      }
    },
    {
      id: 'online',
      title: 'ONLINE',
      description: 'Transforme sua rotina com acompanhamento completo, direto do conforto da sua casa',
      recommended: true,
      benefits: [
        'Reunião inicial de avaliação de 30 minutos',
        'Consultoria completa 100% personalizada',
        '2 sessões mensais de acompanhamento',
        'Suporte direto e ajustes em tempo real'
      ],
      plans: {
        mensal: {
          price: 200,
          period: '1 mês',
          sessions: '2 sessões online + suporte',
          perMonth: 200
        },
        trimestral: {
          price: 480,
          period: '3 meses',
          sessions: '6 sessões online + suporte',
          perMonth: 160
        },
        semestral: {
          price: 840,
          period: '6 meses',
          sessions: '12 sessões online + suporte',
          perMonth: 140
        },
        anual: {
          price: 1440,
          period: '12 meses',
          sessions: '24 sessões online + suporte',
          perMonth: 120
        }
      }
    }
  ];

  const periods = [
    { id: 'mensal', label: 'MENSAL', months: '1 mês', discount: 0 },
    { id: 'trimestral', label: 'TRIMESTRAL', months: '3 meses', discount: 20 },
    { id: 'semestral', label: 'SEMESTRAL', months: '6 meses', discount: 27 },
    { id: 'anual', label: 'ANUAL', months: '12 meses', discount: 33 }
  ];

  const handleWhatsAppClick = (consultancyType) => {
    const phoneNumber = '5511999999999'; // Substitua pelo número real
    const plan = consultancyType.plans[selectedPeriod];
    const message = encodeURIComponent(`Olá! Quero contratar a consultoria ${consultancyType.title} ${selectedPeriod.toUpperCase()} - ${plan.period} por R$ ${plan.price.toFixed(2)}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const activePlan = (plans) => plans[selectedPeriod];

  const handlePeriodSelect = (periodId) => {
    setSelectedPeriod(periodId);
    setIsDropdownOpen(false);
  };

  const selectedPeriodData = periods.find(p => p.id === selectedPeriod);

  return (
    <section className="membership-section" id="consultoria">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">CONSULTORIA PERSONALIZADA</h2>
          <p className="section-description">
            Escolha o formato ideal para sua rotina e transforme seus resultados com acompanhamento profissional
          </p>
        </div>
        
        <div className="period-selector-wrapper">
          <div className="custom-dropdown">
            <button
              className="dropdown-trigger"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>{selectedPeriodData.label}</span>
              <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
            </button>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                {periods.map((period) => (
                  <button
                    key={period.id}
                    className={`dropdown-option ${selectedPeriod === period.id ? 'selected' : ''}`}
                    onClick={() => handlePeriodSelect(period.id)}
                  >
                    <span className="option-label">{period.label}</span>
                    {period.discount > 0 && (
                      <span className="option-discount">-{period.discount}%</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="membership-grid">
          {consultancyTypes.map((consultancy) => {
            const currentPlan = activePlan(consultancy.plans);
            return (
              <div 
                key={consultancy.id} 
                className={`membership-card ${consultancy.recommended ? 'recommended' : ''}`}
              >
                {consultancy.recommended && (
                  <div className="recommended-badge">
                    MAIS ESCOLHIDO
                  </div>
                )}
                
                <div className="membership-header">
                  <div className="membership-icon">
                    <span className="icon-number">{consultancy.id === 'hibrido' ? 'H' : 'O'}</span>
                  </div>
                  <h3 className="membership-title">{consultancy.title}</h3>
                </div>
                
                <p className="membership-description">{consultancy.description}</p>
                
                <div className="membership-price">
                  <span className="price-value">R$ {currentPlan.price.toFixed(2)}</span>
                  <span className="price-per-month">ou R$ {currentPlan.perMonth.toFixed(2)}/mês</span>
                </div>
                
                <div className="plan-details">
                  <div className="plan-period">Periodo: {currentPlan.period}</div>
                  <div className="plan-sessions">{currentPlan.sessions}</div>
                </div>
                
                <ul className="membership-features">
                  {consultancy.benefits.map((benefit, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-check">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`membership-cta ${consultancy.recommended ? 'recommended' : ''}`}
                  onClick={() => handleWhatsAppClick(consultancy)}
                >
                  COMEÇAR AGORA
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;