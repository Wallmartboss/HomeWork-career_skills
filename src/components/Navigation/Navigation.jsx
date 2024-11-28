import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import logo from '../../img/logo.svg';

const Navigation = () => {
  return (
    <div className={s.navHeader}>
      <img className={s.logo} src={logo} alt="Logo" width="136" height="16" />
      <nav className={s.navi}>
        <NavLink className={s.link} to="/">
          Home
        </NavLink>

        <NavLink className={s.link} to="/catalog">
          Catalog
        </NavLink>
      </nav>
    </div>
  );
};
export default Navigation;
