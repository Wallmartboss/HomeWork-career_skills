import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Layout } from './Layout/Layout';

import s from './App.module.css';
// import AppBar from './AppBar/AppBar';
import Navigation from './Navigation/Navigation';

import HomePage from '../pages/HomePage/HomePage';
import CamperPage from '../pages/CamperPage/CamperPage';
import CatalogPage from '../pages/CatalogPage/CatalogPage';

const App = () => {
  return (
    <div className={s.campersWrapper}>
      {/* <Layout>
        <h1>Hello</h1> */}
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CamperPage />} />
      </Routes>
      {/* </Layout> */}
    </div>
  );
};
export default App;
