import React, { useEffect, useState } from 'react';
import api from '../api/api';
import Loading from './Loading';
import Filters from './Filters';
import DataTable from './DataTable';

export default function DataList() {
  const [items, setItems] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const resp = await api.get('/projetos');
        if (!mounted) return;
        setItems(resp.data);
        setFiltered(resp.data);
        const cats = Array.from(new Set(resp.data.map(p => p.categoria))).sort();
        setCategories(cats);
      } catch (err) {
        if (!mounted) return;
        setError('Falha ao carregar dados. Verifique sua conexão com a API.');
      } finally {
        if (mounted) setLoading(false);
      }
    }
    fetchData();
    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    let result = items;
    if (search && search.trim() !== '') {
      const q = search.toLowerCase();
      result = result.filter(i => i.nome.toLowerCase().includes(q));
    }
    if (category) {
      result = result.filter(i => i.categoria === category);
    }
    setFiltered(result);
  }, [search, category, items]);

  if (loading) return <Loading />;
  if (error) return <div className="error" style={{ padding: '1rem', color: '#c00' }}>{error}</div>;

  return (
    <main style={{ padding: '1rem 1.5rem' }}>
      <h2>Listagem de Projetos</h2>
      <Filters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        categories={categories}
      />
      <DataTable items={filtered} />
    </main>
  );
}
