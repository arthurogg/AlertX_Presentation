import React from 'react';
import './contributors.css';

// Placeholder images - replace with actual contributor images
const placeholderImage = 'https://via.placeholder.com/300';

const Contributors = () => {
  const contributorsData = [
    {
      name: "Mbo Alain Gérard",
      role: "Team Leader",
      image: "/Alain.jpeg",
      description: "L'ainé de l'équipe, Alain est le manager en chef du projet.",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Negoum Arthur",
      role: "Responsable du frontend et du service sms",
      image: "/arthur1.jpeg",
      description: "Il s'est chargé du rendu visuel que vous regardez actuellement et a travaillé sur le service sms avec Twilio.",
      linkedin: "https://www.linkedin.com/in/yves-arthur-negoum-wouatedem-854967302/",
      github: "https://github.com/arthurogg"
    },
    {
      name: "Nguiffo Varnel",
      role: "Responsable notifications whatsapp with META",
      image: "/nguiffo.jpeg",
      description: "Rick a travaillé sur les notifications WhatsApp en utilisant Whatsapp Cloud API de META.",
      linkedin: "https://github.com/Ngakou-Rick",
      github: "https://github.com/Ngakou-Rick"
    },
    {
      name: "Audain Meli",
      role: "Responsable service email",
      image: "/audain.jpeg",
      description: "Audain a travaillé sur le service email avec JavaMail et sur la personnalisation de l'email.",
      linkedin: "#",
      github: "https://github.com/Audain672"
    },
    {
        name: "Nanfah Elsa",
        role: "Responsable notifications push",
        image: "/elsa1.jpeg",
        description: "La seule dame de l'équipe, Elsa garantit la protection et l'efficacité de nos solutions.",
        linkedin: "#",
        github: "#"
    }
  ];

  return (
    <div className="contributors-page">
      <div className="contributors-header">
        <h1 className="section-title">
          Notre <span className="title-highlight">Équipe</span>
        </h1>
        <p className="section-subtitle">
          Les innovateurs derrière AlertX, unis par la passion de la notification intelligente
        </p>
      </div>
      
      <div className="contributors-grid">
        {contributorsData.map((contributor, index) => (
          <div key={index} className="contributor-card">
            <div className="contributor-image-container">
              <img 
                src={contributor.image} 
                alt={contributor.name} 
                className="contributor-image"
              />
            </div>
            <div className="contributor-info">
              <h3 className="contributor-name">{contributor.name}</h3>
              <p className="contributor-role">{contributor.role}</p>
              <p className="contributor-description">{contributor.description}</p>
              <div className="contributor-socials">
                <a href={contributor.linkedin} className="social-link">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href={contributor.github} className="social-link">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contributors;