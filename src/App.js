import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import MissionVision from "./pages/MissionVision";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Main page component that shows all sections
function MainPage() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the appropriate section based on the route
    const scrollToSection = () => {
      let sectionId = '';
      switch(location.pathname) {
        case '/':
          sectionId = 'home';
          break;
        case '/mission-vision':
          sectionId = 'mission-vision';
          break;
        case '/gallery':
          sectionId = 'gallery';
          break;
        case '/about':
          sectionId = 'about';
          break;
        case '/contact':
          sectionId = 'contact';
          break;
        default:
          sectionId = 'home';
      }
      
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      }
    };

    scrollToSection();
  }, [location.pathname]);

  return (
    <main className="main-content">
      {/* All sections always visible on one page */}
      <section id="home" className="page-section">
        <Home />
      </section>
      
      <section id="mission-vision" className="page-section">
        <MissionVision />
      </section>
      
      <section id="gallery" className="page-section">
        <Gallery />
      </section>
      
      <section id="about" className="page-section">
        <About />
      </section>
      
      <section id="contact" className="page-section">
        <Contact />
      </section>
    </main>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* All routes render the same MainPage component but scroll to different sections */}
        <Route path="/" element={<MainPage />} />
        <Route path="/mission-vision" element={<MainPage />} />
        <Route path="/gallery" element={<MainPage />} />
        <Route path="/about" element={<MainPage />} />
        <Route path="/contact" element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
