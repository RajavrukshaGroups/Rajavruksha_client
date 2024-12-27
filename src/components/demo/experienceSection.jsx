                
  import React from 'react';
  import './style.css';
     
const ExperienceSection = () => {
  return (
    <div className="experience-section">
      <div className="content">
        <div className="icon">
          <i className="tree-icon"></i> {/* Replace this with an actual icon/image if needed */}
        </div>
        <h2 className="headline">We explore to discover your optimal selection</h2>
        <ul className="features-list">
          <li><i className="check-icon"></i> Innovative Concepts</li>
          <li><i className="check-icon"></i> Value For Money Projects</li>
          <li><i className="check-icon"></i> Expert Team Members</li>
          <li><i className="check-icon"></i> Affordable Quality Services</li>
          <li><i className="check-icon"></i> Hassle Free Process</li>
        </ul>
        <button className="read-more-button">READ MORE</button>
      </div>
      <div className="experience-badge">
        <span className="years">6+</span>
        <span className="experience-text">Years of Experience</span>
      </div>
    </div>
  );
}

export default ExperienceSection;
