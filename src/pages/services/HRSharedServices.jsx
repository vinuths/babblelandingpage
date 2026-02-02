// src/pages/services/HRSharedServices.jsx
import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const features = [
  {
    title: "Digital Statutory Registers",
    description:
      "Auto-generate statutory registers as prescribed under labour laws.",
    icon: "📝",
  },
  {
    title: "State-wise Format Compliance",
    description:
      "Maintain registers in state-specific formats as per local rules.",
    icon: "📋",
  },
  {
    title: "Automated Data Synchronization",
    description:
      "Attendance, wage, leave data auto-updated across registers.",
    icon: "🔄",
  },
];

const benefits = [
  {
    title: "Inspection & Audit Ready",
    description:
      "Instant access to updated statutory registers during inspections.",
    icon: "✔️",
  },
  {
    title: "Reduced Compliance Risk",
    description:
      "Eliminate manual errors, penalties, and compliance exposure.",
    icon: "📈",
  },
  {
    title: "Centralized Secure Storage",
    description:
      "All statutory registers stored securely with easy retrieval anytime.",
    icon: "💼",
  },
];

const HRSharedServices = () => {
  const navigate = useNavigate();
  const [hoverDemo, setHoverDemo] = useState(false);
  const [hoverHome, setHoverHome] = useState(false);

  const buttonStyle = (hover) => ({
    backgroundColor: hover ? "#b55b36" : "#d27147",
    border: "none",
    color: "#fff",
    padding: "7px 20px",
    borderRadius: "7px",
    fontWeight: "500",
    fontSize: "0.9rem",
    cursor: "pointer",
    transition: "0.3s",
  });

  return (
    <>
      {/* ================= FIRST VIEWPORT ================= */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)",
          paddingTop: "140px",
        }}
      >
        {/* HERO */}
        <Container className="text-center">
          <h1 className="fw-bold mb-3 text-white">
            Register Management
          </h1>

          <p
            className="mb-4 text-white opacity-75"
            style={{ maxWidth: "720px", margin: "0 auto" }}
          >
            Manage HR statutory registers and compliance records effortlessly
            with our shared HR services.
          </p>

          {/* BUTTONS */}
          <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
            <button
              onClick={() => navigate("/contact")}
              onMouseEnter={() => setHoverDemo(true)}
              onMouseLeave={() => setHoverDemo(false)}
              style={buttonStyle(hoverDemo)}
            >
              Book a Demo
            </button>

            <button
              onClick={() => navigate("/")}
              onMouseEnter={() => setHoverHome(true)}
              onMouseLeave={() => setHoverHome(false)}
              style={buttonStyle(hoverHome)}
            >
              Back to Home
            </button>
          </div>
        </Container>

        {/* ONLY ONE ROW OF FEATURES */}
        <Container style={{ flex: "1 1 auto" }}>
          <h2 className="text-center fw-bold mb-4 text-white">
            Key Features
          </h2>

          <Row className="justify-content-center gy-3">
            {features.map((feature, idx) => (
              <Col xs={12} sm={6} md={4} key={idx}>
                <Card
                  className="text-center p-3 shadow"
                  style={{
                    borderRadius: "16px",
                    background: "#ffffff",
                    color: "#013879",
                    minHeight: "165px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "10px" }}>
                    {feature.icon}
                  </div>

                  <h5 className="fw-bold" style={{ fontSize: "1rem" }}>
                    {feature.title}
                  </h5>

                  <p style={{ fontSize: "0.85rem", margin: 0 }}>
                    {feature.description}
                  </p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= BENEFITS SECTION (ON SCROLL) ================= */}
      <section
        style={{
          background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)",
        }}
      >
        <Container className="py-5">
          <h2 className="text-center fw-bold mb-5 text-white">
            Benefits
          </h2>

          <Row className="gy-4 justify-content-center">
            {benefits.map((benefit, idx) => (
              <Col xs={12} sm={6} md={4} key={idx}>
                <Card
                  className="text-center p-4 h-100 shadow"
                  style={{
                    borderRadius: "16px",
                    background: "#ffffff",
                    color: "#013879",
                  }}
                >
                  <div style={{ fontSize: "3rem", marginBottom: "15px" }}>
                    {benefit.icon}
                  </div>

                  <h5 className="fw-bold">{benefit.title}</h5>

                  <p style={{ margin: 0 }}>{benefit.description}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HRSharedServices;
