import React from 'react';
import { Weather } from '../../components/HomePage/Header/Weather';
import './styles/Header.css';

export const Header = () => {
  return (
    <div className="row header">
      <div className="col-md-2">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="nounderline" href="#">
          <h1 className="logo">clge</h1>
        </a>
      </div>
      <div className="col-md-3">
        <div className="search">
          <input className="search-input" type="text" placeholder="Tapez votre recherche" />
          <img
            className="search-icon"
            src="https://image.flaticon.com/icons/svg/751/751463.svg"
            alt="search"
          />
        </div>
      </div>
      <div className="col-md-1">
        <button className="notice">
          <img src="https://image.flaticon.com/icons/svg/149/149301.svg" alt="notice" />
        </button>
      </div>
      <div className="col-md-3">
        <div className="login d-flex bd-highlight">
          <div className="login-info bd-highlight">
            <p>Camille J.</p>
            <p>Soldes congés: +15 jours</p>
          </div>
          <img
            className="login-icon bd-highlight"
            src="https://image.flaticon.com/icons/svg/145/145843.svg"
            alt="login"
          />
        </div>
      </div>
      <div className="col-md-3">
        <Weather />
      </div>
    </div>
  );
};
