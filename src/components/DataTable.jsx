import React from 'react';

export default function DataTable({ items }) {
  if (!items || items.length === 0) {
    return <div style={{ padding: '1rem' }}>Nenhum item encontrado.</div>;
  }

  return (
    <div style={{ overflowX: 'auto' }}>
      <table className="data-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #ddd' }}>Nome</th>
            <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #ddd' }}>Categoria</th>
            <th style={{ textAlign: 'right', padding: '0.5rem', borderBottom: '1px solid #ddd' }}>Valor</th>
            <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #ddd' }}>Status</th>
            <th style={{ textAlign: 'center', padding: '0.5rem', borderBottom: '1px solid #ddd' }}>Ano</th>
          </tr>
        </thead>
        <tbody>
          {items.map(it => (
            <tr key={it.id}>
              <td style={{ padding: '0.5rem', borderBottom: '1px solid #f0f0f0' }}>{it.nome}</td>
              <td style={{ padding: '0.5rem', borderBottom: '1px solid #f0f0f0' }}>{it.categoria}</td>
              <td style={{ padding: '0.5rem', borderBottom: '1px solid #f0f0f0', textAlign: 'right' }}>
                R$ {Number(it.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </td>
              <td style={{ padding: '0.5rem', borderBottom: '1px solid #f0f0f0' }}>{it.status}</td>
              <td style={{ padding: '0.5rem', borderBottom: '1px solid #f0f0f0', textAlign: 'center' }}>{it.ano}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
