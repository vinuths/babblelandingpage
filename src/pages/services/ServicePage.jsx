// src/pages/services/ServicePage.jsx
import React from "react";

const ServicePage = ({ title, description }) => {
  return (
    <div
      style={{
        padding: "120px 20px",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      <h1 style={{ fontSize: "36px", marginBottom: "20px", color: "#013879" }}>
        {title}
      </h1>

      {/* 🔥 THIS IS THE FIX */}
      <div style={{ fontSize: "18px", lineHeight: "1.7" }}>
        {description}
      </div>
    </div>
  );
};

export default ServicePage;
