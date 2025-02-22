import React from 'react';
import './developpers.css';

const Developpers = () => {
  const developerSections = [
    {
      title: "Easy API Integration",
      icon: "fa-code",
      paragraphs: [
        "AlertX provides a robust, developer-friendly API that can be seamlessly integrated into any application ecosystem. Our comprehensive documentation and SDKs support multiple programming languages including JavaScript, Python, Java, and more.",
        "With just a few lines of code, developers can implement powerful notification capabilities, reducing development time and complexity. Our RESTful API ensures smooth communication and minimal overhead.",
        "We offer extensive code samples, interactive documentation, and dedicated support to help developers get started quickly and efficiently."
      ]
    },
    {
      title: "Global Reach & Internationalization",
      icon: "fa-globe",
      paragraphs: [
        "Break language barriers with AlertX's advanced internationalization features. Our platform supports over 50 languages and provides automatic translation services for notification content.",
        "Customize notifications based on user's language preferences, regional settings, and cultural nuances. Our intelligent localization engine ensures that your messages resonate with a global audience.",
        "Seamlessly manage multi-language communication without additional development overhead. AlertX handles the complexity of international messaging."
      ]
    },
    {
      title: "User Engagement Metrics",
      icon: "fa-chart-line",
      paragraphs: [
        "Gain deep insights into your notification performance with our comprehensive engagement analytics. Track delivery rates, open rates, click-through rates, and user interactions in real-time.",
        "Our advanced metrics dashboard provides granular data on user behavior, helping you optimize your communication strategy. Understand which messages resonate, at what times, and with which user segments.",
        "Leverage machine learning-powered recommendations to improve your notification effectiveness and drive higher user engagement across your application."
      ]
    }
  ];

  return (
    <div className="developpers-section">
      <div className="developpers-header">
        <h2 className="section-title">
          For <span className="title-highlight">Developers</span>
        </h2>
        <p className="section-subtitle">
          Powerful Tools, Seamless Integration, Global Reach
        </p>
      </div>
      
      <div className="developpers-grid">
        {developerSections.map((section, index) => (
          <div key={index} className="developpers-card">
            <div className="developpers-icon-container">
              <i className={`fas ${section.icon}`}></i>
            </div>
            <div className="developpers-content">
              <h3 className="developpers-title">{section.title}</h3>
              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className="developpers-paragraph">{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Developpers;