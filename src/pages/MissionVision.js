import React from "react";

function MissionVision() {
  return (
    <section className="mission-vision-section py-3">
      <div className="container">
        {/* Header */}
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-3">
            <h1 className="display-4 fw-bold mb-4" style={{ color: '#2e7d32' }}>
              Our Mission & Vision
            </h1>
            <p className="lead text-muted">
              Guiding principles that drive our commitment to excellence in education
            </p>
            <hr className="w-25 mx-auto mb-4" style={{height: '3px', backgroundColor: '#2e7d32'}} />
          </div>
        </div>

        {/* Mission and Vision Cards */}
        <div className="row g-4">
          {/* Mission Card */}
          <div className="col-lg-6">
            <div className="mission-vision-card card border-0 shadow-lg h-100 p-5 position-relative overflow-hidden">
              <div className="card-icon position-absolute top-0 end-0 p-4">
                <i className="fas fa-bullseye fa-3x opacity-25" style={{ color: '#2e7d32' }}></i>
              </div>
              <div className="card-body p-0 position-relative">
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-wrapper me-3 p-3 rounded-circle" style={{ backgroundColor: '#e8f5e8' }}>
                    <i className="fas fa-bullseye fa-2x" style={{ color: '#2e7d32' }}></i>
                  </div>
                  <h2 className="card-title fw-bold mb-0" style={{ color: '#2e7d32' }}>
                    Our Mission
                  </h2>
                </div>
                <p className="card-text fs-5 text-muted lh-lg">
                  An institution of higher learning committed to equip individuals with
                  knowledge, skills and values that will enable them to achieve
                  professional goals and provide leadership and service for national
                  development.
                </p>
              
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="col-lg-6">
            <div className="mission-vision-card card border-0 shadow-lg h-100 p-5 position-relative overflow-hidden">
              <div className="card-icon position-absolute top-0 end-0 p-4">
                <i className="fas fa-eye fa-3x opacity-25" style={{ color: '#2e7d32' }}></i>
              </div>
              <div className="card-body p-0 position-relative">
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-wrapper me-3 p-3 rounded-circle" style={{ backgroundColor: '#e8f5e8' }}>
                    <i className="fas fa-eye fa-2x" style={{ color: '#2e7d32' }}></i>
                  </div>
                  <h2 className="card-title fw-bold mb-0" style={{ color: '#2e7d32' }}>
                    Our Vision
                  </h2>
                </div>
                <p className="card-text fs-5 text-muted lh-lg">
                  An institution of higher learning in Region IV, developing
                  globally-competitive and value-laden professionals and leaders
                  instrumental to community development and nation building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
