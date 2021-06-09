import React from 'react';
import './app.css';
import HomePage from '../pages/HomePage';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}
