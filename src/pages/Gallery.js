import React from "react";

function Gallery() {
  const images = [
    {
      src: "/images/pnc2.jpg",
      alt: "PNC",
      title: "BCH",
    },
    {
      src: "/images/pnc1.jpg",
      alt: "Campus",
      title: "I ❤️ PNC",
    },
    {
      src: "/images/pnc3.jpg",
      alt: "Students",
      title: "Main Building",
    },
    { src: "/images/pnc13.jpg",
      alt: "Library",
      title: "Library", 
    },
    { src: "/images/pnc12.jpg",
      alt: "Upper View",
      title: "Upper View", 
    },
    { src: "/images/pnc11.jpg",
      alt: "PnC Uniform",
      title: "PnC Uniform", 
    },
      
  ];
  

  return (
    <section className="gallery-section py-3 w-100">
      <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto text-center mb-3">
          <h2 className="display-5 fw-bold mb-4" style={{ color: "#2e7d32" }}>
            Gallery
          </h2>
          <p className="lead text-muted">
            Discover the beautiful facilities and vibrant campus life at PNC
          </p>
          <hr className="w-25 mx-auto mb-3" style={{height: '3px', backgroundColor: '#2e7d32'}} />
        </div>
      </div>
      <div className="row justify-content-center g-3">
        {images.map((img, idx) => (
          <div
            className="col-lg-4 col-md-6 col-sm-12"
            key={idx}
          >
            <div
              className="card shadow-sm border-0 h-100 gallery-card"
              style={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
                borderRadius: "15px",
                overflow: "hidden"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 12px 30px rgba(46,125,50,0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.10)";
              }}
            >
              <div className="gallery-image-container">
                <img
                  src={img.src}
                  className="card-img-top"
                  alt={img.alt}
                  style={{ 
                    objectFit: "cover", 
                    height: "250px",
                    width: "100%",
                    transition: "transform 0.3s ease"
                  }}
                />
              </div>
              <div className="card-body d-flex align-items-center justify-content-center" style={{ minHeight: "80px" }}>
                <h5 className="card-title mb-0 text-center fw-bold" style={{ color: "#2e7d32" }}>
                  {img.title}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default Gallery;