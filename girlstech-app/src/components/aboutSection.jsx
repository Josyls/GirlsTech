// src/components/aboutSection.jsx - QUEM SOMOS (Texto sem asteriscos)
import React from 'react';

function AboutSection() {
    return (
        // ID para a âncora do Menu
        <section id="quem-somos" className="about-section" style={{ backgroundColor: '#fff', paddingBottom: '50px' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2>Quem Somos - Nossa Missão</h2>
                <p className="about-intro" style={{ maxWidth: '800px', margin: '0 auto 30px', fontSize: '1.2rem', color: '#666' }}>
                    A Girls Tech nasceu da necessidade de criar um ambiente de Sororidade e suporte mútuo na área de Tecnologia. Entendemos que muitas mulheres enfrentam isolamento ou a Síndrome da Impostora. Nossa missão, inspirada na sua ideia de "Rede de Sororidade", é ser o ponto de apoio onde a informação flui livremente, o networking é seguro e a troca de experiências acelera o desenvolvimento de carreira de todas as participantes.
                </p>
                
                <h3 style={{ marginTop: '40px', color: '#D1005E' }}>Por Que Existimos?</h3>
                <p className="about-details" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
                    Em um mercado dominado por homens, a solidão e a sensação de não pertencimento são reais. No início da jornada de TI, os "percalços" são muitos, e é fácil desistir. A Girls Tech oferece a rede de apoio que transforma ansiedade em ação e dúvidas em conhecimento.
                </p>

                <h3 style={{ marginTop: '40px', color: '#D1005E' }}>Nosso Compromisso Técnico</h3>
                <p className="about-details" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
                    Este website foi construído com o framework React para atender aos requisitos de desenvolvimento moderno, utilizando Componentização, Rotas (React Router) e gerenciamento de estado (useState) para garantir a excelência técnica exigida pelo projeto acadêmico.
                </p>
            </div>
        </section>
    );
}

export default AboutSection;