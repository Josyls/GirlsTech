// src/components/Header.jsx - MENU DE NAVEGAÇÃO COM ROTAS E REGRAS
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const navItems = [
    { name: 'Home', path: '/', isAnchor: false },
    { name: 'Quem Somos', path: '/#quem-somos', isAnchor: true }, 
    { name: 'Nossa Equipe', path: '/#adms-depoimentos', isAnchor: true }, 
    // Corrigido: Nome do menu é só "Blog"
    { name: 'Blog', path: '/blog', isAnchor: false }, 
    // NOVO: Adicionado link para a Página de Regras
    { name: 'Regras', path: '/regras', isAnchor: false }, 
];

// Função para rolar suavemente
const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

function Header({ isLoggedIn, handleLogin }) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const location = useLocation(); 

  // Lógica de Autenticação
  const handleAuth = (e) => {
    e.preventDefault();
    setLoginError('');
    if (password === 'girls123') { 
      handleLogin(true); 
      setShowLoginModal(false); 
      setPassword(''); 
      navigate('/blog'); 
    } else {
      setLoginError('Senha incorreta. Tente novamente.');
      setPassword('');
    }
  };
  
  // Função de Logout
  const handleLogout = () => {
    handleLogin(false); 
    navigate('/');
  };
  
  // Função que lida com cliques no Menu (Âncora vs. Rota)
  const handleNavItemClick = (item) => {
    if (item.isAnchor && location.pathname === '/') {
        const id = item.path.split('#')[1];
        smoothScroll(id);
    } else if (item.isAnchor) {
        const id = item.path; 
        navigate(id); 
    } else {
        navigate(item.path);
    }
  };

  return (
    <>
      <header className="main-header">
        <div className="container header-content">
          
          <div className="logo">
            <Link to="/" className="logo-link">
              Girls Tech
            </Link>
          </div>
          
          <nav className="main-nav">
            <ul className="nav-list">
              {navItems.map((item, index) => (
                  <li key={index}>
                      <a 
                          href={item.path} 
                          className="nav-item"
                          onClick={(e) => {
                              e.preventDefault();
                              handleNavItemClick(item);
                          }}
                      >
                          {item.name}
                      </a>
                  </li>
              ))}
            </ul>
          </nav>

          <div className="auth-area">
            {isLoggedIn ? (
              <div className="logged-in-container">
                <button className="adm-panel-btn" onClick={() => navigate('/blog')}>
                  <span className="icon">👤</span> Painel ADM
                </button>
                <button className="logout-btn" onClick={handleLogout}>
                  Sair
                </button>
              </div>
            ) : (
              <button className="login-btn" onClick={() => setShowLoginModal(true)}>
                Login
              </button>
            )}
          </div>
          
        </div>
      </header>
      
      {/* MODAL DE LOGIN (Estrutura idêntica) */}
      {showLoginModal && (
        <div className="modal-overlay">
          <div className="login-modal">
            <h2>Acesso Restrito ADM</h2>
            <form onSubmit={handleAuth}>
              <input
                type="password"
                placeholder="Senha de Administrador"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {loginError && <p className="error-message">{loginError}</p>}
              <button type="submit" className="cta-button">Entrar</button>
            </form>
            <button className="close-btn" onClick={() => setShowLoginModal(false)}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;