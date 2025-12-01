// src/components/BlogLayout.jsx - LAYOUT DE DUAS COLUNAS PARA O BLOG

import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function BlogLayout({ artigos, children }) {
    const navigate = useNavigate();
    
    // Filtramos para mostrar APENAS os artigos APROVADOS (Visão pública)
    const artigosAprovados = artigos.filter(a => a.status === 'Aprovado');

    // Efeito para garantir que o último artigo seja o default (Regra do Professor)
    useEffect(() => {
        // Se a URL for exatamente /blog, navega para o último artigo
        if (window.location.pathname === '/blog' && artigosAprovados.length > 0) {
            const latestArticle = artigosAprovados[0]; 
            navigate(`artigo/${latestArticle.id}`, { replace: true });
        }
    }, [artigosAprovados, navigate]);
    
    
    return (
        <div className="container page-content blog-layout-container">
            
            {/* 1. SIDEBAR / MENU DE ARTIGOS */}
            <aside className="blog-sidebar">
                <h3>Catálogo de Artigos</h3>
                <ul className="article-list">
                    {artigosAprovados.map(artigo => (
                        <li key={artigo.id}>
                            <Link to={`/blog/artigo/${artigo.id}`} className="sidebar-link">
                                {artigo.titulo}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div style={{marginTop: '30px', borderTop: '1px solid #ccc', paddingTop: '15px', textAlign: 'center'}}>
                    {/* O formulário de contribuição ficava aqui */}
                    <p style={{fontWeight: 'bold', color: '#666'}}>Envie sua Contribuição (Painel ADM)</p>
                </div>
            </aside>

            {/* 2. CONTEÚDO PRINCIPAL (ARTIGO RENDERIZADO PELO REACT ROUTER) */}
            <main className="blog-main-content">
                {/* O React Router renderizará o conteúdo da rota aninhada aqui */}
                {children} 
            </main>
            
        </div>
    );
}

export default BlogLayout;