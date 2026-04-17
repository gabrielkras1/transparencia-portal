import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header className="app-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <h1 style={{ margin: 0, fontSize: '1.25rem' }}>Portal de Transparência</h1>
        <nav aria-label="Navegação principal">
          <Link to="/" style={{ marginRight: 12 }}>Home</Link>
          <Link to="/dados" style={{ marginRight: 12 }}>Dados</Link>
          <Link to="/configuracoes">Configurações</Link>
        </nav>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ fontSize: '0.9rem' }}>Tema</span>
        <strong style={{ textTransform: 'capitalize' }}>{theme}</strong>
      </div>
    </header>
  );
}
