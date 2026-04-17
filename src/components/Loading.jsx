import React from 'react';

export default function Loading() {
  return (
    <div className="loading" role="status" aria-live="polite" style={{ padding: '1.5rem' }}>
      <strong>Carregando...</strong>
    </div>
  );
}
