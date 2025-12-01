// src/pages/blogPage.jsx - PÁGINA DO BLOG E PAINEL CRUD FINAL (CORREÇÃO DE SINTAXE)

import React, { useState, useEffect } from 'react'; 
import jsonData from '../data/data.json'; 
import BlogLayout from '../components/BlogLayout'; 
import ArticleDetailsPage from './ArticleDetailsPage'; 
import { Routes, Route, useNavigate, Link, useLocation } from 'react-router-dom';

// Carregamos os dados iniciais do JSON
const initialArtigos = jsonData.artigos_blog;

// ----------------------------------------------------------------
// 0. Funções de Persistência
// ----------------------------------------------------------------
const getInitialArtigos = () => {
    const localData = localStorage.getItem('blogArtigosGirlsTech');
    if (localData) {
        const parsedData = JSON.parse(localData);
        if (Array.isArray(parsedData) && parsedData.length > 0) {
             return parsedData;
        }
    }
    return initialArtigos;
};


// ----------------------------------------------------------------
// 1. Componente Modal de Edição
// ----------------------------------------------------------------
const EdicaoModal = ({ artigo, onClose, onSave }) => {
    const [titulo, setTitulo] = useState(artigo.titulo);
    const [autor, setAutor] = useState(artigo.autor);
    const [conteudo, setConteudo] = useState(artigo.conteudo || "Insira o desenvolvimento do artigo aqui...");

    const handleSave = (e) => {
        e.preventDefault();
        onSave({ ...artigo, titulo, autor, conteudo }); 
    };

    return (
        <div className="modal-overlay">
            <div className="login-modal" style={{ maxWidth: '600px' }}>
                <h2>Editar Artigo ID {artigo.id}</h2>
                <form onSubmit={handleSave}>
                    <input
                        type="text"
                        placeholder="Título do Artigo"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Autor"
                        value={autor}
                        onChange={(e) => setAutor(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Corpo do Artigo (Desenvolvimento)"
                        value={conteudo}
                        onChange={(e) => setConteudo(e.target.value)}
                        required
                        style={{ minHeight: '150px' }}
                    />
                    
                    <button type="submit" className="cta-button" style={{ marginRight: '10px', width: 'auto' }}>Salvar Alterações</button>
                    <button type="button" className="action-btn delete-btn" style={{ width: 'auto' }} onClick={onClose}>Cancelar</button>
                </form>
            </div>
        </div>
    );
};


// ----------------------------------------------------------------
// 2. Componente Tabela CRUD (Para ADM Logada)
// ----------------------------------------------------------------
const CrudTable = ({ artigos, onApprove, onEdit, onDelete, handleCreateNew }) => (
    <div className="crud-table-container page-content">
        <div className="container">
            <h3>Painel de Gestão de Artigos (CRUD)</h3>
            <p>Ações de Criação (C), Leitura (R), Alteração (U) e Exclusão (D).</p>
            
            <button onClick={handleCreateNew} className="cta-button" style={{marginBottom: '20px', padding: '10px 20px'}}>
                + Novo Artigo (C)
            </button>

            <table className="crud-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Data</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {artigos.map(artigo => (
                        <tr key={artigo.id}>
                            <td>{artigo.id}</td>
                            <td>{artigo.titulo}</td>
                            <td>{artigo.autor}</td>
                            <td>{artigo.data}</td>
                            <td><span className={`status-${artigo.status}`}>{artigo.status}</span></td>
                            <td>
                                <button onClick={() => onApprove(artigo)} className={`action-btn ${artigo.status === 'Aprovado' ? 'edit-btn' : 'cta-button'}`}
                                    style={{ backgroundColor: artigo.status === 'Aprovado' ? '#2196F3' : '#4CAF50' }}
                                >
                                    {artigo.status === 'Aprovado' ? 'Revisão (U)' : 'Aprovar (U)'}
                                </button>
                                <button onClick={() => onEdit(artigo)} className="action-btn edit-btn" style={{ marginRight: '10px', backgroundColor: '#FF70A3' }}>
                                    Editar Info
                                </button>
                                <button onClick={() => onDelete(artigo.id)} className="action-btn delete-btn">Excluir (D)</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);


// ----------------------------------------------------------------
// 3. Componente Formulário de Contribuição (Para Todos)
// ----------------------------------------------------------------
const ArtigoForm = ({ onSubmit }) => (
    <div className="artigo-form" style={{ boxShadow: 'none', border: 'none', padding: '10px 0' }}>
        <h3>Contribua!</h3>
        <p>Preencha os campos abaixo para contribuir com a nossa Rede!</p>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Título do Artigo" required />
            <input type="text" placeholder="Seu Nome ou Pseudônimo" required />
            <textarea placeholder="Conteúdo do Artigo (Corpo do Texto)" required></textarea>
            <Link to="/regras" style={{fontSize: '0.9rem', display: 'block', marginBottom: '10px'}}>Leia nosso Código de Conduta antes de enviar.</Link>
            <button type="submit" className="cta-button">Enviar Artigo</button>
        </form>
    </div>
);


// ----------------------------------------------------------------
// 4. Componente Regras (Código de Conduta)
// ----------------------------------------------------------------
const Regras = () => (
    <section className="regras-section">
        <div className="container">
            <h2>Código de Conduta da Girls Tech</h2>
            <p className="regras-intro">Para manter um ambiente seguro e de sororidade, estas regras são inegociáveis:</p>
            <ul className="regras-list">
                <li>🚫 Proibido Linguagem Ofensiva/Palavrões: Mantenha o tom profissional e respeitoso.</li>
                <li>🚫 Proibido Tópicos Políticos/Religiosos: O foco é exclusivamente em tecnologia e desenvolvimento pessoal.</li>
                <li>✅ Sororidade e Respeito: Ajude e eleve as outras integrantes.</li>
                <li>✅ Foco em TI: Mantenha as discussões relevantes para a área.</li>
            </ul>
            <p className="regras-warning">O não cumprimento das regras resulta em exclusão imediata da Rede.</p>
        </div>
    </section>
);


// ----------------------------------------------------------------
// 5. Componente auxiliar para redirecionar para o último artigo aprovado
// ----------------------------------------------------------------
const RedirectToLatestArticle = ({ artigos }) => {
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {
        const artigosAprovados = artigos.filter(a => a.status === 'Aprovado');
        
        if (artigosAprovados.length > 0) {
            const latestArticle = artigosAprovados[0]; 

            if (location.pathname === '/blog' || location.pathname === '/blog/') {
                navigate(`artigo/${latestArticle.id}`, { replace: true });
            }
        }
    }, [artigos, navigate, location.pathname]);
    
    return (
        <div style={{padding: '50px', textAlign: 'center'}}>
            <h2>Carregando Blog...</h2>
            <p>Selecione um artigo no menu lateral.</p>
        </div>
    );
};


// ----------------------------------------------------------------
// 6. Componente Principal da Página
// ----------------------------------------------------------------
function BlogPage({ isLoggedIn, handleLogin }) {
    const [artigos, setArtigos] = useState(getInitialArtigos); 
    const [editingArticle, setEditingArticle] = useState(null); 
    
    useEffect(() => {
        localStorage.setItem('blogArtigosGirlsTech', JSON.stringify(artigos));
    }, [artigos]); 

    // Funções CRUD - Mantidas

    const handleCreateNew = () => {
        const newId = Math.floor(Math.random() * 1000000);
        const newArticle = {
            id: newId,
            titulo: "Novo Artigo (EM EDIÇÃO)",
            autor: "ADM",
            data: new Date().toISOString().slice(0, 10),
            status: "Pendente",
            conteudo: "Insira o texto principal do seu novo artigo aqui."
        };
        setArtigos([newArticle, ...artigos]); 
    };

    const handleApprove = (artigo) => { 
        const novoStatus = artigo.status === 'Aprovado' ? 'Pendente' : 'Aprovado';
        
        const updatedArtigos = artigos.map(a => 
            a.id === artigo.id ? { ...a, status: novoStatus } : a
        );
        setArtigos(updatedArtigos);
    };

    const handleOpenEdit = (artigo) => { setEditingArticle(artigo); };
    
    const handleSaveEdit = (updatedArtigo) => {
        const updatedList = artigos.map(a => 
            a.id === updatedArtigo.id ? updatedArtigo : a
        );
        setArtigos(updatedList);
        setEditingArticle(null); 
    };


    const handleDelete = (id) => { 
        if (window.confirm(`Tem certeza que deseja EXCLUIR o artigo ID ${id}?`)) {
            const remainingArtigos = artigos.filter(a => a.id !== id);
            setArtigos(remainingArtigos);
        }
    };


    // Visão da ADM Logada
    if (isLoggedIn) {
        return (
            <div className="blog-page">
                {/* 1. PAINEL DE GESTÃO (CRUD) - VISÃO ADM */}
                <CrudTable 
                    artigos={artigos} 
                    onApprove={handleApprove} 
                    onEdit={handleOpenEdit} 
                    onDelete={handleDelete} 
                    handleCreateNew={handleCreateNew}
                />
                
                {/* MODAL DE EDIÇÃO */}
                {editingArticle && (
                    <EdicaoModal 
                        artigo={editingArticle} 
                        onClose={() => setEditingArticle(null)} 
                        onSave={handleSaveEdit} 
                    />
                )}
                
                <div className="container" style={{textAlign: 'center', paddingBottom: '30px'}}>
                   <button onClick={() => handleLogin(false)} className="logout-btn" style={{marginTop: '20px', padding: '10px 20px'}}>Sair do Painel ADM</button>
                </div>
            </div>
        );
    }

    // Visão do Usuário Deslogado/Público
    return (
        <div className="blog-page">
            
            <div className="container" style={{paddingTop: '30px', paddingBottom: '30px'}}>
                 <h2 style={{textAlign: 'center'}}>Blog: Conteúdo e Contribuições</h2>
            </div>
            
            {/* Usa o BlogLayout para criar o menu lateral e o conteúdo principal */}
            <BlogLayout artigos={artigos}>
                
                {/* 1. Área de Conteúdo Principal (Rotas Aninhadas) */}
                <Routes>
                    {/* Rota para o Artigo Específico (Artigo Detalhe) */}
                    <Route path="artigo/:id" element={<ArticleDetailsPage />} />
                    
                    {/* Rota Padrão: Redireciona para o último artigo aprovado */}
                    <Route path="/" element={<RedirectToLatestArticle artigos={artigos} />} />
                </Routes>
                
                {/* 2. Área de Contribuição no Menu Lateral */}
                <ArtigoForm onSubmit={(e) => { e.preventDefault(); handleCreateNew(); }} />

            </BlogLayout>
            
        </div>
    );
}

export default BlogPage;