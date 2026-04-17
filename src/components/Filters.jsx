import React from 'react';

export default function Filters({ search, setSearch, category, setCategory, categories }) {
  return (
    <div className="filters" style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Buscar por nome..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        aria-label="Buscar por nome"
        style={{ padding: '0.5rem', borderRadius: 6, border: '1px solid #ccc', minWidth: 220 }}
      />

      <select
        value={category}
        onChange={e => setCategory(e.target.value)}
        aria-label="Filtrar por categoria"
        style={{ padding: '0.5rem', borderRadius: 6, border: '1px solid #ccc' }}
      >
        <option value="">Todas as categorias</option>
        {categories.map(c => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <button
        type="button"
        onClick={() => { setSearch(''); setCategory(''); }}
        style={{ padding: '0.5rem 0.75rem', borderRadius: 6, border: 'none', background: '#eee', cursor: 'pointer' }}
      >
        Limpar
      </button>
    </div>
  );
}
