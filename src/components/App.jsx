import React from 'react';
import { Route, Routes } from 'react-router-dom';
import s from './App.module.css';
import Navigation from './Navigation/Navigation';
import HomePage from '../pages/HomePage/HomePage';
import CamperPage from '../pages/CamperPage/CamperPage';
import CatalogPage from '../pages/CatalogPage/CatalogPage';
import Features from './Features/Features';
import Reviews from './Reviews/Reviews';

const App = () => {
  return (
    <div className={s.campersWrapper}>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="catalog/:id" element={<CamperPage />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
