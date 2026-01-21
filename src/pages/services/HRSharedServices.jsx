// src/pages/services/HRSharedServices.jsx
import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const features = [
  {
    title: "Digital Statutory Registers",
    description: "Auto-generate statutory registers as prescribed under applicable labour laws.",
    icon: "📝",
  },
  {
    title: "State-wise Format Compliance",
    description: "Maintain registers in state-specific formats as per local labour rules.",
    icon: "📋",
  },
  {
    title: "Automated Data Synchronization",
    description: "Employee, attendance, wage, and leave data auto-updated across registers.",
    icon: "🔄",
  },
  {
    title: "Version Control & Audit Trail",
    description: "Complete history of changes with date and user tracking for audits.",
    icon: "✅",
  },
];

const benefits = [
  {
    title: "Inspection & Audit Ready",
    description: "Instant access to updated statutory registers during labour inspections.",
    icon: "✔️",
  },
  {
    title: "Reduced Compliance Risk",
    description: "Eliminate manual errors, penalties, and non-compliance exposure.",
    icon: "📈",
  },
  {
    title: "Centralized Secure Storage",
    description: "All statutory registers stored securely with easy retrieval anytime.",
    icon: "💼",
  },
];

const HRSharedServices = () => {
  const navigate = useNavigate();
  const [hoverDemo, setHoverDemo] = useState(false);
  const [hoverHome, setHoverHome] = useState(false);

  return (
    <section style={{ background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)", minHeight: "100vh" }}>
      {/* HERO SECTION */}
      <Container fluid className="py-5" style={{ background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
        <Container className="text-center py-5">
          <h1 className="fw-bold mb-3 text-white">Register Management</h1>
          <p className="mb-4 text-white opacity-75" style={{ maxWidth: "700px", margin: "0 auto" }}>
            Manage HR registers and statutory records effortlessly with our professional services.
          </p>

          {/* ORANGE BUTTONS */}
          <button
            onClick={() => navigate("/contact")}
            onMouseEnter={() => setHoverDemo(true)}
            onMouseLeave={() => setHoverDemo(false)}
            style={{
              backgroundColor: hoverDemo ? "#b55b36" : "#d27147",
              border: "none",
              color: "#ffffff",
              padding: "8px 20px",
              marginRight: "12px",
              borderRadius: "6px",
              fontWeight: "500",
              fontSize: "0.9rem",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Book a Demo
          </button>

          <button
            onClick={() => navigate("/")}
            onMouseEnter={() => setHoverHome(true)}
            onMouseLeave={() => setHoverHome(false)}
            style={{
              backgroundColor: hoverHome ? "#b55b36" : "#d27147",
              border: "none",
              color: "#ffffff",
              padding: "8px 20px",
              borderRadius: "6px",
              fontWeight: "500",
              fontSize: "0.9rem",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Back to Home
          </button>
        </Container>
      </Container>

      {/* FEATURES SECTION */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-5 text-white">Features</h2>
        <Row className="gy-4 justify-content-center">
          {features.map((feature, idx) => (
            <Col xs={12} sm={6} md={3} key={idx}>
              <Card
                className="text-center p-4 h-100 border-0 shadow"
                style={{ borderRadius: "16px", background: "#ffffff", color: "#013879", transition: "0.3s" }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "15px" }}>{feature.icon}</div>
                <h5 className="fw-bold">{feature.title}</h5>
                <p style={{ color: "#013879" }}>{feature.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* BENEFITS SECTION */}
      <Container className="py-5" style={{ background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)" }}>
        <h2 className="text-center fw-bold mb-5 text-white">Benefits</h2>
        <Row className="gy-4 justify-content-center">
          {benefits.map((benefit, idx) => (
            <Col xs={12} sm={6} md={4} key={idx}>
              <Card
                className="text-center p-4 h-100 border-0 shadow"
                style={{ borderRadius: "16px", background: "#ffffff", color: "#013879", transition: "0.3s" }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "15px" }}>{benefit.icon}</div>
                <h5 className="fw-bold">{benefit.title}</h5>
                <p style={{ color: "#013879" }}>{benefit.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default HRSharedServices;
