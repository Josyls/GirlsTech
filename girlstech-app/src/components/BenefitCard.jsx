// src/components/BenefitCard.jsx
import React from 'react';

function BenefitCard({ icon, title, description, index }) {
  // Hook para o efeito de flutuação (opcional, requer JS na App.jsx)
  const cardRef = React.useRef(null);
  
  // O estilo de flutuação será aplicado no App.jsx usando useEffect para interagir com a rolagem
  
  return (
    <div className="card" ref={cardRef}>
      <h3>{icon} {title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default BenefitCard;