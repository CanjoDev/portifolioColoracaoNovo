import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import Contact from '../components/Contact';
import Portfolio from '../components/Portifolio';
import Sobre from '../components/Sobre';
import ComboColoracao from '../components/comboColoracao';

export default function Home() {
  return (
    <>
      <Header />
      <Sobre />
      <Hero />
      <ComboColoracao />
      <Portfolio />
      <Contact />
      <Footer />
      
    </>
  );
}
