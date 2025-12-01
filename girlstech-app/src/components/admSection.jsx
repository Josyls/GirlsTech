// src/components/admSection.jsx - APRESENTAÇÃO DAS ADMS E DEPOIMENTOS

import React from 'react';
// Importa o JSON (Requisito do Professor)
import jsonData from '../data/data.json'; 

// Componente para um Card de Depoimento (participantes)
// MUDANÇA: Adicionado 'avatar_url' para receber e exibir a foto
const DepoimentoCard = ({ nome, titulo, texto, avatar_url }) => (
  <div className="depoimento-card">
    
    {/* NOVO CÓDIGO: EXIBIÇÃO DA FOTO DO AVATAR */}
    <div 
        className="depoimento-avatar-placeholder" 
        style={{
            backgroundImage: `url(${avatar_url})`, // Usa a URL da imagem
            width: '60px', 
            height: '60px', 
            borderRadius: '50%', 
            margin: '0 auto 10px auto', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: '2px solid #D1005E' // Estilo para aparecer como um círculo
        }}
    ></div>

    <h3>{titulo}</h3>
    <p>"{texto}"</p>
    <p className="depoimento-author">- {nome}</p>
  </div>
);

// Componente para um Card de Administradora
const AdmCard = ({ nome, cargo, bio, depoimento, imagem_url }) => (
  <div className="adm-card">
    {/* APLICAÇÃO FINAL DA IMAGEM: O caminho /images/... funciona porque está na pasta public */}
    <div className="adm-photo-placeholder" style={{backgroundImage: `url(${imagem_url})`}}></div>
    <h3>{nome}</h3>
    <p className="adm-cargo">{cargo}</p>
    <p className="adm-bio">{bio}</p>
    <p className="adm-quote">"{depoimento}"</p>
  </div>
);

function AdmSection({ whatsappLink }) {
    // Carregamos os dados do JSON
    const adms = jsonData.adms;
    const depoimentos = jsonData.participantes_depoimentos;
    
    return (
        // ID para a âncora do Menu
        <div id="adms-depoimentos" className="adms-depoimentos-container">
            
            {/* Seção 1: Apresentação das ADMs */}
            <section className="adms-section">
                <div className="container">
                    <h2>Conheça Nossa Liderança (As ADMs)</h2>
                    <p className="section-subtitle">Conheça as líderes que mantêm este ambiente seguro e produtivo.</p>
                    <div className="adms-grid">
                        {adms.map(adm => (
                            <AdmCard key={adm.id} {...adm} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Seção 2: Depoimentos de Participantes */}
            <section className="depoimentos-section">
                <div className="container">
                    <h2>O que nossas meninas dizem:</h2>
                    <p className="section-subtitle">A prova social da nossa Rede de Sororidade.</p>
                    {/* Depoimentos: MUDANÇA: Agora mostra TODOS os depoimentos, e não só 3 */}
                    <div className="depoimentos-grid"> 
                        {depoimentos.map(dep => ( 
                            <DepoimentoCard key={dep.id} {...dep} />
                        ))}
                    </div>
                    
                     <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cta-button" style={{marginTop: '30px'}}>
                        Junte-se a elas!
                    </a>
                </div>
            </section>
        </div>
    );
}

export default AdmSection;