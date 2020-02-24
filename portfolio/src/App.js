import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Grid from './components/Grid';
import Loader from './components/Loader';
import Gallery from './components/Gallery';
import './App.css'
function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Gallery />

      <Loader />
    </div>
  );
}

export default App;
