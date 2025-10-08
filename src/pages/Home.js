import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const navigateToSection = (path, sectionId) => {
    navigate(path);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };
  return (
    <div className="home-section w-100">
      {/* Carousel Section */}
      <div id="carouselPNC" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button 
            type="button" 
            data-bs-target="#carouselPNC" 
            data-bs-slide-to="0" 
            className="active" 
            aria-current="true" 
            aria-label="Slide 1"
          ></button>
          <button 
            type="button" 
            data-bs-target="#carouselPNC" 
            data-bs-slide-to="1" 
            aria-label="Slide 2"
          ></button>
          <button 
            type="button" 
            data-bs-target="#carouselPNC" 
            data-bs-slide-to="2" 
            aria-label="Slide 3"
          ></button>
        </div>
        
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img 
              src="/Home/home2.png" 
              className="d-block w-100 carousel-image" 
              alt="PNC Campus"
              style={{ height: '70vh', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-md-block">
              <div className="carousel-content">
                <h1 className="display-4 fw-bold text-white mb-3">
                  Welcome to Pamantasan ng Cabuyao
                </h1>
                <p className="lead text-white mb-4">
                  P - Personal Dignity
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <button 
                    onClick={() => navigateToSection('/about', 'about')} 
                    className="btn btn-success btn-lg px-4 py-2 rounded-pill"
                  >
                    <i className="fas fa-users me-2"></i>Meet Our Team
                  </button>
                  <button 
                    onClick={() => navigateToSection('/gallery', 'gallery')} 
                    className="btn btn-outline-light btn-lg px-4 py-2 rounded-pill"
                  >
                    <i className="fas fa-images me-2"></i>View Gallery
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="carousel-item" data-bs-interval="5000">
            <img 
              src="/Home/home1.jpg" 
              className="d-block w-100 carousel-image" 
              alt="PNC Building"
              style={{ height: '70vh', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-md-block">
              <div className="carousel-content">
                <h2 className="display-5 fw-bold text-white mb-3">
                   Welcome to Pamantasan ng Cabuyao
                </h2>
                <p className="lead text-white mb-4">
                  N - Nurturing community
                </p>
                <button 
                  onClick={() => navigateToSection('/mission-vision', 'mission-vision')} 
                  className="btn btn-success btn-lg px-4 py-2 rounded-pill"
                >
                  <i className="fas fa-bullseye me-2"></i>Our Mission
                </button>
              </div>
            </div>
          </div>
          
          <div className="carousel-item" data-bs-interval="5000">
            <img 
              src="/images/pnc2.jpg" 
              className="d-block w-100 carousel-image" 
              alt="PNC Students"
              style={{ height: '70vh', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-md-block">
              <div className="carousel-content">
                <h2 className="display-5 fw-bold text-white mb-3">
                   Welcome to Pamantasan ng Cabuyao
                </h2>
                <p className="lead text-white mb-4">
                  C - Commitment to Excellence
                </p>
                <button 
                  onClick={() => navigateToSection('/contact', 'contact')} 
                  className="btn btn-success btn-lg px-4 py-2 rounded-pill"
                >
                  <i className="fas fa-envelope me-2"></i>Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <button 
          className="carousel-control-prev" 
          type="button" 
          data-bs-target="#carouselPNC" 
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button 
          className="carousel-control-next" 
          type="button" 
          data-bs-target="#carouselPNC" 
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
