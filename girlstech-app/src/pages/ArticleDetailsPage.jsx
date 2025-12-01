// src/pages/ArticleDetailsPage.jsx - PÁGINA DE DETALHES (Sugestões de Leitura)

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import jsonData from '../data/data.json'; 

// Funções de Persistência (getPersistentArtigos, mesma da Instrução 56)
const getPersistentArtigos = () => {
    const localData = localStorage.getItem('blogArtigosGirlsTech');
    if (localData) {
        const parsedData = JSON.parse(localData);
        if (Array.isArray(parsedData) && parsedData.length > 0) {
             return parsedData;
        }
    }
    return jsonData.artigos_blog;
};

function ArticleDetailsPage() {
    const { id } = useParams(); 
    
    const artigosPersistentes = getPersistentArtigos(); 
    const artigo = artigosPersistentes.find(a => a.id === parseInt(id));
    
    // Filtra outros artigos aprovados para sugestões de leitura (exceto o atual)
    const sugestoes = artigosPersistentes
        .filter(a => a.id !== parseInt(id) && a.status === 'Aprovado')
        .slice(0, 3); // Limita a 3 sugestões

    if (!artigo) {
        return (
            <div className="container page-content" style={{textAlign: 'center', paddingTop: '100px'}}>
                <h2>Artigo Não Encontrado</h2>
                <p>O ID {id} não corresponde a nenhum artigo publicado.</p>
                <Link to="/blog" className="cta-button" style={{marginTop: '20px'}}>Voltar ao Blog</Link>
            </div>
        );
    }
    
    const artigoCompleto = artigo.conteudo || "Este artigo é excelente, mas o conteúdo completo ainda não foi inserido no Painel ADM. Você pode editá-lo no Painel ADM!";

    return (
        <div className="container article-details-content" style={{paddingTop: '30px'}}>
            <h1 style={{color: '#D1005E', fontSize: '2.5rem', marginBottom: '10px'}}>{artigo.titulo}</h1>
            <p style={{color: '#666', marginBottom: '30px'}}>Por: {artigo.autor} | Publicado em: {artigo.data}</p>
            
            <div 
                className="article-body" 
                style={{lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '50px'}}
            >
                {/* Renderiza o conteúdo formatado com quebras de linha */}
                {artigoCompleto.split('\n').map((line, index) => (
                    <p key={index} style={{ marginBottom: '1em' }}>{line}</p>
                ))}
            </div>

            {/* Sugestões de Leitura: Agora com Links Reais */}
            <div style={{borderTop: '2px solid #FF70A3', paddingTop: '30px'}}>
                <h2>Outras Leituras Recomendadas</h2>
                <div className="cards-grid" style={{marginTop: '20px', justifyContent: 'flex-start'}}>
                    {sugestoes.map(sugestao => (
                        <Link to={`/blog/artigo/${sugestao.id}`} key={sugestao.id} className="article-card-link" style={{width: '250px'}}>
                            <h3 style={{fontSize: '1.2rem'}}>{sugestao.titulo}</h3>
                            <p>Por: {sugestao.autor}</p>
                        </Link>
                    ))}
                    {sugestoes.length === 0 && <p>Nenhuma sugestão encontrada.</p>}
                </div>
                <Link to="/blog" style={{color: '#4A1437', fontWeight: 'bold', marginTop: '20px', display: 'block'}}>← Voltar para o Catálogo de Artigos</Link>
            </div>
        </div>
    );
}

export default ArticleDetailsPage;