import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text)] transition-colors duration-300">
      <Navbar />
      <main className="pt-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;
