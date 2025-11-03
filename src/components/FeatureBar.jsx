import React from 'react';
import './FeatureBar.css';

const FeatureBar = () => {
  const features = [
    'NEW VIDEOS DAILY',
    'BEGINNERS FRIENDLY',
    'LIVE CONSULTANCY',
    '20+ TRAINERS',
    'TRAIN ANY'
  ];

  return (
    <section className="feature-bar">
      <div className="container">
        <div className="feature-content">
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <div className="feature-item">
                <span>{feature}</span>
              </div>
              {index < features.length - 1 && (
                <div className="feature-separator">
                  <span>→</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBar;



