import React, { useState } from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "RAYCLUB has completely transformed my fitness journey. I've gained incredible strength, energy, and the staff is incredibly knowledgeable. Best investment I've made!",
      author: "Debby Carluster",
      handle: "@debbycarluster",
      role: "Influencer",
      avatar: "DC",
      background: "light"
    },
    {
      id: 2,
      text: "I enlisted a personal trainer for weight loss and getting into better shape. The results speak for themselves - I feel stronger, healthier, and more confident than ever!",
      author: "Jamie Rivet",
      handle: "@jamierivet",
      role: "Influencer", 
      avatar: "JR",
      background: "accent"
    },
    {
      id: 3,
      text: "The community support and professional guidance at RAYCLUB is unmatched. Every workout feels personal and the progress tracking keeps me motivated daily.",
      author: "Marcus Johnson",
      handle: "@marcusj_fit",
      role: "Fitness Enthusiast",
      avatar: "MJ",
      background: "light"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">WHAT THEY SAY</h2>
        </div>
        
        <div className="testimonials-container">
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`testimonial-card ${testimonial.background} ${
                  index === currentTestimonial ? 'active' : ''
                }`}
              >
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <span className="quote-mark">"</span>
                  </div>
                  
                  <blockquote className="testimonial-text">
                    {testimonial.text}
                  </blockquote>
                  
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <span className="avatar-text">{testimonial.avatar}</span>
                    </div>
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.author}</h4>
                      <p className="author-handle">{testimonial.handle}</p>
                      <p className="author-role">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="testimonials-navigation">
            <button 
              className="nav-button prev"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              ←
            </button>
            
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className="nav-button next"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


