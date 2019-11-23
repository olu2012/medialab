import React from 'react';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Services from './components/services';
import Contact from './components/contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
    
        Welcome to Media Lab
    
      </header>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
