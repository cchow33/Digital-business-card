import React from 'react';
import './App.css';
import Card from './components/Card';
import MainContent from './components/MainContent';
import Footer from './components/Footer';


function App() {
  return (
    <div className="main-container">
      <Card/>
      <MainContent />
      <Footer/>
    </div>
  );
}

export default App;
