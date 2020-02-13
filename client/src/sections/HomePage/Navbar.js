import React from 'react';

export const Navbar = () => {
  return (
    <div className="col-md-2 sidebar mh-100">
      <hr />
      <ul>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">
          <li>Tableau de bord</li>
        </a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">
          <li>Mon compte</li>
        </a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">
          <li>Mes congés</li>
        </a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">
          <li className="undo-line-height">
            Réunions &<br />
            comptes rendus
          </li>
        </a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">
          <li>Pratique</li>
        </a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">
          <li>Planning</li>
        </a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">
          <li>Réserver</li>
        </a>
      </ul>
    </div>
  );
};
