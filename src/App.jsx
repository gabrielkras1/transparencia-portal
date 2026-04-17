import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import DataList from './components/DataList';
import Settings from './components/Settings';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dados" element={<DataList />} />
        <Route path="/configuracoes" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}
