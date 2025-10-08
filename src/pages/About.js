import React from "react";

function About() {
  return (
    <section id="about" className="about-section py-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto text-center mb-3">
            <h2 className="display-5 fw-bold mb-4 text-success">Meet Our Team</h2>
            <p className="lead mb-4 text-muted">
              Meet the talented individuals behind this project - a dedicated group of developers passionate about creating exceptional digital experiences.
            </p>
            <hr className="w-25 mx-auto mb-3" style={{height: '3px', backgroundColor: '#2e7d32'}} />
          </div>
        </div>
        <div className="row g-3 justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card member-card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="member-image-container mb-3">
                  <img 
                    src="/images/pnc5.jpg" 
                    alt="Donna Mae Cabuyao" 
                    className="member-image"
                  />
                </div>
                <h5 className="card-title fw-bold text-success mb-2">Donna Mae Cabuyao</h5>
                <p className="text-muted small mb-0">Team Member</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card member-card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="member-image-container mb-3">
                  <img 
                    src="/images/pnc4.jpg" 
                    alt="Clarisse Cartagena" 
                    className="member-image"
                  />
                </div>
                <h5 className="card-title fw-bold text-success mb-2">Clarisse Cartagena</h5>
                <p className="text-muted small mb-0">Team Member</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card member-card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="member-image-container mb-3">
                  <img 
                    src="/images/pnc8.jpg" 
                    alt="John Marvin Cero" 
                    className="member-image"
                  />
                </div>
                <h5 className="card-title fw-bold text-success mb-2">John Marvin Cero</h5>
                <p className="text-muted small mb-0">Team Member</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card member-card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="member-image-container mb-3">
                  <img 
                    src="/images/pnc9.jpg" 
                    alt="Renelyn Concina" 
                    className="member-image"
                  />
                </div>
                <h5 className="card-title fw-bold text-success mb-2">Renelyn Concina</h5>
                <p className="text-muted small mb-0">Team Member</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card member-card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="member-image-container mb-3">
                  <img 
                    src="/images/pnc6.jpg" 
                    alt="Hans Axle Consuelo" 
                    className="member-image"
                  />
                </div>
                <h5 className="card-title fw-bold text-success mb-2">Hans Axle Consuelo</h5>
                <p className="text-muted small mb-0">Team Member</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card member-card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="member-image-container mb-3">
                  <img 
                    src="/images/pnc7.jpg" 
                    alt="Marc Jeremie De Honor" 
                    className="member-image"
                  />
                </div>
                <h5 className="card-title fw-bold text-success mb-2">Marc Jeremie De Honor</h5>
                <p className="text-muted small mb-0">Team Member</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card member-card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="member-image-container mb-3">
                  <img 
                    src="/images/pnc10.JPG" 
                    alt="Jude Christian Del Rosario" 
                    className="member-image"
                  />
                </div>
                <h5 className="card-title fw-bold text-success mb-2">Jude Christian Del Rosario</h5>
                <p className="text-muted small mb-0">Team Member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
