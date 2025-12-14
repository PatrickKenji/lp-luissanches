import React from 'react';
import './CommunitySection.css';

const CommunitySection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5511999999999'; // Substitua pelo número real
    const message = encodeURIComponent('Olá! Quero fazer parte da comunidade e começar minha transformação!');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const communityMembers = [
    { id: 1, name: 'Sarah', avatar: 'S', color: '#FF6B6B' },
    { id: 2, name: 'Mike', avatar: 'M', color: '#4ECDC4' },
    { id: 3, name: 'Emma', avatar: 'E', color: '#45B7D1' },
    { id: 4, name: 'Alex', avatar: 'A', color: '#96CEB4' },
    { id: 5, name: 'Lisa', avatar: 'L', color: '#FECA57' }
  ];

  return (
    <section className="community-section" id="community">
      <div className="container">
        <div className="community-content">
          <div className="community-text">
            <div className="section-header">
              <h2 className="section-title">SUPPORTIVE COMMUNITY</h2>
            </div>
            <p className="community-description">
              Stay motivated and engaged with a little help from a supportive community of other members.
            </p>
            <button 
              className="btn btn-primary btn-lg community-cta"
              onClick={handleWhatsAppClick}
            >
              JOIN NOW
              <span className="btn-arrow">→</span>
            </button>
          </div>
          
          <div className="community-images">
            <div className="community-avatars">
              {communityMembers.map((member, index) => (
                <div 
                  key={member.id}
                  className={`community-avatar avatar-${index + 1}`}
                  style={{ 
                    backgroundColor: member.color,
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <span className="avatar-text">{member.avatar}</span>
                  <span className="avatar-name">{member.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;







