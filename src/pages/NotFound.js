import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="not-found-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto text-center">
            <div className="error-content">
              {/* 404 Number */}
              <div className="error-number mb-4">
                <h1 className="display-1 fw-bold" style={{ 
                  fontSize: '8rem', 
                  color: '#2e7d32',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                }}>
                  404
                </h1>
              </div>
              
              {/* Error Icon */}
              <div className="error-icon mb-4">
                <i className="fas fa-exclamation-triangle fa-4x text-warning"></i>
              </div>
              
              {/* Error Message */}
              <div className="error-message mb-4">
                <h2 className="fw-bold mb-3" style={{ color: '#2e7d32' }}>
                  Oops! Page Not Found
                </h2>
                <p className="lead text-muted mb-4">
                  The page you are looking for might have been moved, deleted, or doesn't exist.
                </p>
                <p className="text-muted">
                  Don't worry, let's get you back on track!
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="error-actions">
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <Link 
                    to="/" 
                    className="btn btn-success btn-lg px-4 py-3 rounded-pill"
                  >
                    <i className="fas fa-home me-2"></i>
                    Go Home
                  </Link>
                  <Link 
                    to="/contact" 
                    className="btn btn-outline-success btn-lg px-4 py-3 rounded-pill"
                  >
                    <i className="fas fa-envelope me-2"></i>
                    Contact Us
                  </Link>
                </div>
                
                {/* Quick Links */}
                <div className="quick-links mt-5">
                  <h5 className="fw-bold mb-3" style={{ color: '#2e7d32' }}>
                    Quick Links
                  </h5>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <Link to="/about" className="btn btn-link text-success">
                      <i className="fas fa-users me-1"></i>About Us
                    </Link>
                    <Link to="/mission-vision" className="btn btn-link text-success">
                      <i className="fas fa-bullseye me-1"></i>Mission & Vision
                    </Link>
                    <Link to="/gallery" className="btn btn-link text-success">
                      <i className="fas fa-images me-1"></i>Gallery
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="decorative-elements position-relative mt-5">
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="feature-box p-4">
                <i className="fas fa-search fa-2x mb-3" style={{ color: '#2e7d32' }}></i>
                <h6 className="fw-bold">Search</h6>
                <p className="text-muted small">Try searching for what you need</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-box p-4">
                <i className="fas fa-map fa-2x mb-3" style={{ color: '#2e7d32' }}></i>
                <h6 className="fw-bold">Navigate</h6>
                <p className="text-muted small">Use our menu to find your way</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-box p-4">
                <i className="fas fa-question-circle fa-2x mb-3" style={{ color: '#2e7d32' }}></i>
                <h6 className="fw-bold">Help</h6>
                <p className="text-muted small">Contact us if you need assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;