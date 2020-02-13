import React from 'react';
import { Header } from '../sections/HomePage/Header';
import { Navbar } from '../sections/HomePage/Navbar';
import { Dashboard } from '../sections/HomePage/Dashboard';

export const HomePage = () => {
  return (
    <div className="row">
      <Header />
      <Navbar />
      <Dashboard />
    </div>
  );
};
