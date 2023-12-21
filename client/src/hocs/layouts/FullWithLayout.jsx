import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const FullWithLayout = () => {
  return (
    <div className="bg-[#F7FAFC]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
