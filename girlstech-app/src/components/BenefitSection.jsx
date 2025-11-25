// src/components/BenefitSection.jsx
import React from 'react';
import BenefitCard from './BenefitCard';

const benefitsData = [
    { icon: '🚀', title: 'Networking de Valor', description: 'Conecte-se com mulheres em diferentes estágios da carreira, prontas para compartilhar experiências e oportunidades.' },
    { icon: '💡', title: 'Troca de Informação Segura', description: 'Um ambiente acolhedor, moderado e livre de preconceitos, onde você pode tirar dúvidas e trocar dicas sem julgamentos.' },
    { icon: '💖', title: 'Apoio Emocional', description: 'Encontre outras mulheres que sentem os "percalços" da jornada, para se sentir motivada e apoiada a seguir em frente.' },
];

function BenefitSection() {
  return (
    <section className="beneficios">
      <div className="container">
        <h2>Seu lugar seguro para crescer em TI.</h2>
        <div className="cards-grid">
          {benefitsData.map((benefit, index) => (
            <BenefitCard 
              key={index} 
              icon={benefit.icon} 
              title={benefit.title} 
              description={benefit.description} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitSection;