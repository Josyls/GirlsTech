// src/components/BenefitCard.jsx
import React from 'react';

// Recebe as propriedades (props) que foram passadas no App.jsx
function BenefitCard({ icon, title, description, whatsappLink }) {
  
  return (
    <div className="benefit-card parallax-effect">
      
      {/* Ícone */}
      <div className="benefit-card-icon">{icon}</div>
      
      {/* Título e Descrição */}
      <h3>{title}</h3>
      <p>{description}</p>
      
      {/* Botão de Saiba Mais que redireciona para o WhatsApp */}
      <div style={{ marginTop: 'auto', paddingTop: '15px' }}>
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ color: '#FF78A6', fontWeight: 'bold' }}
        >
          Saber Mais e Entrar →
        </a>
      </div>
    </div>
  );
}

export default BenefitCard;