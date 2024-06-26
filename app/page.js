import React from 'react';
import Header from './components/Header';
import About from './components/About';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <ProjectList />
      <Footer />
    </div>
  );
}

export default App;
