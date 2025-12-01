// src/App.jsx - ESTRUTURA PRINCIPAL E ROTAS (COM ROTA /REGRAS)

import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'; 

// Importações dos componentes de UI
import Header from './components/Header';
import CtaSticky from './components/CtaSticky';

// Importações das páginas 
import Home from './pages/homePage'; 
import Blog from './pages/blogPage';
import Regras from './pages/RegrasPage'; // NOVO: Página Regras
import ArticleDetails from './pages/ArticleDetailsPage'; // Rota Dinâmica

import './index.css'; // Estilos globais

function App() {
  const whatsappLink = "https://chat.whatsapp.com/FLYgrWYHrZbBzP46fEBAd0";
  
  // ESTADO DE AUTENTICAÇÃO (Uso de state - Requisito do Professor)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogin = (status) => {
    setIsLoggedIn(status); 
  };

  // Lógica de Efeito de Flutuação (Mantida)
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.benefit-card');
      const scrollPosition = window.scrollY;

      cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top + scrollPosition;
        const windowHeight = window.innerHeight;
        
        if (cardTop < scrollPosition + windowHeight && cardTop + card.offsetHeight > scrollPosition) {
          const offset = scrollPosition + (index * 5); 
          card.style.transform = `translateY(${Math.sin(offset * 0.003) * 5}px)`;
          card.classList.add('is-visible');
        } else {
          card.style.transform = `translateY(0)`; 
          card.classList.remove('is-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); 

  return (
    <div className="App">
      
      {/* HEADER com lógica de Login */}
      <Header isLoggedIn={isLoggedIn} handleLogin={handleLogin} /> 
      
      {/* ROTAS (React Router - Requisito do Professor) */}
      <Routes>
        <Route path="/" element={<Home whatsappLink={whatsappLink} isLoggedIn={isLoggedIn} />} />
        
        {/* Rota crítica para o CRUD / Painel ADM */}
        <Route 
          path="/blog" 
          element={<Blog 
            whatsappLink={whatsappLink} 
            isLoggedIn={isLoggedIn} 
            handleLogin={handleLogin}
          />} 
        /> 
        
        {/* NOVA ROTA: Regras da Comunidade */}
        <Route path="/regras" element={<Regras />} />
        
        {/* Rota DINÂMICA: Exibe um artigo específico pelo ID */}
        <Route path="/blog/artigo/:id" element={<ArticleDetails />} /> 
        
      </Routes>

      <CtaSticky whatsappLink={whatsappLink} />
    </div>
  );
}

export default App;