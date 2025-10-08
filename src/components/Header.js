import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleNavigation = (path, sectionId) => {
    navigate(path);
    // Small delay to ensure navigation completes before scrolling
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
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top shadow-sm" style={{ backgroundColor: "#2e7d32" }}>
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-3 d-flex align-items-center" to="/">
          <img 
            src="/logo/logo.png" 
            alt="PNC Logo" 
            className="navbar-logo me-2"
            style={{
              height: '40px',
              width: '40px',
              objectFit: 'contain',
              borderRadius: '50%'
            }}
          />
          Pamantasan ng Cabuyao
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link px-3 ${isActive ? 'active fw-bold' : ''}`} 
                to="/"
                onClick={() => handleNavigation('/', 'home')}
              >
                <i className="fas fa-home me-1"></i>Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link px-3 ${isActive ? 'active fw-bold' : ''}`} 
                to="/mission-vision"
                onClick={() => handleNavigation('/mission-vision', 'mission-vision')}
              >
                <i className="fas fa-bullseye me-1"></i>Mission & Vision
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link px-3 ${isActive ? 'active fw-bold' : ''}`} 
                to="/gallery"
                onClick={() => handleNavigation('/gallery', 'gallery')}
              >
                <i className="fas fa-images me-1"></i>Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link px-3 ${isActive ? 'active fw-bold' : ''}`} 
                to="/about"
                onClick={() => handleNavigation('/about', 'about')}
              >
                <i className="fas fa-users me-1"></i>About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link px-3 ${isActive ? 'active fw-bold' : ''}`} 
                to="/contact"
                onClick={() => handleNavigation('/contact', 'contact')}
              >
                <i className="fas fa-envelope me-1"></i>Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
