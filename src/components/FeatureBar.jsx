import React, { useEffect, useMemo, useState } from 'react';
import './FeatureBar.css';

const FeatureBar = () => {
  const features = [
    '100% PERSONALIZADO',
    'SUPORTE DIRETO',
    'RESULTADOS GARANTIDOS',
    'METODOLOGIA COMPROVADA',
    'GRUPO GRATUITO'
  ];

  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Memoized total for safety
  const total = useMemo(() => features.length, [features.length]);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!isMobile) return; // autoplay apenas no mobile
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 2500);
    return () => clearInterval(id);
  }, [isMobile, total]);

  return (
    <section className="feature-bar">
      <div className="container">
        {/* Desktop: layout atual */}
        <div className="feature-content feature-list">
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

        {/* Mobile: carrossel automático */}
        <div className="feature-carousel">
          <div
            className="feature-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {features.map((feature, index) => (
              <div key={index} className="feature-slide">
                <div className="feature-item">
                  <span>{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBar;



