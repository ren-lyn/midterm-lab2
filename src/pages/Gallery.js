import React from "react";

function Gallery() {
  const images = [
    {
      src: "/images/pnc2.jpg",
      alt: "PNC",
      title: "Main Building",
    },
    {
      src: "/images/pnc1.jpg",
      alt: "Campus",
      title: "I ❤️ PNC",
    },
    {
      src: "/images/pnc3.jpg",
      alt: "Students",
      title: "Academic Building",
    },
  ];

  return (
    <div>
      <h2
        className="text-center mb-4"
        style={{ color: "#2e7d32", fontWeight: 700 }}
      >
        Gallery
      </h2>
      <div className="row mt-3 justify-content-center">
        {images.map((img, idx) => (
          <div
            className="col-md-4 mb-4 d-flex align-items-stretch"
            key={idx}
          >
            <div
              className="card shadow-sm border-0 h-100"
              style={{
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(46,125,50,0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.10)";
              }}
            >
              <img
                src={img.src}
                className="card-img-top img-fluid rounded"
                alt={img.alt}
                style={{ objectFit: "cover", height: "220px" }}
              />
              <div className="card-body text-center">
                <h6 className="card-title mb-0">{img.title}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
