import './App.css'
import React from 'react';
import Header from './componentes/Header';
import TattooGallery from './componentes/TattooGallery';
import Artists from './componentes/Artists';
import BookingForm from './componentes/BookingForm';
import Footer from './componentes/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <TattooGallery />
      <Artists />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;
