// src/pages/RegrasPage.jsx - PÁGINA COM O CÓDIGO DE CONDUTA

import React from 'react';

// Componente Regras (Código de Conduta)
const Regras = () => (
    <section className="regras-section" style={{ minHeight: '80vh', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}> 
            <h2>Código de Conduta da Girls Tech</h2>
            <p className="regras-intro">Para manter um ambiente seguro e de sororidade, estas regras são inegociáveis:</p>
            
            {/* O bloco UL e seus LIs precisam de margem automática para centralizar */}
            <ul className="regras-list" style={{ display: 'inline-block', textAlign: 'left', padding: '0 20px' }}>
                <li>🚫 Proibido Linguagem Ofensiva/Palavrões: Mantenha o tom profissional e respeitoso.</li>
                <li>🚫 Proibido Tópicos Políticos/Religiosos: O foco é exclusivamente em tecnologia e desenvolvimento pessoal.</li>
                <li>✅ Sororidade e Respeito: Ajude e eleve as outras integrantes.</li>
                <li>✅ Foco em TI: Mantenha as discussões relevantes para a área.</li>
            </ul>
            
            <p className="regras-warning">O não cumprimento das regras resulta em exclusão imediata da Rede.</p>
        </div>
    </section>
);

function RegrasPage() {
    return (
        // Aplicamos textAlign: 'center' para centralizar o contêiner Regras, se ele tiver menos de 100% de largura
        <div className="regras-page" style={{ paddingTop: '100px', textAlign: 'center' }}>
            <Regras />
        </div>
    );
}

export default RegrasPage;