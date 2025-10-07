import React from "react";

const cardStyle = {
  maxWidth: "1000px",
  height: "300px",
  margin: "90px auto",
  textAlign: "center",
  padding: "32px",
  borderRadius: "12px",
  boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
  background: "#fff",
};

function MissionVision() {
  return (
    <div>
      <div style={cardStyle}>
        <h2>Mission</h2>
        <p style={{ fontSize: "18px", lineHeight: "2.0" }}>
          An institution of higher learning committed to equip individuals with
          knowledge, skills and values that will enable them to achieve
          professional goals &amp; provide leadership and service for national
          development.
        </p>
      </div>
      <div style={cardStyle}>
        <h2>Vision</h2>
        <p style={{ fontSize: "18px", lineHeight: "2.0" }}>
          An institution of higher learning in Region IV, developing
          globally-competitive and value-laden professionals and leaders
          instrumental to community development and nation building.
        </p>
      </div>
    </div>
  );
}

export default MissionVision;
