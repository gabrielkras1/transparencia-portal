import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Settings() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <main style={{ padding: '1rem 1.5rem' }}>
      <h2>Configurações</h2>

      <div className="settings-item" style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <label style={{ minWidth: 160 }}>Modo de exibição</label>
        <button
          onClick={toggleTheme}
          style={{
            padding: '0.5rem 0.75rem',
            borderRadius: 6,
            border: '1px solid #ccc',
            background: 'var(--card)',
            cursor: 'pointer'
          }}
        >
          Alternar para {theme === 'light' ? 'Escuro' : 'Claro'}
        </button>
      </div>
    </main>
  );
}
