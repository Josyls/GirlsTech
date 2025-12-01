// src/main.jsx - CORRIGIDO PARA IMPORTAR O CSS GLOBAL E ROTAS
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 

import App from './App.jsx'; 
// A LINHA ESSENCIAL: Garante que o CSS seja carregado globalmente
import './index.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);