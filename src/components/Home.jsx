import React, { useEffect, useState } from 'react';
import api from '../api/api';
import Loading from './Loading';

export default function Home() {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function fetchSummary() {
      setLoading(true);
      setError(null);
      try {
        // No db.json fornecido existe o recurso /resumo
        const resp = await api.get('/resumo');
        if (!mounted) return;
        setSummary(resp.data);
      } catch (err) {
        if (!mounted) return;
        setError('Erro ao carregar resumo. Verifique a API.');
      } finally {
        if (mounted) setLoading(false);
      }
    }
    fetchSummary();
    return () => { mounted = false; };
  }, []);

  if (loading) return <Loading />;
  if (error) return <div className="error" style={{ padding: '1rem', color: '#c00' }}>{error}</div>;

  return (
    <main style={{ padding: '1rem 1.5rem' }}>
      <h2>Resumo</h2>
      <div className="cards" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <div className="card" style={{ background: 'var(--card)', padding: '1rem', borderRadius: 8, minWidth: 220 }}>
          <h3 style={{ margin: 0 }}>Total de Despesas</h3>
          <p style={{ fontSize: '1.25rem', marginTop: '0.5rem' }}>
            R$ {Number(summary.totalDespesas).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>

        <div className="card" style={{ background: 'var(--card)', padding: '1rem', borderRadius: 8, minWidth: 220 }}>
          <h3 style={{ margin: 0 }}>Projetos Ativos</h3>
          <p style={{ fontSize: '1.25rem', marginTop: '0.5rem' }}>
            {summary.totalProjetosAtivos}
          </p>
        </div>
      </div>
    </main>
  );
}
