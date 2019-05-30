import React from 'react';
import './App.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Mainrouter from '../../routers'
function App() {
  return (
    <div className="App">
      <Header />
      <Mainrouter />
      <Footer />
    </div>
  );
}

export default App;
