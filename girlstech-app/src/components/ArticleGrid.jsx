// src/components/ArticleGrid.jsx - MOSTRA OS ARTIGOS APROVADOS PARA O PÚBLICO

import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link para permitir cliques

// Componente simples para renderizar o Card de Artigo
const ArticleCard = ({ id, titulo, autor, data }) => (
    // Usamos o componente Link para simular a navegação para a página do artigo
    <Link to={`/blog/artigo/${id}`} className="article-card-link">
        <h3>{titulo}</h3>
        <p style={{fontSize: '0.9rem', color: '#666', marginBottom: '10px'}}>Por: {autor} | {data}</p>
        <p style={{color: '#4A1437', fontWeight: 'bold'}}>Clique para ler mais...</p>
    </Link>
);

function ArticleGrid({ artigos }) {
    // Filtramos para mostrar APENAS os artigos APROVADOS para o público
    const artigosAprovados = artigos.filter(a => a.status === 'Aprovado');

    if (artigosAprovados.length === 0) {
        return <p style={{textAlign: 'center', padding: '30px', color: '#666'}}>Nenhum artigo aprovado no momento. Contribua!</p>;
    }

    return (
        <div className="artigos-grid-container">
            <h2 style={{color: '#D1005E'}}>Artigos Recentes (Blog)</h2>
            <p className="section-subtitle">Clique no card para ler o artigo completo.</p>
            {/* Usamos a classe cards-grid para o layout de 3 colunas */}
            <div className="cards-grid" style={{marginTop: '30px'}}>
                {artigosAprovados.map(artigo => (
                    // O card agora é um link navegável
                    <ArticleCard key={artigo.id} {...artigo} />
                ))}
            </div>
        </div>
    );
}

export default ArticleGrid;