import React from 'react';
import './InstagramSection.css';

const InstagramSection = () => {
  const instagramPosts = [
    {
      id: 1,
      image: 'fitness-woman',
      description: 'Woman with resistance band',
      emoji: '💪'
    },
    {
      id: 2,
      image: 'yoga-pose',
      description: 'Yoga session',
      emoji: '🧘‍♀️'
    },
    {
      id: 3,
      image: 'flexing-man',
      description: 'Strength training',
      emoji: '🏋️‍♂️'
    },
    {
      id: 4,
      image: 'group-workout',
      description: 'Community workout',
      emoji: '👥'
    }
  ];

  return (
    <section className="instagram-section" id="instagram">
      <div className="container">
        <div className="instagram-content">
          <div className="instagram-header">
            <div className="section-header">
              <h2 className="section-title">ON INSTAGRAM</h2>
            </div>
            <div className="instagram-hashtag">
              <span className="hashtag">#JOINRAYCLUB</span>
            </div>
          </div>
          
          <div className="instagram-grid">
            {instagramPosts.map((post) => (
              <div key={post.id} className="instagram-post">
                <div className="post-image">
                  <div className="post-placeholder">
                    <span className="post-emoji">{post.emoji}</span>
                  </div>
                  <div className="post-overlay">
                    <span className="post-icon">📷</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;




