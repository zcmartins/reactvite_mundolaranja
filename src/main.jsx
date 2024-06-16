import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/Login';
import Feed from './pages/Feed';
import Jogadores from './pages/Jogadores';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Jogadores />
  </React.StrictMode>,
);
