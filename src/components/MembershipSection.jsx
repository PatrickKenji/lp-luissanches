import React from 'react';
import './MembershipSection.css';

const MembershipSection = () => {
  const membershipPlans = [
    {
      id: 1,
      title: '1 Day Pass',
      price: 'FREE',
      description: 'Experimente nossos treinos gratuitamente',
      features: ['Acesso por 24h', 'Todos os programas', 'Suporte básico'],
      recommended: false,
      icon: '01'
    },
    {
      id: 2,
      title: '1 Month Pass',
      price: '$20.00',
      description: 'Acesso completo por um mês inteiro',
      features: ['Acesso completo', 'Todos os programas', 'Suporte prioritário', 'Aulas ao vivo'],
      recommended: true,
      icon: '02'
    },
    {
      id: 3,
      title: '1 Week Pass',
      price: '$10.00',
      description: 'Perfeito para começar sua jornada',
      features: ['Acesso por 7 dias', 'Programas básicos', 'Suporte por email'],
      recommended: false,
      icon: '03'
    }
  ];

  const handleWhatsAppClick = (plan) => {
    const phoneNumber = '5511999999999'; // Substitua pelo número real
    const message = encodeURIComponent(`Olá! Gostaria de contratar o ${plan.title} por ${plan.price}.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="membership-section" id="membership">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">MEMBERSHIP</h2>
          <p className="section-description">
            Game up your routine with our growing library of workouts led by our world-class trainers.
          </p>
        </div>
        
        <div className="membership-grid">
          {membershipPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`membership-card ${plan.recommended ? 'recommended' : ''}`}
            >
              {plan.recommended && (
                <div className="recommended-badge">
                  RECOMMENDED BY USERS
                </div>
              )}
              
              <div className="membership-header">
                <div className="membership-icon">
                  <span>B</span>
                  <span className="icon-number">{plan.icon}</span>
                </div>
                <h3 className="membership-title">{plan.title}</h3>
              </div>
              
              <div className="membership-price">
                <span className="price">{plan.price}</span>
              </div>
              
              <p className="membership-description">{plan.description}</p>
              
              <ul className="membership-features">
                {plan.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <span className="feature-check">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`membership-cta ${plan.recommended ? 'recommended' : ''}`}
                onClick={() => handleWhatsAppClick(plan)}
              >
                SELECT
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;


