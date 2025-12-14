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
        'Avaliação inicial presencial',
        'Plano de treino individualizado',
        'Treinos no app com vídeos explicativos',
        'Sessões presenciais na 1ª e 3ª semana de cada mês',
        'Ajustes e progressões constantes do treino',
        'Acompanhamento técnico para execução correta',
        'Feedback após cada sessão presencial'
      ],
      plans: {
        mensal: {
          price: 437,
          period: '1 mês',
          sessions: '2 aulas presenciais + consultoria online',
          perMonth: 437
        },
        trimestral: {
          price: 1191,
          period: '3 meses',
          sessions: '6 aulas presenciais + consultoria online',
          perMonth: 397
        },
        semestral: {
          price: 2082,
          period: '6 meses',
          sessions: '12 aulas presenciais + consultoria online',
          perMonth: 347
        },
        anual: {
          price: 3564,
          period: '12 meses',
          sessions: '24 aulas presenciais + consultoria online',
          perMonth: 297
        }
      }
    },
    {
      id: 'online',
      title: 'ONLINE',
      description: 'Transforme sua rotina com acompanhamento completo, direto do conforto da sua casa',
      recommended: true,
      benefits: [
        'Plano de treino individualizado',
        'Treinos no app com vídeos explicativos',
        'Acompanhamento online contínuo',
        'Ajustes periódicos do treino',
        'Reavaliação a cada 2 meses',
        'Suporte direto para dúvidas e correções',
        'Flexibilidade total'
      ],
      plans: {
        mensal: {
          price: 327,
          period: '1 mês',
          sessions: '2 sessões online + suporte',
          perMonth: 327
        },
        trimestral: {
          price: 891,
          period: '3 meses',
          sessions: '6 sessões online + suporte',
          perMonth: 297
        },
        semestral: {
          price: 1482,
          period: '6 meses',
          sessions: '12 sessões online + suporte',
          perMonth: 247
        },
        anual: {
          price: 2364,
          period: '12 meses',
          sessions: '24 sessões online + suporte',
          perMonth: 197
        }
      }
    }
  ];

  const periods = [
    { id: 'mensal', label: 'MENSAL', months: '1 mês', discount: 0 },
    { id: 'trimestral', label: 'TRIMESTRAL', months: '3 meses', discount: 9 },
    { id: 'semestral', label: 'SEMESTRAL', months: '6 meses', discount: 24 },
    { id: 'anual', label: 'ANUAL', months: '12 meses', discount: 40 }
  ];

  const formatPrice = (price) => {
    return price.toFixed(2).replace('.', ',');
  };

  const handleWhatsAppClick = (consultancyType) => {
    const phoneNumber = '5544999044206';
    const plan = consultancyType.plans[selectedPeriod];
    const message = encodeURIComponent(`Olá! Quero contratar a consultoria ${consultancyType.title} ${selectedPeriod.toUpperCase()} - ${plan.period} por R$ ${formatPrice(plan.price)}`);
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
                    {consultancy.id === 'hibrido' ? (
                      <svg className="icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Ícone híbrido: pessoa + dispositivo móvel */}
                        <circle cx="9" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                        <path d="M3 20C3 16 6 13 9 13C10.5 13 11.8 13.6 12.7 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                        <rect x="15" y="6" width="6" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                        <path d="M17 9H19M17 11H19" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                        <circle cx="18" cy="14" r="1" fill="currentColor"/>
                      </svg>
                    ) : (
                      <svg className="icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Ícone monitor/computador */}
                        <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                        <path d="M8 18H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M12 18V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <rect x="5" y="7" width="14" height="8" rx="1" fill="currentColor" opacity="0.3"/>
                        <circle cx="12" cy="11" r="1.5" fill="currentColor"/>
                      </svg>
                    )}
                  </div>
                  <h3 className="membership-title">{consultancy.title}</h3>
                </div>
                
                <p className="membership-description">{consultancy.description}</p>
                
                <div className="membership-price">
                  <span className="price-value">R$ {formatPrice(currentPlan.perMonth)}/mês</span>
                  <span className="price-total">Total: R$ {formatPrice(currentPlan.price)}</span>
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