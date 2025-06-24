import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext'; // Import ThemeProvider
import CustomCursor from './components/CustomCursor'; // Import CustomCursor

// Static imports for sections
import Hero from './sections/Hero.tsx';
import About from './sections/About.tsx';
import Skills from './sections/Skills.tsx';
import Portfolio from './sections/Portfolio.tsx';
import Resume from './sections/Resume.tsx';
import Contact from './sections/Contact.tsx';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <ThemeProvider> {/* Wrap with ThemeProvider */}
      <CustomCursor /> {/* Add CustomCursor here */}
      <HashRouter>
        <ScrollToTop />
        <Navbar />
        <main className="bg-brand-dark"> {/* Use theme variable for main background */}
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Hero />} /> 
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;